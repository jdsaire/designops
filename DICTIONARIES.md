# Dictionaries

Every word the site shows comes from an English and a Spanish dictionary, one pair per scope. A page loads three levels and a lower level never repeats a key from a higher one: the **global** pair carries what every page shares (navigation, footer, menus); the **regional** pairs carry what the four briefs share; the **page** or **local** pair carries that page's own copy.

| Level | Serves | English | Spanish | Keys EN | Keys ES |
|---|---|---|---|---|---|
| Global | Every page: navigation, footer and its legal row and overlays, menus, the carousel buttons, the forms' consent line and the shared Contact and dashboard labels | [`assets/i18n/en.json`](assets/i18n/en.json) | [`assets/i18n/es.json`](assets/i18n/es.json) | 62 | 62 |
| Regional | The four briefs: shared interface labels | [`assets/i18n/briefs/briefs-ui.en.json`](assets/i18n/briefs/briefs-ui.en.json) | [`assets/i18n/briefs/briefs-ui.es.json`](assets/i18n/briefs/briefs-ui.es.json) | 32 | 32 |
| Regional | The four briefs: tags | [`assets/i18n/briefs/tags.en.json`](assets/i18n/briefs/tags.en.json) | [`assets/i18n/briefs/tags.es.json`](assets/i18n/briefs/tags.es.json) | 17 | 17 |
| Page | Main | [`i18n/main.en.json`](i18n/main.en.json) | [`i18n/main.es.json`](i18n/main.es.json) | 49 | 49 |
| Page | About | [`about/i18n/about.en.json`](about/i18n/about.en.json) | [`about/i18n/about.es.json`](about/i18n/about.es.json) | 210 | 210 |
| Page | Contact | [`contact/i18n/contact.en.json`](contact/i18n/contact.en.json) | [`contact/i18n/contact.es.json`](contact/i18n/contact.es.json) | 30 | 30 |
| Page | Privacy policy | [`privacy/i18n/privacy.en.json`](privacy/i18n/privacy.en.json) | [`privacy/i18n/privacy.es.json`](privacy/i18n/privacy.es.json) | 21 | 21 |
| Page | Report an issue | [`report/i18n/report.en.json`](report/i18n/report.en.json) | [`report/i18n/report.es.json`](report/i18n/report.es.json) | 38 | 38 |
| Local | Brief 01 · AccreditaPass | [`work/accreditapass/i18n/accreditapass.en.json`](work/accreditapass/i18n/accreditapass.en.json) | [`work/accreditapass/i18n/accreditapass.es.json`](work/accreditapass/i18n/accreditapass.es.json) | 146 | 146 |
| Local | Brief 02 · Trust & Verify | [`work/trust-verify-brief/i18n/yape-trust-verify.en.json`](work/trust-verify-brief/i18n/yape-trust-verify.en.json) | [`work/trust-verify-brief/i18n/yape-trust-verify.es.json`](work/trust-verify-brief/i18n/yape-trust-verify.es.json) | 151 | 151 |
| Local | Brief 03 · TUUA Transfer | [`work/airport/i18n/airport.en.json`](work/airport/i18n/airport.en.json) | [`work/airport/i18n/airport.es.json`](work/airport/i18n/airport.es.json) | 250 | 250 |
| Local | Brief 04 · Portfolio | [`work/portfolio-evolution/i18n/designops.en.json`](work/portfolio-evolution/i18n/designops.en.json) | [`work/portfolio-evolution/i18n/designops.es.json`](work/portfolio-evolution/i18n/designops.es.json) | 160 | 160 |
| | **Total** | | | **1,166** | **1,166** |

Main, About, Contact, the privacy policy and the report page load the global pair and their own; each brief loads the global pair, the two regional pairs and its own. Within a pair the keys follow the order in which the page uses them, so a dictionary reads top to bottom like its page; `python3 tools/order.py --strict` reads 0 on all seven pages since PR #42, and on the privacy policy and the report page since PR #45.

## Check them

```sh
python3 tools/parity.py
```

It ends with `failures: 0` when both languages carry the same keys in the same order, every key the markup uses exists, and every markup fallback equals its English value. The tools are described in [`tools/`](tools/README.md); the engine that loads the pairs is [`assets/js/core/i18n.js`](assets/js/core/i18n.js).

When a change adds, renames or retires a key, it updates the counts above in the same pull request (SR-4).
