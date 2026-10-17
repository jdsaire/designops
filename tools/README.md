# tools/

The checks anyone can run on a fresh clone, from the repository root, with Python 3 and nothing to install. Each prints what it found and ends with one line to read: `failures: 0` means clean. The pull-request template asks for the first two on every change.

| File | Who it's for |
|---|---|
| [`parity.py`](parity.py) | Anyone who changed a dictionary or a keyed element. `python3 tools/parity.py`: same keys in the same order in EN and ES, every key the markup uses exists, no page key shadows a shared one, and every markup fallback equals its English value |
| [`links.py`](links.py) | Anyone who added, moved or renamed a file. `python3 tools/links.py`: every relative link in the repository's Markdown resolves |
| [`orphans.py`](orphans.py) | Anyone who removed markup or script. `python3 tools/orphans.py`: every dictionary key is still used somewhere |
| [`order.py`](order.py) | Anyone who added keys to a page. `python3 tools/order.py` reports how many keys sit out of page order; `--write <page>` reorders that page's pair, values untouched. A report, so it fails only with `--strict` |

The dictionaries these tools read are listed in [`../DICTIONARIES.md`](../DICTIONARIES.md). Visual checks (screenshots across widths, themes, languages and browsers) need a headless browser and live with each run's records, outside the repository.
