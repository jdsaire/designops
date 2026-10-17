# work/yape-trust-verify-brief/

Brief 02 · Trust & Verify, served at `/work/yape-trust-verify-brief/`: "The screenshot says paid. My app asks the bank." The page is self-contained, with its styles and scripts inline; it links the shared chrome (navigation, footer, progress bar, decoration) from [`../../assets/`](../../assets/README.md).

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the brief: markup, inline styles and scripts, in one file |
| [`i18n/`](i18n/) | Anyone changing the brief's copy: its own English and Spanish dictionaries, same keys in both, on top of the briefs' shared layer in [`../../assets/i18n/briefs/`](../../assets/i18n/briefs/) |
| [`img/`](img/) | The receipt image the brief shows |
| [`docs/`](docs/README.md) | The brief's first copy record and site specification, kept as history |

Its charts and dashboard panel take their styles from [`../../assets/css/shared/brief-charts.css`](../../assets/css/shared/brief-charts.css).

The other briefs are in [`../`](../README.md).
