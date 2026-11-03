#!/usr/bin/env python3
"""imagery.py: the raster images under assets/img/work and assets/img/services against assets/img/imagery-manifest.json.

Checks (SR-5 as proposed in PR #46): every raster there is listed in the manifest; every listed file exists, is a WebP
within its budget (max_kb_480 / max_kb_800) and has the width its name says; and every page that shows one carries the
manifest's label key, visibly. Run from the repository root; ends with `failures: 0`.
"""
import json, os, re, struct, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
MAN = 'assets/img/imagery-manifest.json'
PAGES = ['index.html', 'about/index.html', 'resume/index.html', 'contact/index.html', 'feedback/index.html',
         'work/accreditapass/index.html', 'work/trust-verify-brief/index.html', 'work/airport/index.html',
         'work/portfolio-evolution/index.html']
fail = []

def webp_size(path):
    b = open(path, 'rb').read(30)
    if b[:4] != b'RIFF' or b[8:12] != b'WEBP':
        return None
    kind = b[12:16]
    if kind == b'VP8X':
        return 1 + int.from_bytes(b[24:27], 'little'), 1 + int.from_bytes(b[27:30], 'little')
    if kind == b'VP8 ':
        w, h = struct.unpack('<HH', b[26:30]); return w & 0x3FFF, h & 0x3FFF
    if kind == b'VP8L':
        n = int.from_bytes(b[21:25], 'little'); return (n & 0x3FFF) + 1, ((n >> 14) & 0x3FFF) + 1
    return None

m = json.load(open(MAN, encoding='utf-8'))
budget = m['budgets']
listed = {f for a in m['assets'] for f in a['files']}
for d in ('assets/img/work', 'assets/img/services'):
    for f in sorted(os.listdir(d)):
        p = f'{d}/{f}'
        if re.search(r'\.(webp|png|jpe?g|avif)$', f) and p not in listed:
            fail.append(f'not in manifest: {p}')
for p in sorted(listed):
    if not os.path.exists(p):
        fail.append(f'missing: {p}'); continue
    size = webp_size(p)
    if not size:
        fail.append(f'not a WebP: {p}'); continue
    w = int(re.search(r'-(\d+)\.webp$', p).group(1))
    if size[0] != w:
        fail.append(f'width {size[0]} != {w}: {p}')
    kb = os.path.getsize(p) / 1024
    cap = budget.get(f'max_kb_{w}')
    if cap is not None and kb > cap:
        fail.append(f'{kb:.1f} KB over the {cap} KB budget: {p}')
key = m['label_key']
pages_using = 0
for page in PAGES:
    html = open(page, encoding='utf-8').read()
    if any(os.path.basename(p) in html for p in listed):
        pages_using += 1
        if f'data-i18n="{key}"' not in html:
            fail.append(f'{page} shows a listed image without {key}')
for f in fail:
    print('  ' + f)
print(json.dumps({'listed_files': len(listed), 'pages_using': pages_using, 'label_key': key}))
print(f'failures: {len(fail)}')
sys.exit(1 if fail else 0)
