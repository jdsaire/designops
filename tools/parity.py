"""Dictionary check, from the repository root: python3 tools/parity.py [out.json]
1. EN/ES parity: same keys, same order, per dictionary pair.
2. Per page: keys used in markup but absent from the page's dictionary chain (missing),
   local keys that shadow an upper level (shadow).
3. Markup fallback == EN value, per element: data-i18n (text), data-i18n-html (inner HTML),
   data-i18n-alt (alt), data-i18n-aria (aria-label).
Prints a summary and every finding, then `failures: N` (0 = clean; exit code 1 otherwise).
Optional out.json keeps the findings for a later comparison. Standard library only."""
import json, os, re, sys, glob, html
from html.parser import HTMLParser

OUT = sys.argv[1] if len(sys.argv) > 1 else None
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

G = ['assets/i18n/{lc}.json']
R = ['assets/i18n/briefs/briefs-ui.{lc}.json', 'assets/i18n/briefs/tags.{lc}.json']
PAGES = {
    'main': ('index.html', G, ['i18n/main.{lc}.json']),
    'about': ('about/index.html', G, ['about/i18n/about.{lc}.json']),
    'contact': ('contact/index.html', G, ['contact/i18n/contact.{lc}.json']),
    'b01': ('work/accreditapass/index.html', G + R, ['work/accreditapass/i18n/accreditapass.{lc}.json']),
    'b02': ('work/yape-trust-verify-brief/index.html', G + R, ['work/yape-trust-verify-brief/i18n/yape-trust-verify.{lc}.json']),
    'b03': ('work/airport/index.html', G + R, ['work/airport/i18n/airport.{lc}.json']),
    'b04': ('work/portfolio-evolution/index.html', G + R, ['work/portfolio-evolution/i18n/designops.{lc}.json']),
}
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
find = {'parity': [], 'missing': [], 'shadow': [], 'fallback': []}


def load(f):
    return json.load(open(f, encoding='utf-8'))


# 1. parity
for en in sorted(set(glob.glob('**/*.en.json', recursive=True)) | {'assets/i18n/en.json'}):
    if en.startswith('docs/'):
        continue
    es = en[:-len('en.json')] + 'es.json'
    if not os.path.exists(es):
        find['parity'].append(f'{en}: no ES file'); continue
    a, b = load(en), load(es)
    if list(a) != list(b):
        diff = sorted(set(a) ^ set(b))
        find['parity'].append(f'{en}: ' + (('keys differ ' + ', '.join(diff)) if diff else 'order differs'))


class Scan(HTMLParser):
    def __init__(self, src):
        super().__init__(convert_charrefs=False)
        self.src = src; self.stack = []; self.items = []
        self.lines = [0]
        for m in re.finditer('\n', src):
            self.lines.append(m.end())

    def off(self):
        ln, col = self.getpos(); return self.lines[ln - 1] + col

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        start = self.off(); end = self.src.index('>', start) + 1
        for a in ('data-i18n-alt', 'data-i18n-aria'):
            if d.get(a):
                self.items.append((a, d[a], d.get('alt' if a == 'data-i18n-alt' else 'aria-label')))
        if tag in VOID:
            return
        self.stack.append((tag, d, end))

    def handle_startendtag(self, tag, attrs):
        d = dict(attrs)
        for a in ('data-i18n-alt', 'data-i18n-aria'):
            if d.get(a):
                self.items.append((a, d[a], d.get('alt' if a == 'data-i18n-alt' else 'aria-label')))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        start = self.off()
        while self.stack:
            t, d, inner_start = self.stack.pop()
            if t == tag:
                inner = self.src[inner_start:start]
                for a in ('data-i18n', 'data-i18n-html'):
                    if d.get(a):
                        self.items.append((a, d[a], inner))
                break


norm_ws = lambda s: re.sub(r'\s+', ' ', s).strip()
strip_tags = lambda s: re.sub(r'<[^>]+>', '', s)

for pid, (page, upper, local) in PAGES.items():
    src = open(page, encoding='utf-8').read()
    sc = Scan(src); sc.feed(src)
    chain = {}
    up = {}
    for f in upper:
        up.update(load(f.format(lc='en')))
    loc = {}
    for f in local:
        loc.update(load(f.format(lc='en')))
    chain.update(up); chain.update(loc)
    for k in sorted(set(up) & set(loc)):
        find['shadow'].append(f'{pid}: {k}')
    used = set(k for _, k, _ in sc.items)
    for k in sorted(used - set(chain)):
        if "'" in k or '+' in k:
            continue
        find['missing'].append(f'{pid}: {k}')
    seen = set()
    for attr, k, raw in sc.items:
        if k not in chain:
            continue
        want = chain[k]
        if attr == 'data-i18n':
            got = norm_ws(html.unescape(strip_tags(raw))); exp = norm_ws(want)
        elif attr == 'data-i18n-html':
            got = norm_ws(raw); exp = norm_ws(want)
        else:
            got = norm_ws(html.unescape(raw or '')); exp = norm_ws(want)
        if got != exp:
            tag = f'{pid}: {attr}={k}'
            if tag in seen:
                continue
            seen.add(tag)
            find['fallback'].append({'k': tag, 'markup': got[:90], 'en': exp[:90]})

summary = {k: len(v) for k, v in find.items()}
print(json.dumps(summary))
for k, v in find.items():
    for x in v:
        print(f'  {k}: {x}')
n = sum(summary.values())
print(f'failures: {n}')
if OUT:
    json.dump(find, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
sys.exit(1 if n else 0)
