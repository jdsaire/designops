# assets/

Everything more than one page uses: styles, scripts, the site-wide dictionaries, images, fonts and the CV files. A page's own copy lives with the page (`about/i18n/`, `work/<brief>/i18n/`, and `i18n/` for Main); this folder holds what is shared.

| File | Who it's for |
|---|---|
| [`css/`](css/) | Anyone changing how a page looks: base tokens, shared components, per-page styles. See [`css/README.md`](css/README.md) |
| [`js/`](js/) | Anyone changing behaviour: the core engines, Main's entry, per-page scripts. See [`js/README.md`](js/README.md) |
| [`i18n/`](i18n/) | Anyone changing the copy every page shares: the site chrome (`en.json`, `es.json`) and, in `briefs/`, the layer the four briefs share |
| [`img/`](img/README.md) | Anyone replacing an image: logos, badges, the portrait, work and service art |
| [`fonts/archivo/`](fonts/archivo/README.md) | Anyone checking the typeface: the self-hosted Archivo files and their licence |
| [`docs/`](docs/README.md) | Readers downloading the CV, and anyone updating it |

Looking for the project's plans and reports instead? They are in [`../docs/`](../docs/README.md), which the site does not load.
