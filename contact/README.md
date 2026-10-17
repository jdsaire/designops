# contact/

The Contact page, served at `/contact/`: a three-field form and the outbound links. The form posts to Web3Forms; the page carries its own content-security policy, derived as standing rule SR-2 describes ([`../docs/v4/STANDING-RULES.md`](../docs/v4/STANDING-RULES.md)).

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the page's markup or its policy. It loads its script from [`../assets/js/pages/contact/`](../assets/js/pages/contact/README.md) and its styles from [`../assets/css/pages/contact/`](../assets/css/pages/contact/README.md) |
| [`i18n/contact.en.json`](i18n/contact.en.json), [`i18n/contact.es.json`](i18n/contact.es.json) | Anyone changing Contact's copy. Same keys in both languages, in page order |

A change to an inline script on this page changes its hash in the policy: SR-1 and SR-2 say how.
