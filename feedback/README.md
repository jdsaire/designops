# feedback/

The issue report page, served at `/feedback/`: where a visitor reports a problem with this site (content, display, accessibility, interaction, light security, a privacy request). It isn't in the navigation; the footer row, Contact, the privacy policy and [`../.well-known/security.txt`](../.well-known/security.txt) link it. The form posts to Web3Forms with Contact's key and its own subject, "Site issue report".

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the page's markup. It keeps Contact's form ids, so Contact's styles and script apply unchanged; it loads its own script from [`../assets/js/pages/feedback/`](../assets/js/pages/feedback/README.md) and its layout from [`../assets/css/pages/feedback/`](../assets/css/pages/feedback/README.md) |
| [`i18n/feedback.en.json`](i18n/feedback.en.json), [`i18n/feedback.es.json`](i18n/feedback.es.json) | Anyone changing the page's copy. Same keys in both languages, in page order. The page select reuses the navigation's page names from the global pair |
