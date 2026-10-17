"""Keys-vs-references: every dictionary key must be referenced somewhere in the site's markup or scripts.
Referenced = data-i18n* attribute, the key as a word in a script (quoted, dot access, object key), or a script-composed
family whose stem appears quoted ('gantt_ph_' + id, count('sch_prs', n) -> sch_prs_1 / sch_prs_n). From the repository root: python3 tools/orphans.py. Standard library only."""
import json, glob, re, os, sys
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
src = ''.join(open(f, encoding='utf-8').read() for f in glob.glob('**/*.html', recursive=True) + glob.glob('assets/js/**/*.js', recursive=True) if not f.startswith('docs/'))
files = sorted(set(glob.glob('assets/i18n/en.json') + glob.glob('assets/i18n/briefs/*.en.json') + glob.glob('i18n/*.en.json') + glob.glob('*/i18n/*.en.json') + glob.glob('work/*/i18n/*.en.json')))
orph, n = [], 0
for f in files:
    for k in json.load(open(f, encoding='utf-8')):
        n += 1
        if re.search(r'\b' + re.escape(k) + r'\b', src): continue
        stems = [k.rsplit('_', 1)[0], re.match(r'([a-z]+_[a-z]+_)', k).group(1) if re.match(r'([a-z]+_[a-z]+_)', k) else None]
        if any(st and re.search(r"['\"]" + re.escape(st) + r"_?['\"]", src) for st in stems): continue
        orph.append(f + ':' + k)
print(json.dumps({'dictionaries': len(files), 'keys': n, 'orphans': len(orph)}))
for o in orph:
    print('  orphan: ' + o)
print(f'failures: {len(orph)}')
sys.exit(1 if orph else 0)
