# Dictionaries

Every word the site shows comes from an English and a Spanish dictionary, one pair per scope. A page loads three levels and a lower level never repeats a key from a higher one: the **global** pair carries what every page shares (navigation, footer, menus); the **regional** pairs carry what the four briefs share; the **page** or **local** pair carries that page's own copy.

| Level | Serves | English | Spanish | Keys EN | Keys ES |
|---|---|---|---|---|---|
| Global | Every page: navigation, footer, menus | [`assets/i18n/en.json`](assets/i18n/en.json) | [`assets/i18n/es.json`](assets/i18n/es.json) | 23 | 23 |
| Regional | The four briefs: shared interface labels | [`assets/i18n/briefs/briefs-ui.en.json`](assets/i18n/briefs/briefs-ui.en.json) | [`assets/i18n/briefs/briefs-ui.es.json`](assets/i18n/briefs/briefs-ui.es.json) | 23 | 23 |
| Regional | The four briefs: tags | [`assets/i18n/briefs/tags.en.json`](assets/i18n/briefs/tags.en.json) | [`assets/i18n/briefs/tags.es.json`](assets/i18n/briefs/tags.es.json) | 17 | 17 |
| Regional | The four briefs: related-brief cards | [`assets/i18n/briefs/related.en.json`](assets/i18n/briefs/related.en.json) | [`assets/i18n/briefs/related.es.json`](assets/i18n/briefs/related.es.json) | 6 | 6 |
| Page | Main | [`i18n/main.en.json`](i18n/main.en.json) | [`i18n/main.es.json`](i18n/main.es.json) | 65 | 65 |
| Page | About | [`about/i18n/about.en.json`](about/i18n/about.en.json) | [`about/i18n/about.es.json`](about/i18n/about.es.json) | 145 | 145 |
| Page | Contact | [`contact/i18n/contact.en.json`](contact/i18n/contact.en.json) | [`contact/i18n/contact.es.json`](contact/i18n/contact.es.json) | 27 | 27 |
| Local | Brief 01 · AccreditaPass | [`work/accreditapass/i18n/accreditapass.en.json`](work/accreditapass/i18n/accreditapass.en.json) | [`work/accreditapass/i18n/accreditapass.es.json`](work/accreditapass/i18n/accreditapass.es.json) | 117 | 117 |
| Local | Brief 02 · Trust & Verify | [`work/yape-trust-verify-brief/i18n/yape-trust-verify.en.json`](work/yape-trust-verify-brief/i18n/yape-trust-verify.en.json) | [`work/yape-trust-verify-brief/i18n/yape-trust-verify.es.json`](work/yape-trust-verify-brief/i18n/yape-trust-verify.es.json) | 135 | 135 |
| Local | Brief 03 · TUUA Transfer | [`work/airport/i18n/airport.en.json`](work/airport/i18n/airport.en.json) | [`work/airport/i18n/airport.es.json`](work/airport/i18n/airport.es.json) | 247 | 247 |
| Local | Brief 04 · Portfolio | [`work/portfolio-evolution/i18n/designops.en.json`](work/portfolio-evolution/i18n/designops.en.json) | [`work/portfolio-evolution/i18n/designops.es.json`](work/portfolio-evolution/i18n/designops.es.json) | 146 | 146 |
| | **Total** | | | **951** | **951** |

Main, About and Contact load the global pair and their own; each brief loads the global pair, the three regional pairs and its own. Within a pair the keys follow the order in which the page uses them, so a dictionary reads top to bottom like its page. Briefs 01, 02 and 04 have a few keys out of that order today (`python3 tools/order.py`); PR #42 reorders them after it renumbers their acts.

## Check them

```sh
python3 tools/parity.py
```

It ends with `failures: 0` when both languages carry the same keys in the same order, every key the markup uses exists, and every markup fallback equals its English value. The tools are described in [`tools/`](tools/README.md); the engine that loads the pairs is [`assets/js/core/i18n.js`](assets/js/core/i18n.js).

When a change adds, renames or retires a key, it updates the counts above in the same pull request (SR-4).
