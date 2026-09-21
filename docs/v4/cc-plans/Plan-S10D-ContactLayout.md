# Plan-S10D-ContactLayout — presented at G0

**Run:** `P-CC-S10D-ContactLayout-v1_0.xml` · **Brief:** `BRIEF-CC-S10D-v1_0.md`
**Repo:** `jdsaire/designops` @ `f5efe10` · **Branch to create:** `deploy/v16-s10d-contact-layout`
**Merge:** manual, by the principal

---

## Context

The Contact page makes a visitor scroll past an empty screen before reaching the first form field, at
every device size. One shared rule causes it: `.pagehero { min-height: 100svh }` sets the editorial
block — an eyebrow, three words and a one-line lede — to fill the whole viewport. The channels sit
two to three screens further down, side by side with no gap, in a section of their own.

The principal has inverted the assumption that the form is the primary path. LinkedIn comes first,
GitHub second, the form third. This run rebuilds the page as its locked organism on that order,
ships Contact's definitive English, produces its complete Spanish in the same pull request, and
hardens the form to what a static site with no database and no session actually warrants.

On merge, Contact is finished for this cycle and stops being a dependency for the copy waves that
follow. **This is load-bearing for tomorrow:** changelog ruling W1-B-Q3 makes this run a hard
precondition for Monday's W1 dictionary run, which halts at its own preflight if Contact is unmerged
or partially landed. Both runs write `assets/i18n/es.json`. This merges in full, or it is held
entirely off the repository.

---

## Verified state — instructions 1–7, measured this session

Against the live clone, 20 Sep 2026. `main == origin/main == f5efe10`, divergence 0/0, tree clean,
nothing staged. `gh` authenticated as `jdsaire`.

**1 · What gives the editorial block its height, and who else consumes it.**
`assets/css/shared/page-hero.css:47–53` — `.pagehero { min-height: 100svh; display: flex;
align-items: center; … }`.

All three dedicated pages *link* the file; only two *use* the class. `capabilities/index.html:144`
carries bare `class="pagehero"`. `about/index.html` opens on `.bridge` instead — S10B rebuilt its
hero off this class — and links `page-hero.css` only for the `.section`, `.section__eyebrow` and
`.cta` primitives. **The audit's fence holds and is narrower than it states.** A modifier class on
`contact/` alone therefore cannot reach `capabilities/`.

**2 · Layout figures at 390×844, 768×1024, 1440×900 — measured.** Harness installed in the session
scratchpad against the cached Chromium; repo served at `127.0.0.1:8000`; EN selected explicitly.

| px from page top | 390×844 | 768×1024 | 1440×900 |
|---|---|---|---|
| Hero height | 844 *(= viewport)* | 1024 *(= viewport)* | 900 *(= viewport)* |
| **First form field, top** | **947** | **1135** | **1075** |
| **Submit button, bottom** | **1446** | **1548** | **1543** |
| LinkedIn, top | 1679 | 1750 | 1863 |
| GitHub, top | 1732 *(wrapped)* | 1750 *(same line)* | 1863 *(same line)* |
| Document height | 1844 | 1863 | 2023 |

**All fifteen figures match the audit exactly.** Four days on, at the same commit, the page has not
drifted — the audit is verified rather than merely inherited.

Three measurements the audit did not carry:
- **Channel separation is 4px at 768 and 5px at 1440** — the audit's friction point 4 ("the LinkedIn
  label runs straight into the GitHub icon"), now quantified. At 390 they wrap onto separate lines.
- **No horizontal scroll at any width today** (`scrollWidth == clientWidth` at all three). Criterion
  5 currently passes and must keep passing.
- **Zero console errors at all three widths.** The G2 policy work starts from a clean console.

Before-screenshots and an About/Capabilities baseline are captured with SHA-256 checksums, so G1
can prove those two pages are untouched rather than assert it. The rebuild destroys the before-state,
which is why they were taken now.

**1b · Capabilities is deliberately blank — found while capturing the baseline.**
`capabilities/` renders as nav-only: `main#main` computes to `display: none`, from
`assets/css/pages/capabilities/capabilities-cards.css:240`. This is **intentional and documented** —
the block above it cites Amendment F3 / S4D §3.4, "PAGE HIDDEN — pending retirement", and it landed
in `ab6ab30` ("chore(capabilities): hide the capabilities child page and its navigation entry"). The
file is linked only by `capabilities/index.html`, so the rule cannot reach any other page.

Two consequences for this run, neither of which changes the scope:
- **Criterion 6 means "still blank" for Capabilities.** Worth saying plainly so nobody reads a blank
  Capabilities screenshot at G1 as damage this run caused.
- **It de-risks the `.pagehero` fence.** Capabilities is the only other consumer of that class, and
  its `<main>` never renders. The fence still stands and `page-hero.css` is still not opened — but
  the blast radius of getting it wrong is smaller than the audit implies.

**3 · Dead style rules, measured as counts, zero references each.**

| Selector | Location | Refs in markup/script |
|---|---|---|
| `#contact .contact-header` | `contact.css:28–38` | 0 |
| `#contact .header-bar` | `contact.css:39–44` | 0 |
| `#contact .header-eyebrow` | `contact.css:45–52` | 0 |
| `#contact .header-headline` | `contact.css:53–60` | 0 |
| `#contact .header-lede` | `contact.css:61–67` | 0 |
| `#contact .contact-header` (767px override) | `contact.css:335–339` | 0 |
| `#contact .contact-header` | **`shared/section-extras.css:81`** | 0 on all four consumers |

The seventh is the one the audit never named, and it sits in a shared file. Measured: `contact-header`
appears **0 times** in `index.html`, `about/index.html`, `capabilities/index.html` and
`contact/index.html`. Deleting that single selector line changes no rendering anywhere, so D8
authorises it without breaching §2's fence.

**4 · Literal English vs the dictionary — thirteen divergences, not the audit's four.**
Eight are Contact-owned and in scope; five are chrome (`work_card1–4_label`, `footer_tagline_pre`),
byte-identical across all eight pages, and go to the CC-3 backlog untouched per the principal's
ruling. The dictionary is the authority; the HTML literal is only the pre-fetch fallback, so the
HTML syncs *to* `en.json` — except `opt1–3`, where both sides move to the new triad.

**5 · Key inventory.** 40 distinct keys. All 40 in `en.json` (285 keys). 36 in `es.json` (155 keys).
Four lack Spanish: `work_card1–4_label` — excepted by ruling, carried by W1 and wave 2, and recorded
in the completion report rather than silently skipped.

**6 · Runtime inventory → the policy.** 9 local stylesheets, zero `@import`, zero `url()`, zero
external URL. No web font (`--font-primary: 'Graphik', Arial, sans-serif`, no `@font-face`). One
module graph, all same-origin. Three local SVGs. Network: `https://api.web3forms.com/submit` and
same-origin `assets/i18n/*.json`.

```
default-src 'none'; script-src 'self' 'sha256-<recomputed at build>'; style-src 'self';
img-src 'self'; font-src 'none'; connect-src 'self' https://api.web3forms.com;
form-action https://api.web3forms.com; base-uri 'none'
```

Three things it would block unless handled, all measured:
- the inline theme script at `contact/index.html:17` → covered by hash, currently
  `sha256-z/L/xVjXibIZ7gMDFCNXZVuBILZDkxu+3TrsJz5BwxY=`, **recomputed at build**;
- the inline `onerror` at line 268 → a hash does not cover an event handler; the attribute is
  removed and the fallback bound in `contact.js`;
- the inline `style="display:none"` on the honeypot at line 167 → moved to a class.

**Placement trap:** a meta policy governs only what is parsed after it, so the tag goes first in
`<head>` after charset and viewport — above the inline script and above every stylesheet link.

**7 · No echo surface exists.** Across the page's entire script graph — `pages/contact/main.js`,
`pages/contact/contact.js`, `core/i18n.js`, `theme.js`, `progress.js`, `navchrome.js`, `paths.js` —
there is **zero** occurrence of `innerHTML`, `insertAdjacentHTML`, `document.write`, `eval` or
`new Function`. `contact.js` reads `.value` only to validate, toggle a class, focus and `reset()`.
`i18n.js` writes via `textContent`, `setAttribute` and `.placeholder`. The exposure is entirely
forward-looking, which is what the standing rule closes.

---

## The change, file by file

### `contact/index.html` — structure

Channels fold **into** the hero container, ahead of the form, so the desktop grid can place them
beside the heading block. The separate post-form channels section is removed; every anchor's `href`,
`aria-label`, `data-i18n` and `rel="noopener noreferrer"` moves across intact.

```
<section class="pagehero pagehero--contact">
  <div class="section__inner pagehero__inner">
    <div class="contact-intro">      eyebrow · h1 · lede
    <div class="contact-channels">   eyebrow · LinkedIn · GitHub
<section id="contact" class="section">
  <div class="section__inner">
    <div class="section__eyebrow contact-form-eyebrow">   ← new, mobile only
    <div class="contact-form-box">   form, untouched inside
```

Nothing inside `<form>` changes in this commit.

### `assets/css/pages/contact/contact.css` — the only stylesheet that gains rules

`page-hero.css` is not opened. The scope for the new hero rules is the modifier class
`.pagehero--contact`, because the hero sits **outside** `#contact` and every existing rule in this
file is `#contact`-scoped.

- **Hero:** `min-height: 0`, `align-items: start`, a real bottom padding. The editorial block stops
  reserving a viewport at any size.
- **≥768px:** `.pagehero__inner` becomes `grid-template-columns: minmax(0,1fr) auto` with a generous
  column gap and `align-items: end` — editorial left, channels right, reading as one band.
- **Form pairing, ≥768px:** `.contact-form` becomes a two-column grid. `#field-engagement` and
  `.form-row` in column 1 (the row itself collapses to one column, so name and email stack);
  `#field-message` spans `grid-row: 1 / span 2` in column 2 with the textarea flexing to fill;
  `#footerActions` spans both. This mirrors the wireframe's option-C rules exactly.
- **Form box:** drop the centred `max-width: 820px; margin: auto` at ≥768 so the box aligns to the
  same gutter line as the editorial. This closes the audit's friction point 3 — two alignment lines
  on one page — and gives the paired fields room.
- **Form section top padding:** `#contact.section` gets a much smaller `padding-top` than the shared
  `clamp(4rem, 7vw, 7.5rem)`. Scoped to this page; `.section` elsewhere untouched.
- **Channels:** each `.cta` on its own line with visible separation at every width.
- **≤767px:** `.pagehero__deck` and the channels eyebrow are `display: none`; one column throughout.
- **≥768px:** `.contact-form-eyebrow` is `display: none`.

`display: none` rather than removed markup, so one document serves every breakpoint and the hidden
elements leave the accessibility tree cleanly. Breakpoint `max-width: 767px`, matching every other
rule in the file.

### `assets/i18n/en.json`

```
contact_engagement_opt1  "Prototype – Digital builds"
contact_engagement_opt2  "Adoption – Design systems"
contact_engagement_opt3  "Method – AI ways of working"
contact_engagement_opt4  unchanged
contact_form_head_mobile "Or submit your business inquiry."   ← new key
```

Separator is an en-dash, U+2013. "Production" leaves the page entirely. `"Augmentation – AI
solutions"` is retired. `[RESOLVED]` — this closes the English half of W1-ES-O1.

### Hardening — after G1

- `maxlength` 100 / 150 / 2000 on name / email / message; `autocomplete="name"` and
  `autocomplete="email"`; each field keeps its own type. No field added, removed, reordered or
  retyped.
- Honeypot survives verbatim in behaviour; its inline style moves to a class, keeping
  `tabindex="-1"` and `aria-hidden="true"`, still named `botcheck`.
- `onerror` attribute removed, same fallback bound in `contact.js`.
- The policy meta tag, placed first in `<head>`, derived from the inventory above and never from a
  template. `contact/` only (D7).
- `docs/v4/STANDING-RULES.md` created with the no-echo rule; `docs/v4/README.md` gains one line
  naming it.

### `assets/i18n/es.json` — after G1 only

One pass of `designops-copy-es` over the approved English. No Spanish string is typed by hand, ever.
The four `work_card*_label` keys are not added.

---

## Commit sequence

The pull request opens immediately after commit 1 and accumulates. It is never merged.

| # | Message | Gate |
|---|---|---|
| 1 | `feat(contact): reorder the page onto the channels-first organism` | → **open PR, print URL** |
| 2 | `style(contact): rebuild the page on option C at every breakpoint` | |
| 3 | `chore(contact): drop the style rules with no markup left to act on` | |
| 4 | `feat(i18n): move the contact engagement options onto the current triad` | |
| 5 | `fix(contact): reconcile the page's literal English with the dictionary` | **G1** |
| 6 | `feat(contact): bound every field by length and by type` | |
| 7 | `fix(contact): move the two inline hooks into the stylesheet and the module` | |
| 8 | `feat(contact): declare a content policy derived from what the page loads` | |
| 9 | `docs: record the no-echo rule as a standing rule of this repository` | **G2** |
| 10 | `feat(i18n): complete the contact page's Spanish set` | **G3** |
| 11 | any `/code-review` fix, separately scoped | |
| 12 | `docs: archive the S10D plan and completion report` | **G4 — you merge** |

Sole author `jdsaire`. Zero AI reference in any message, the branch name, the PR title or the PR
body.

---

## Decisions taken at plan time

1. **CSS scope: `.pagehero--contact`**, added alongside the existing class on this page's hero only.
   `capabilities/index.html` carries bare `class="pagehero"`, so it cannot be reached. Rejected
   alternatives: a `body` class (wider blast radius than needed) and editing `page-hero.css` (out of
   bounds).
2. **New key: `contact_form_head_mobile`**, mirroring the existing `contact_elsewhere_head`.
3. **Archive destination confirmed live:** `docs/v4/cc-plans/Plan-S10D-ContactLayout.md` and
   `docs/v4/cc-completion-reports/s10d-contact-layout-completion-report.md`. The convention holds —
   8 plans and 8 reports already there, most recent S10-B via PR #28 from `deploy/v15-…`, so this is
   v16.
4. **Link-integrity baseline: 0/0.** The repo cites paths in backticks, not as markdown links. Three
   markdown files are added, so the count is re-derived and reported after the archival commit.

---

## Verification

**G1 — layout, English.** `http://127.0.0.1:8000/contact/`, server held for the session, hard-reload
(the site defaults to Spanish via `localStorage jds-lang`, so EN is selected explicitly). Instruction
2's before/after as one table at all three widths. At 390: order from the top is eyebrow, headline,
LinkedIn, GitHub, the new line, then the form — no lede, no channels heading. At 768 and 1440: lede
and channels heading present, both links inside the first screen on their own lines with visible
separation, first field inside the first screen. No horizontal scroll at any width.

*One thing to watch:* `page-hero.css:15` sets `.section { width: 100vw }`, which overflows by the
scrollbar width on platforms with classic scrollbars. `tokens.css:2` does supply a universal
`border-box` reset, so padding is not the risk — the `100vw` is. Measured today at all three widths:
no overflow. It is pre-existing and shared, so it gets re-measured and reported at G1, not "fixed"
here.

`about/` and `capabilities/` are compared against the captured baseline by checksum, not by eye —
and Capabilities is expected to stay blank, per finding 1b.

**G2 — hardening.** Console reported verbatim with the policy in force, through first paint, the
language switch and the theme switch. Each field limit and type demonstrated; honeypot present,
invisible, unreachable by keyboard. A **real submission** sent from the running page — delivery is
yours to confirm, never asserted by the run. Keyboard completability and AA contrast in both themes,
with ratios as measurements.

**G3 — Spanish.** The page in Spanish at all three widths, both themes; longer strings have not
broken the grid, the paired fields or the channel lines. The four English Work-dropdown labels are
stated plainly at the gate, not buried.

---

## State of the workspace at this halt

- **The repository is untouched.** `HEAD f5efe10`, no dirty files, nothing staged, zero untracked.
  No branch created.
- The measurement harness lives in the session scratchpad only. The repo has no `package.json` and
  does not acquire one.
- **The localhost server is already running** on `127.0.0.1:8000` and will be held for the session,
  so G1 needs no restart.
- Baseline artefacts, with checksums recorded for the G1 comparison:
  `contact-{390,768,1440}.png` (the before-state), `about-*` and `capabilities-*`.

---

## What this run will not do

The navigation bar and the footer (CC-3) · extending the policy beyond `contact/` (CC-3 backlog) ·
a captcha or any third-party verification service · any paid plan, including origin restriction at
the form service · changing the form's fields, order, destination or success behaviour · a
failure-state message for a rejected submission · the other pages' copy · any edit to
`page-hero.css`, `i18n.js`, `navchrome.js`, `paths.js`, `about/index.html` or
`capabilities/index.html`.

**Two things the run cannot deliver, stated up front.** Clickjacking protection is unavailable —
GitHub Pages gives no header control, and `frame-ancestors` is inert in a meta policy; it becomes a
CC-3 line. And Web3Forms delivery cannot be confirmed by automation, so G2 presents it as the one
decision at that gate.

---

## Release

Approving this plan releases **task 2 only** — the branch, the markup commit and the pull request.
It does not release G1, G2, G3 or G4. Each of those still waits on its own literal phrase:
`S10D G1 RELEASED`, `S10D G2 RELEASED`, `S10D G3 RELEASED`. G4 is released by you merging by hand.


---

## Addendum — what the gates changed after this plan was approved

The plan above is archived as it stood when `S10D G0 RELEASED` was given. Three things moved
afterwards, each on the principal's instruction at a gate. They are recorded here so the plan and
the completion report do not disagree.

1. **G1, first correction.** The mobile line became "Or submit your inquiry." (from "Or submit your
   business inquiry."), and the gap between the GitHub link and that eyebrow was equalised with the
   gap between the headline and the LinkedIn link.
2. **G1, second correction.** Desktop and tablet adopt the mobile arrangement in full: one column
   at every breakpoint, the two destinations below the heading, the eyebrow opening the form, and
   the same vertical rhythm scaled. **This overrides D3** ("Desktop and tablet keep C as approved")
   and makes success criterion 4 — "On desktop and tablet, the lede and the channels heading are
   present" — false by instruction. The lede and the channels heading are hidden at every
   breakpoint; their markup and keys remain, so the decision is reversible.
3. **Key rename.** `contact_form_head_mobile` became `contact_form_head`, since the line is no
   longer mobile-only. Renamed before it reached Spanish.

Option C therefore describes the route this run took, not the layout it shipped. What shipped is a
single stacked organism, identical at 390, 768 and 1440, with the form's own fields pairing at
≥768 so the whole form stays reachable without a second screen.
