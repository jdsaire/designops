# assets/js/core/

The modules every page runs. Two of them, `i18n.js` and `paths.js`, decide where every dictionary and link resolves from: they never move.

| File | Who it's for |
|---|---|
| [`i18n.js`](i18n.js) | Anyone changing how a language loads or switches: it merges the shared chrome with the page's own dictionary |
| [`paths.js`](paths.js) | Anyone adding a page: the one place that knows how deep each page sits below the root |
| [`theme.js`](theme.js) | Anyone changing the dark and light themes |
| [`navchrome.js`](navchrome.js) | Anyone changing the navigation's behaviour: the Work menu, the phone menu, the bar on scroll |
| [`progress.js`](progress.js) | Anyone changing the scroll progress bar |
| [`decoration.js`](decoration.js) | Anyone changing a decoration pattern; the spec is [`../../../docs/v3/organisms/decoration-system.spec.md`](../../../docs/v3/organisms/decoration-system.spec.md) |
