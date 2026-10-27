# work/portfolio-evolution/

Brief 04 · Portfolio, served at `/work/portfolio-evolution/`: "This web. My web.". The page is self-contained, with its styles and scripts inline; it links the shared chrome (navigation, footer, progress bar, decoration) from [`../../assets/`](../../assets/README.md).

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the brief: markup, inline styles and scripts, in one file |
| [`i18n/`](i18n/) | Anyone changing the brief's copy: its own English and Spanish dictionaries, same keys in both, on top of the briefs' shared layer in [`../../assets/i18n/briefs/`](../../assets/i18n/briefs/) |
| [`img/`](img/) | The three storyboard illustrations of Act 03 · The Solution, as SVG |

Its charts and dashboard panel take their styles from [`../../assets/css/shared/brief-charts.css`](../../assets/css/shared/brief-charts.css). Its Act 03 carousel takes its styles from [`../../assets/css/shared/carousel.css`](../../assets/css/shared/carousel.css) and, below 768, [`carousel-phone.css`](../../assets/css/shared/carousel-phone.css), and its behaviour from [`../../assets/js/core/carousel.js`](../../assets/js/core/carousel.js). Its dictionaries are named `designops.*.json`, after the brief's earlier name.

The other briefs are in [`../`](../README.md).
