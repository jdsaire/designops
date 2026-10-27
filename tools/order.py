"""Do the page dictionaries follow the page? From the repository root: python3 tools/order.py [--write <page>]
For each page's own EN/ES pair, compares the key order with the order in which the page's markup first uses each key
(data-i18n, -html, -aria, -alt, -placeholder) and reports how many keys sit out of place (the fewest moves).
Keys the page's script renders (absent from the markup) are left where they are.
`--write <page>` (main, about, contact, b01, b02, b03, b04) rewrites that pair in page order, values untouched, EN and
ES alike: script-rendered keys go right after the key that shares their longest name prefix.
Report only: the exit code is 0 unless --strict is given. Standard library only."""
import bisect, collections, json, os, re, sys
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
PAGES = {
    'main': ('index.html', 'i18n/main'),
    'about': ('about/index.html', 'about/i18n/about'),
    'contact': ('contact/index.html', 'contact/i18n/contact'),
    'b01': ('work/accreditapass/index.html', 'work/accreditapass/i18n/accreditapass'),
    'b02': ('work/trust-verify-brief/index.html', 'work/trust-verify-brief/i18n/yape-trust-verify'),
    'b03': ('work/airport/index.html', 'work/airport/i18n/airport'),
    'b04': ('work/portfolio-evolution/index.html', 'work/portfolio-evolution/i18n/designops'),
}
ATTR = re.compile(r'data-i18n(?:-html|-aria|-alt|-placeholder)?="([^"]+)"')

def first_use(html):
    first = {}
    for m in ATTR.finditer(open(html, encoding='utf-8').read()):
        first.setdefault(m.group(1), m.start())
    return first

def load(base, lc):
    return json.load(open(f'{base}.{lc}.json', encoding='utf-8'), object_pairs_hook=collections.OrderedDict)

total = 0
if '--write' in sys.argv:
    pid = sys.argv[sys.argv.index('--write') + 1]
    html, base = PAGES[pid]; first = first_use(html)
    d = {lc: load(base, lc) for lc in ('en', 'es')}
    keys = list(d['en']); assert set(keys) == set(d['es']), 'EN/ES key sets differ'
    order = sorted((k for k in keys if k in first), key=lambda k: first[k])
    for k in (k for k in keys if k not in first):
        best = max(order, key=lambda j: len(os.path.commonprefix([j, k])), default=None)
        pos = order.index(best) + 1 if best and os.path.commonprefix([best, k]) else len(order)
        while pos < len(order) and best and os.path.commonprefix([order[pos], k]) == os.path.commonprefix([best, k]):
            pos += 1
        order.insert(pos, k)
    for lc in ('en', 'es'):
        p = f'{base}.{lc}.json'; raw = open(p, encoding='utf-8').read()
        ind = len(re.match(r'\{\n( *)"', raw).group(1))
        out = collections.OrderedDict((k, d[lc][k]) for k in order)
        open(p, 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, indent=ind) + ('\n' if raw.endswith('\n') else ''))
    print(f'{pid}: rewritten in page order ({len(order)} keys)')
for pid, (html, base) in PAGES.items():
    first = first_use(html)
    keys = [k for k in load(base, 'en') if k in first]
    tails = []
    for x in (first[k] for k in keys):
        i = bisect.bisect_left(tails, x)
        tails[i:i + 1] = [x]
    out = len(keys) - len(tails); total += out
    print(f'{pid}: {len(keys)} keys in the markup, {out} out of place')
print(f'out of place: {total}')
sys.exit(1 if total and '--strict' in sys.argv else 0)
