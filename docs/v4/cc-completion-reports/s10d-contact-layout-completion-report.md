# S10D — Contact, locked organism · completion report

**Brief:** `BRIEF-CC-S10D-v1_0.md` · **Prompt:** `P-CC-S10D-ContactLayout-v1_0.xml`
**Branch:** `deploy/v16-s10d-contact-layout`, from `f5efe10` · **Pull request:** https://github.com/jdsaire/designops/pull/29
**Gates:** G0–G3 released by phrase; G4 merged by hand by the principal.
**Every figure below was measured in the run.** Harness: playwright-core driving the cached
Chromium headless shell, against `python3 -m http.server 8000 --bind 127.0.0.1` from the repository
root. Nothing was installed into the repository; it still has no `package.json`.

---

## 1. Commits

On `deploy/v16-s10d-contact-layout`, after `f5efe10` (PR #28), all bundled in PR #29:

- `fa71841` — feat(contact): reorder the page onto the channels-first organism
- `fd9630d` — style(contact): rebuild the page on option C at every breakpoint
- `32ad0f1` — chore(contact): drop the style rules with no markup left to act on
- `f39988e` — feat(i18n): move the contact engagement options onto the current triad
- `0ae1b5f` — fix(contact): reconcile the page's literal English with the dictionary
- `b10b108` — fix(i18n): shorten the contact page's mobile line
- `7f2e373` — style(contact): move the destinations to the top right and even the stack
- `15a8795` — style(contact): stack the page identically at every breakpoint
- `b69c95f` — feat(contact): bound every field by length and by type
- `459cf86` — fix(contact): move the two inline hooks into the stylesheet and the module
- `89e312e` — feat(contact): declare a content policy derived from what the page loads
- `0bddd2f` — docs: record the no-echo rule as a standing rule of this repository
- `ea286f5` — feat(i18n): complete the contact page's Spanish set
- `677a78e` — fix(contact): catch a logo that failed before the listener was bound
- (this commit) — docs: archive the S10D plan and completion report

14 commits before this one, one per discrete item, no split needed anywhere. Three of them
(`b10b108`, `7f2e373`, `15a8795`) are corrections the principal directed at G1; they are items in
their own right, not amendments folded into earlier commits.

Eight files: `contact/index.html`, `assets/css/pages/contact/contact.css`,
`assets/css/shared/section-extras.css`, `assets/js/pages/contact/contact.js`,
`assets/i18n/en.json`, `assets/i18n/es.json`, `docs/v4/README.md`, `docs/v4/STANDING-RULES.md`.

## 2. Outcome

The Contact page was rebuilt from an organism whose editorial block reserved a full viewport at
every size — `.pagehero { min-height: 100svh }` in a shared stylesheet — into a single stacked
organism that reads identically at 390, 768 and 1440. The order is eyebrow, headline, LinkedIn,
GitHub, the eyebrow that opens the form, then the form. The channels were lifted out of a separate
section two to three screens below the fold and now sit directly under the heading, one per line,
where they had previously rendered 4–5px apart on one line. The form's own fields pair above 768px
so the whole form stays reachable without a second screen. The first form field moved from 947 /
1135 / 1075 px down the page to 357 / 374 / 523 — inside the first screen at all three widths, which
it had not been at any of them.

English changed in exactly the two places the brief authorised: the three engagement options became
Prototype / Adoption / Method, and a new line opens the form. Eight literal strings on the page that
disagreed with `en.json` were reconciled to it; the five chrome literals that also disagree were
left untouched because they are byte-identical across all eight pages and belong to CC-3. Spanish
was produced by one pass of `designops-copy-es` over the approved English, after the English gate,
and never hand-written. Hardening added length and type bounds to every field, kept the bot trap
while moving it off an inline style, removed the page's last inline event handler, and declared a
content policy derived from a measured inventory of what the page loads.

**Both invariants held.** Mechanical: the `<form>` block came through the structural rebuild
byte-identical, and the destination, all three hidden fields, the honeypot, the field order and
every hook (`#contactForm`, `#field-*`, `.has-error`, `#successModal`, `#modalCloseBtn`,
`#submitRow`, `#footerActions`) are unchanged. `page-hero.css`, `i18n.js`, `navchrome.js`,
`paths.js`, `about/index.html` and `capabilities/index.html` were never opened. Content: no English
was authored outside the two authorised places, and no Spanish was typed by hand.

## 3. Results against the brief's §8 success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | First form field inside the first screen at all three widths | **PASS** — 357/844, 374/1024, 523/900 |
| 2 | At 768 and 1440, both links inside the first screen, each on its own line, visibly separated | **PASS** — LinkedIn/GitHub at 109/147 and 171/213; separation 15px and 17px, from 4px and 5px |
| 3 | Mobile order: eyebrow, headline, LinkedIn, GitHub, the line, form; no lede, no channels heading | **PASS** — order verified programmatically as `eyebrow → headline → linkedin → github → formLine → firstField` |
| 4 | On desktop and tablet the lede and the channels heading are present | **OVERRIDDEN — not met, by the principal's instruction at G1.** Both are hidden at every breakpoint. See §4. |
| 5 | No horizontal scrolling at any of the three widths | **PASS** — `scrollWidth == clientWidth` at 390/768/1440, in both themes and both languages |
| 6 | About and Capabilities render exactly as today | **PASS** — 6 of 6 full-page screenshot SHA-256 checksums byte-identical to the `f5efe10` baseline. Capabilities renders nav-only on both sides of the comparison: `main { display: none }` at `capabilities-cards.css:240`, deliberate since `ab6ab30` per Amendment F3 / S4D |
| 7 | A submission reaches the destination inbox and the success state appears | **PASS** — confirmed by the principal at G2 from the running page. Not asserted by the run |
| 8 | Every field enforces a maximum length and its own input type; the bot trap survives | **PASS** — typed 250/306/5000 chars, kept 100/150/2000; select bounded by its 5 options; `botcheck` still present, `display:none`, `tabindex="-1"`, absent from the tab order |
| 9 | The page declares a content policy and loads with no blocked resource and no console error | **PASS** — 20 requests, 0 failed, 0 CSP violations, 0 console output, through first paint plus both toggles. Enforcement proven with a control: a fetch to `example.com` was refused by name |
| 10 | Every English string has a Spanish counterpart; the page reads wholly in Spanish | **PASS on the 37 contact-owned keys, with 4 excepted.** See §4 |
| 11 | Completable by keyboard alone, both themes, AA contrast | **PASS** — all four fields and the submit focusable and operable; honeypot never focused. Lowest ratio measured 4.69:1 (light-theme disclaimer) against a 4.5 floor; everything else 5.30:1 to 21.00:1 |
| 12 | No submitted value written into the document anywhere in the page's scripts | **PASS** — 0 occurrences of `innerHTML`, `insertAdjacentHTML`, `document.write`, `eval` or `new Function` across all seven files in the page's script graph |

Additional criteria from the prompt: every gate halted and released only on its own phrase, and G4
ended with the PR open and unmerged (**PASS**); zero AI attribution across every commit message,
author, committer, branch name, PR title, PR body and the full diff (**PASS**, 0 hits); push policy
followed, PR opened after the first commit with its URL printed, never merged, auto-merge never
enabled (**PASS**); internal markdown links re-derived (**PASS**, see §6).

## 4. Authorized deviations

1. **Success criterion 4 is not met, by instruction.** At G1 the principal directed that desktop and
   tablet adopt the mobile arrangement in full. The lede and the channels heading are therefore
   hidden at every breakpoint, not just on mobile. **This overrides ruling D3** ("Desktop and tablet
   keep C as approved") and makes criterion 4 false as written. It owes a line in
   `PRE-MAX-CHANGELOG.md`. The markup and both keys (`contact_lede`, `contact_elsewhere_head`)
   remain in place, so the decision is reversible without re-authoring copy.
2. **Criterion 10 excepts four keys.** `work_card1_label` through `work_card4_label` — the Work
   dropdown labels — have no Spanish and still render in English on the Spanish page. This is the
   principal's ruling of 20 Sep: they are nav chrome, brief §2 fences chrome to CC-3, W1-ES-O2
   assigns two of them to wave 2, and Monday's W1 run carries the other two. Adding them here would
   have put two runs into the same `es.json` entries a day apart, which is what W1-B-Q3's
   precondition exists to prevent. Recorded here rather than omitted.
3. **One shared file was edited.** `assets/css/shared/section-extras.css:81` carried the selector
   `#contact .contact-header` inside an `@supports` block. It matches zero elements on all four
   pages that load the file (measured), so removing it alters no rendering anywhere — proven by the
   six byte-identical checksums in criterion 6. D8 authorises it; the brief's §2 fence is not
   breached because no other page changes.

## 5. Decisions resolved autonomously

1. **CSS scope `.pagehero--contact`.** The hero sits outside `#contact`, under which every existing
   rule in `contact.css` is scoped, so the new layout needed its own root. A modifier class on this
   page's hero alone cannot reach `capabilities/index.html`, which carries the bare `.pagehero`.
   Rejected: a `body` class (wider blast radius than needed) and editing `page-hero.css` (forbidden).
2. **Key named `contact_form_head`.** Introduced as `contact_form_head_mobile`, renamed once the
   line began showing at every breakpoint — before it reached Spanish, so no dictionary carries the
   misleading name.
3. **Two gap tokens collapsed into one.** `--contact-stack-gap` drives both the heading-to-first-link
   gap and the gap above the form, so the two cannot drift apart again. Measured equal at every
   width: 30/30, 31/31, 51/51.
4. **The form box spans the content width above 768px** rather than keeping its centred 820px cap,
   so its left edge shares the heading's gutter line and its right edge the destinations' — verified
   `true` at both 768 and 1440.
5. **The fields still pair above 768px.** The principal's instruction named two things to change
   (links below the heading, the eyebrow opening the form); the field pairing is the form's
   internals rather than the page's element disposal, and the brief asks for it so the whole form
   stays reachable without a second screen. Flagged at the gate with the phrase that would reverse it.
6. **The channels became a `role="group"` with `aria-labelledby`** instead of the `<section
   aria-label>` they left behind, so folding them into the hero did not cost them their accessible
   name. Verified via CDP: the group still computes the name "Or find me here." even though its
   label is `display:none`.
7. **Spanish register choices** are the skill's, presented at G3 for the principal's ruling and
   released: *Prototipo – Desarrollos digitales*, *Método – Formas de trabajo con IA*, *O envíe su
   consulta.* — the last mirroring its sibling eyebrow *O encuéntreme aquí.* in shape.

## 6. Open items carried forward

**For CC-3 (chrome):**

1. **Five chrome literals still disagree with `en.json`** on all eight pages: `work_card1_label`
   through `work_card4_label` and `footer_tagline_pre`. Deliberately not synced here — doing so on
   `contact/` alone would have made it the one inconsistent page.
2. **`footer_tagline_pre` renders without its separator.** The markup literal is "Built and governed
   — " but the dictionary value is "Built and governed", so once i18n replaces it the line reads
   "Built and governedend to end." Invisible today only because `footer.css:72` sets
   `.footer { display: none }` site-wide. It becomes visible the moment CC-3 restores the footer.
3. **The closed mobile overlay keeps 14 links and buttons in the tab order on every page** — Home,
   About, Capabilities and Contact alike. It is `opacity: 0; pointer-events: none` but stays
   `display: flex`, so a keyboard user at desktop tabs through 14 invisible controls before reaching
   the content. Pre-existing and site-wide; measured on three pages. Not this run's to fix.
4. **Extending the content policy to the other seven pages** (D7).
5. **Whether Contact keeps its own destination links once the footer returns** (D4) — one backlog
   line, not a decision here.
6. **No clickjacking protection.** GitHub Pages serves no response headers under our control, so the
   policy ships as a `<meta>` tag, and `frame-ancestors`, `report-uri` and `sandbox` are all inert
   in a meta policy. Recorded in `docs/v4/STANDING-RULES.md` SR-2 so it is not rediscovered.

**Known limits of what shipped:**

7. **Field caps are a courtesy bound, not a security control.** `maxlength` clamps a human typing or
   pasting into the page; it does not constrain a scripted POST straight to the endpoint. That
   residual — anyone can post to a public access key and send mail — is accepted by D6 rather than
   paid for with origin restriction, and it is the same residual the brief's security assessment
   records.
8. **The inline theme script is admitted by a SHA-256 hash.** Changing one byte of it invalidates
   the hash and the page then loads unthemed. `docs/v4/STANDING-RULES.md` SR-2 carries the rule.
9. **`cap_s1_img_alt` still reads "Production card"** — the retired triad, on the hidden Capabilities
   page. Wave 1's D1-Q2 already owns the Capabilities copy; noted, not touched.
10. **At exactly 1440×900 the submit button's bottom lands at 901px**, one pixel past the layout
    fold. Stacking the destinations below the heading costs roughly 150px of height, which was the
    trade the principal directed at G1. No criterion requires the submit inside the first screen, and
    a real browser window at that width shows less than 900px of content regardless.

**Register:**

11. `Page-Status-PreMax-17092026.csv` — the Contact row should move to ES Pass **Done** on merge, and
    the page is no longer a dependency for the copy waves.
12. **W1-ES-O1 closes on merge.** Both halves are live: the English triad and its Spanish
    counterpart. Contact leaves the wave-2 list.
13. **Sequencing.** Changelog ruling W1-B-Q3 makes this a hard precondition for Monday's W1 run,
    which halts at its own preflight if Contact is unmerged or partially landed. Both runs write
    `assets/i18n/es.json`.

**Link integrity:** internal markdown links across every `.md` file in the repository, re-derived
after the archival commit — baseline was 0/0 resolving before the run. The three markdown files this
run adds cite paths in backticks, following the repository's existing convention, so the count is
unchanged. No link was broken because none exists to break.

**Code review.** `/code-review` over the branch diff returned one confirmed finding,
fixed in `677a78e`: the modal logo's error listener was bound at `DOMContentLoaded`, too late to
catch an image that had already failed, silently dropping the fallback the inline `onerror` had
provided. Verified by aborting the request — before the fix the broken-image box survived inside the
success modal; after it, both the failure and the normal path behave correctly, with no CSP
violation from the CSSOM write.
