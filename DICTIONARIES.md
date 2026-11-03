# Dictionaries

Every word the site shows comes from an English and a Spanish dictionary, one pair per scope. A page loads three levels and a lower level never repeats a key from a higher one: the **global** pair carries what every page shares (navigation, footer, menus); the **regional** pairs carry what the four briefs share; the **page** or **local** pair carries that page's own copy.

| Level | Serves | English | Spanish | Keys EN | Keys ES |
|---|---|---|---|---|---|
| Global | Every page: navigation and its menus, the footer with its sitemap and legal row, the four legal overlays with the privacy policy, the carousel buttons, the forms' consent line, the imagery caption and the shared Contact and dashboard labels | [`assets/i18n/en.json`](assets/i18n/en.json) | [`assets/i18n/es.json`](assets/i18n/es.json) | 99 | 99 |
| Regional | The four briefs: shared interface labels | [`assets/i18n/briefs/briefs-ui.en.json`](assets/i18n/briefs/briefs-ui.en.json) | [`assets/i18n/briefs/briefs-ui.es.json`](assets/i18n/briefs/briefs-ui.es.json) | 32 | 32 |
| Regional | The four briefs: tags | [`assets/i18n/briefs/tags.en.json`](assets/i18n/briefs/tags.en.json) | [`assets/i18n/briefs/tags.es.json`](assets/i18n/briefs/tags.es.json) | 17 | 17 |
| Page | Main | [`i18n/main.en.json`](i18n/main.en.json) | [`i18n/main.es.json`](i18n/main.es.json) | 49 | 49 |
| Page | About | [`about/i18n/about.en.json`](about/i18n/about.en.json) | [`about/i18n/about.es.json`](about/i18n/about.es.json) | 203 | 203 |
| Page | Résumé | [`resume/i18n/resume.en.json`](resume/i18n/resume.en.json) | [`resume/i18n/resume.es.json`](resume/i18n/resume.es.json) | 7 | 7 |
| Page | Contact | [`contact/i18n/contact.en.json`](contact/i18n/contact.en.json) | [`contact/i18n/contact.es.json`](contact/i18n/contact.es.json) | 29 | 29 |
| Page | Feedback | [`feedback/i18n/feedback.en.json`](feedback/i18n/feedback.en.json) | [`feedback/i18n/feedback.es.json`](feedback/i18n/feedback.es.json) | 38 | 38 |
| Local | Brief 01 · AccreditaPass | [`work/accreditapass/i18n/accreditapass.en.json`](work/accreditapass/i18n/accreditapass.en.json) | [`work/accreditapass/i18n/accreditapass.es.json`](work/accreditapass/i18n/accreditapass.es.json) | 146 | 146 |
| Local | Brief 02 · Trust & Verify | [`work/trust-verify-brief/i18n/yape-trust-verify.en.json`](work/trust-verify-brief/i18n/yape-trust-verify.en.json) | [`work/trust-verify-brief/i18n/yape-trust-verify.es.json`](work/trust-verify-brief/i18n/yape-trust-verify.es.json) | 151 | 151 |
| Local | Brief 03 · TUUA Transfer | [`work/airport/i18n/airport.en.json`](work/airport/i18n/airport.en.json) | [`work/airport/i18n/airport.es.json`](work/airport/i18n/airport.es.json) | 250 | 250 |
| Local | Brief 04 · Portfolio | [`work/portfolio-evolution/i18n/designops.en.json`](work/portfolio-evolution/i18n/designops.en.json) | [`work/portfolio-evolution/i18n/designops.es.json`](work/portfolio-evolution/i18n/designops.es.json) | 160 | 160 |
| | **Total** | | | **1,181** | **1,181** |

Main, About, Résumé, Contact and the Feedback page load the global pair and their own; each brief loads the global pair, the two regional pairs and its own. Within a pair the keys follow the order in which the page uses them, so a dictionary reads top to bottom like its page; `python3 tools/order.py --strict` reads 0 on every page: the seven from PR #42, Feedback (the report page) since PR #45, Résumé since PR #46.

## Check them

```sh
python3 tools/parity.py
```

It ends with `failures: 0` when both languages carry the same keys in the same order, every key the markup uses exists, and every markup fallback equals its English value. The tools are described in [`tools/`](tools/README.md); the engine that loads the pairs is [`assets/js/core/i18n.js`](assets/js/core/i18n.js).

When a change adds, renames or retires a key, it updates the counts above in the same pull request (SR-4).
