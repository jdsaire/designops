# Standing rules

Rules that outlive the run that introduced them. Each one names the run it came from and the
reasoning behind it, so a later change can weigh it rather than trip over it. A rule leaves this
file only by an explicit decision, recorded the same way it arrived.

---

## SR-1 · No submitted value is ever written back into the document

**In force from:** S10D (Contact, locked organism), 20 Sep 2026.

No value that arrives through a form on this site may be assigned to `innerHTML`,
`outerHTML`, `insertAdjacentHTML`, `document.write`, `eval` or a `Function` constructor, or
interpolated into a string that becomes markup. Any future display of a submitted value is escaped
text — `textContent`, or an attribute set through `setAttribute` — never markup.

**Why.** The site is static. There is no database, no server-side code of our own, no login and no
session, and the contact form posts to a third-party endpoint. Nothing submitted through it can
write to this repository or to the deployed pages, so the classic injection paths do not exist
here. What does exist is the possibility of a later change that echoes a submitted value back onto
the page — a confirmation that repeats the message, a preview, an error that quotes the input. That
change would create the injection surface in one commit, and it would look harmless while doing it.

At the time this rule was written the surface was measured and found empty: across the Contact
page's entire script graph — `pages/contact/main.js`, `pages/contact/contact.js`, `core/i18n.js`,
`core/theme.js`, `core/progress.js`, `core/navchrome.js` and `core/paths.js` — there were zero
occurrences of any HTML-writing sink. The rule exists to keep it that way rather than to fix
something.

**How to apply.** When adding any display of user input, reach for `textContent`. If a design
genuinely needs markup in that position, the markup is authored in the page and only the text is
substituted. Reviewers: a diff that introduces `innerHTML` anywhere near a form value fails this
rule on sight.

---

## SR-2 · The Contact page's content policy is derived, not templated

**In force from:** S10D, 20 Sep 2026.

`contact/index.html` carries a `Content-Security-Policy` meta tag whose directives were derived
from what that page actually loads, and it must stay that way. Adding a script, a stylesheet, a
font, an image host or a network destination to that page means re-deriving the policy and
re-checking the console, not widening a directive until the warning stops.

**Why.** A policy copied from a template either blocks something the page needs or permits things
it does not, and both failures are silent. The inline theme bootstrap is admitted by a SHA-256
hash: **changing one byte of that script invalidates the hash and the page loads unthemed**, so the
hash is recomputed whenever that script changes.

**Known limits, recorded so they are not rediscovered.** GitHub Pages serves no response headers we
control, so a meta tag is the only vehicle available. `frame-ancestors`, `report-uri` and `sandbox`
are inert in a meta policy, which means this page has no clickjacking protection from CSP. The
policy covers `contact/` alone; extending it to the other seven pages is CC-3's.

---

## SR-3 · A brief's read time is measured, never estimated

**In force from:** PR #40 (mobile organisms), 14 Oct 2026; ratified in the PR #40 sync (SY40-Q7), 16 Oct 2026.

A brief's hero read time is four numbers: English and Spanish, each for phones (below 768 px) and for 768 px and
up. Each is measured on the merged tip: the words the width shows in `main`, with reveal panels opened, divided by
230, rounded up. The hero shows one, chosen by `html[lang]` and the width in
`assets/css/shared/brief-charts.css`, with no keys and no script. Where all four round to the same number, the
brief shows that number alone.

**Why.** Phones show less than desktop (no charts, no chart footnotes, no in-card panels) and Spanish runs longer
than English, so a single number misstated three of four readers. The numbers live in markup and go stale silently.

**How to apply.** Re-measure all four numbers whenever copy changes or what a width shows changes, before the run
that made the change closes, and record per-cell words and minutes in the run's records.
