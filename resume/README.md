# resume/

The Résumé page, served at `/resume/`: the portrait and the one-line summary, then the CV itself in the reader's language: in the browser's own viewer on computers with a mouse, and as a sheet fitted to the screen, with one Download, on phones and tablets. It holds what was About's opening and the CV until the full page is built.

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the page's markup. Its script is [`../assets/js/pages/resume/main.js`](../assets/js/pages/resume/main.js) |
| [`i18n/resume.en.json`](i18n/resume.en.json), [`i18n/resume.es.json`](i18n/resume.es.json) | Anyone changing the page's copy. Same keys in both languages, in page order |
