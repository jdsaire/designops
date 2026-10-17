"""Every relative link in the repository's Markdown resolves. From the repository root: python3 tools/links.py
Checks [text](path) and ![alt](path) links outside fenced code; skips URLs (scheme:) and same-page anchors.
Prints the count and every broken link, then `failures: N` (0 = clean; exit code 1 otherwise). Standard library only."""
import os, re, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(ROOT)
LINK = re.compile(r'!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)')
files = n = 0; broken = []
for root, dirs, fs in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules')]
    for f in fs:
        if not f.endswith('.md'):
            continue
        p = os.path.join(root, f)[2:]; files += 1
        text = re.sub(r'```.*?```', '', open(p, encoding='utf-8').read(), flags=re.S)
        for m in LINK.finditer(text):
            u = m.group(1)
            if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', u) or u.startswith('#'):
                continue
            n += 1
            target = os.path.normpath(os.path.join(os.path.dirname(p), u.split('#')[0].split('?')[0]))
            if not os.path.exists(target):
                broken.append(f'{p}: {u}')
print(f'{files} Markdown files, {n} relative links, {len(broken)} broken')
for b in broken:
    print('  broken: ' + b)
print(f'failures: {len(broken)}')
sys.exit(1 if broken else 0)
