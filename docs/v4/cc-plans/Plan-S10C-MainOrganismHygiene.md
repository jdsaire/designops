# Plan — S10C Main Organism Hygiene (deploy/v14), gated at localhost

> **Archived as approved**, 13 Sep 2026, for `deploy/v14-s10c-main-organism-hygiene` (PR #27).
> The body below is the plan approved at the start of the run, followed by the two addenda approved
> during it (A: gate-time corrections; B: the Work and Capabilities extras). Three phrases naming the
> drafting and execution tooling were neutralised under the repository's attribution rule; all other
> wording is verbatim. What actually ran is in
> `docs/v4/cc-completion-reports/s10c-main-organism-hygiene-completion-report.md`.


## Context

Stage S10C is authorised by `AMENDMENT-F7-ContentHygiene-v1_0` §1 (signed 12-SEP-2026). Its source is `P-raw-10C.txt`. The job is to clean up Main's organisms ahead of the 10B redesign: stale copy in index.html, the hero gets new members and is centred, the onboarding bridge and Track Record move to `about/`, the tickers move into Main's About section, and the About and Contact editorials go CTA-forward.

The core prompt `P-CC-S10C-MainOrganismHygiene-v1_0.xml` came from an earlier drafting pass. I re-checked it against live `63813c9`, and it contains **seven premises that are false or unsafe** (listed below). Executing v1_0 as written would undo P-raw's intent in places and silently change the About child page. This plan runs the stage as corrected, with blocking localhost gates per `/cc-deploy-prompts` v2.1.

## Blind spots in v1_0, measured at 63813c9, and how they're corrected

| # | v1_0 says | Live evidence | Correction |
|---|---|---|---|
| 1 | "No orphaned copy at hero lines 177-185; general item NOT APPLICABLE" | 16 inline fallbacks in index.html disagree with the dictionaries. Examples: `hero_h1_line1` "Your digital products stall…" vs en.json "I take your digital products"; `hero_h1_es_w4` " sus productos digitales" vs es.json " su cartera digital"; `attribution`, `work_heading`, `tr_heading`. i18n.js renders inline text during the async fetch and for any key es.json lacks. | **Ruling: align fallbacks to the dictionary, verbatim, `<main>` only.** Nav (8) and footer (1) mismatches are reported, not fixed (the nav is already parked; it repeats on 4 pages). `capabilities_lede` is whitespace-only: N/A. |
| 2 | Item 7 is "FALSE — do not swap" | P-raw item 7 says "code lines are right, but *descriptions* are swapped". It's right: the `ABOUT — full organism` banner comment sits above `#track-record` (index.html:437-440), and the `TRACK RECORD — stats…` banner sits above `#about` (:502-505). | Item 7 **applies**: correct the banner comments (no content swap). |
| 3 | Item 8b moves tickers to the `about/` child page | P-raw 8b says "inside About **organism**, below editorial"; 8c separately says "About **child**". | Tickers go into **Main `#about`**. Track Record's editorial and stats go to `about/`, and the `#track-record` section leaves Main entirely. (v1_0's success criterion 4 contradicted 8c.) |
| 4 | Item 5 "SUPERSEDED" | "ABOUT – The making of the operator – I came down…" is live on `about/index.html:143-152` (the pagehero: `about_hero_*`). v1_0 confused it with Main's About. | Item 5 **applies**: remove about/'s pagehero editorial so the bridge opens the page. |
| 5 | Overwrite `evolution_heading` | `about/index.html:162` also binds `evolution_heading`, so the child page would change too. `home_about_head` and `home_about_lede` are unbound everywhere. | **Ruling: rebind Main's About h2 to `home_about_head`** and overwrite **only its EN value**. ES "El estratega que aprendió a construir." goes **STALE ES → S9**. `evolution_*` is untouched. |
| 6 | Task 6 annotates the 10C parking-lot line | That line exists only in local, unpushed `737d7f6`, not at `63813c9`. | **Ruling: drop it.** The parking lot is not touched and `737d7f6` is not carried. Local `main` stays 1 ahead and is never touched. Reported as a residual. |
| 7 | Scope ceiling: HTML + dictionaries only. "Exercise SwapLang/SwapTheme manually." | Centring and middle-aligning need CSS. The stat CSS lives in `pages/home/hero.css`; the count-up JS lives in `pages/home/hero.js`; `bridge.css` is linked only by index.html; the F3.8 fifth-stat hide lives in Main-only `home-layout.css`. A command-line run can't click a toggle. | Scope widened to the named CSS/JS files below. Verification is static + served checks by me, plus the interactive toggle by you at each localhost gate. |

A further trap v1_0 would have hit: `span.img-alt-host[alt]` looks like an orphaned attribute, but `bridge.css` reads it via `content: attr(alt)` for the ≥1024px hover caption. **Keep it.** It doesn't swap in ES, but i18n.js can't reach it and is a carve-out file, so that's reported, not fixed.

## Run shape

- **Clone:** `designops-closure/repos/designops`. Working tree clean; local `main` = `737d7f6` (1 ahead of origin). **Never check out, reset, rebase or push local `main`.**
- **Branch:** `deploy/v14-s10c-main-organism-hygiene`, created with `git switch -c … origin/main` after `git fetch`. Stop if `origin/main` ≠ `63813c9`. Remote already has v9–v13 and wave branches; v14 is unused.
- **Push policy (v14 ⇒ v2+):** push and open a PR against `main` **only after APPROVED GATE 6**. Never merge. The dictionary is touched, so auto-merge is barred.
- **Identity:** author and committer `Juan Diego S. <88201583+jdsaire@users.noreply.github.com>` (live git config). Zero tool attribution in commits, trailers, branch, PR title/body, files or comments. **No trailers of any kind.**
- **`gh` only** (`~/bin/gh`, authenticated as jdsaire, keyring). No PAT is ever referenced. No subagents.
- **Prompt enhancement record:** before touching the repo, write `P-CC-S10C-MainOrganismHygiene-v1_1.xml` and `SUMMARY-…-v1_1.md` into `out/active/S10C-main-organism-hygiene/`, outside the repo. They carry the corrections above plus a proper `<gate_protocol>` (all five gate elements). v1_0 and P-raw stay unmodified.

## Gate protocol (the halting contract)

- Localhost server: `python3 -m http.server 8000 --bind 127.0.0.1` from the repo root. Started before Gate 1 and held all session. If :8000 is taken by anything else: **STOP and report**, never switch ports. (Checked free now.)
- Every gate ends in a **mandatory halt**, released only by the exact phrase **`APPROVED GATE N`**. Silence, questions and praise don't release a gate. Plan approval releases Gate 1's work only.
- At each gate I post: SHAs and messages, the exact URL and anchor, what to look at (EN/ES × dark/light × 1440/768/375), deviations with reasons, and the literal `Waiting for: APPROVED GATE N`. If you reply with corrections, I apply them, re-present the gate, and wait again.
- Tip for review: hard-reload, since `http.server` caches. The site defaults to ES via `localStorage jds-lang`.

## Execution, by gate: one commit per item, and the site must load clean after every commit

**Gate 1: i18n hygiene (general-codebase item)** · `http://127.0.0.1:8000/`
1. `fix(home): align stale inline fallbacks with the live dictionaries`. In `<main>`: `hero_h1_line1/2`, `hero_h1_es_w4` (to the es.json value), `attribution`, `work_heading`, `tr_heading`.
2. `fix(i18n): bind hard-coded CTA aria-labels to their existing keys`. Add `data-i18n-aria` wherever a `<main>` aria-label exactly equals an existing key's EN value (About CTA → `home_about_cta`; Contact and the 3 hidden capability CTAs → `chrome_nav_cta`). Aria-labels with no key are reported, never authored.
- Look at: no flash of the old hero copy on ES-first load (slow the network in devtools); the ES hero reads "…su cartera digital"; CTA aria-labels flip to ES.
- **⛔ STOP: Waiting for APPROVED GATE 1.**

**Gate 2: hero (items 1-3)** · `/#top`
3. `feat(hero): move the attribution and badge below the headline, centred`. A new `hero__meta` row after both h1 variants holds `hero__badge` + the attribution `<p data-i18n="attribution">` (class `hero__attribution`, with its styles ported into `pages/home/hero.css` from `.bridge__attribution`). Centre the h1 and the row, and collapse the `62fr 38fr` grid. Reorder the `hero.js` entrance sequence to h1 → meta.
- Look at: the badge and attribution side by side under the h1, centred at all 3 widths, in EN and ES; attribution contrast in the light theme.
- **⛔ STOP: Waiting for APPROVED GATE 2.**

**Gate 3: bridge to about/ (items 4-6)** · `/about/` and `/`
4. `refactor(about): move the onboarding bridge from Main to the top of About`. Cut `#bridge1-onboarding` (and its banner) from index.html. Insert it as `about/`'s first `<main>` child with `../assets/img/…`. Link `bridge.css` on about/ and drop it from index.html (sole instance). The attribution is already gone (task 3).
5. `feat(about): retire the page-hero editorial; the bridge opens the page` (item 5). Remove the pagehero markup; the `about_hero_*` keys stay. Promote the bridge heading h2 → **h1** so about/ keeps exactly one h1.
6. `style(about): middle-align the bridge heading and portrait` (item 6), in `bridge.css`, now linked only by about/.
- Look at: the first viewport of about/ is the bridge; heading and portrait vertically centred; the ES heading; the alt swap and the hover caption at ≥1024; Main goes hero → work.
- **⛔ STOP: Waiting for APPROVED GATE 3.**

**Gate 4: Track Record split (items 7, 8b, 8c)** · `/#about` and `/about/`
7. `feat(home): move the credential tickers into the About organism` (8b). `.ticker__lanes` moves into `#about` after `.section__inner`; `ticker.css` and `ticker.js` stay on Main.
8. `refactor(about): move Track Record's editorial and figures below the bridge` (8c). The section is deleted from Main. `.stat__*` rules move from `home/hero.css` to `shared/designops-variant.css`. The count-up is extracted from `home/hero.js` into a new `pages/about/stats.js`, imported by `pages/about/main.js`. The F3.8 fifth-figure hide and the 4-column desktop grid move from `home-layout.css` to `pages/about/evolution.css` with their provenance comments, so **4 figures stay visible**.
9. `docs(home): correct the About section's banner comment` (item 7).
- Look at: both ticker lanes looping under the About editorial (and paused under reduced motion); no Track Record on Main; about/ shows bridge → Track Record (4 figures counting up) → timeline → CV, in EN and ES.
- **⛔ STOP: Waiting for APPROVED GATE 4.**

**Gate 5: editorials (8a, Contact)** · `/#about` and `/#contact`
10. `feat(home): About leads with the journey headline and its CTA`. The h2 moves to `home_about_head`; en.json `home_about_head` = "My orchestration journey." (the **only** dictionary edit in the run; es.json is untouched). The `evolution_lede` `<p>` is removed from Main (the key stays for about/). The CTA takes the freed position.
11. `feat(home): Contact goes CTA-forward`. Remove the `home_contact_lede` `<p>` (key kept) plus the now-dead `#contact .section__lede` rule in `home-layout.css`. Eyebrow and headline unchanged.
- Look at: EN reads "My orchestration journey."; **ES intentionally still shows the old headline (STALE ES → S9)**; no ledes; CTA spacing.
- **⛔ STOP: Waiting for APPROVED GATE 5.**

**Gate 6: full verification sweep** (no commit)
- Checks: every `data-i18n`/`-alt`/`-aria` key on index.html and about/ resolves in en.json, with the ES gaps listed as pre-existing vs new (expected: new = none); both JSON files parse; no duplicate ids; zero references anywhere to `#track-record`, `#bridge1-onboarding`, `bridge1-onboarding-heading`; every local asset on both pages returns 200 from :8000 (curl); `node --check` on the changed JS; internal markdown link count unchanged (baseline recorded at plan approval); `git log` shows only jdsaire as author and committer; an attribution grep over the diff. If a Playwright Chromium module resolves **without installing anything**, a scratch-dir headless pass toggles lang and theme and captures console errors. Nothing is added to the repo either way.
- Post a PASS/FAIL table. **⛔ STOP: Waiting for APPROVED GATE 6.**
- After release: `git push -u origin deploy/v14-…`, then `gh pr create --base main`, **do not merge**, and **print the PR URL**.

**Final task: archive** (after the PR exists)
12. `docs: archive S10C main organism hygiene plan and completion report`. Adds `docs/v4/cc-plans/Plan-S10C-MainOrganismHygiene.md` (this plan as approved) and `docs/v4/cc-completion-reports/s10c-main-organism-hygiene-completion-report.md`, plus rows in both sub-READMEs and `docs/v4/README.md`. The report covers: the commit list with SHAs; which phrase released which gate and any re-presentations; the PASS/FAIL table; the 7 corrections to v1_0; **S9 inputs** (`home_about_head` STALE ES; meta description and og:description still say "feasible", with no key; aria-labels with no key; the hover caption and ticker lane labels that are EN-only); **residuals** (nav and footer fallback drift; `737d7f6`'s 10C/10D parking-lot entries still unpushed on local main; `home_contact_lede`, `home_about_lede` and `about_hero_head/lede` now unbound); the printed PR URL. Push to the same PR.

## Addendum A: progress and gate-time corrections (for the archive)

Gates 1–4 are released. Gate 5 is presented but **not yet released**. Principal corrections applied at gates (each its own commit):
- **G2:** attribution retitled, principal-supplied EN "Juan Diego Saire — Frontend Engineer" / ES "Juan Diego Saire — Ingeniero Frontend." (`34a5b94`, both dictionaries by ruling). Badge stacked under the attribution (`e060349`). Attribution in `--color-brand-white`: white on dark, `#0A0A0A` ink on light (`3b791d0`). H1 → meta gap doubled (`9e455cb`).
- **G3:** `bridge.css` stays linked on Main (the `.img-alt-host` captions of the capability images live there). Portrait eager-loaded. Bridge heading promoted to h1.
- **G4:** item-6 middle-align reverted by the principal (`49ec8d8` reverts `b85180c`: it trimmed the portrait). Track Record overrides scoped to `#track-record`, because on about/ `designops-variant.css` loads after `evolution.css`.
- **G5:** Contact CTA gap = About's (`clamp(2rem,3.5vw,3.5rem)`). About CTA → ticker gap cut to ⅔, exact at every width (`f63cc23`).

## Addendum B: extra fixes, Work + Capabilities (principal-directed, pre-Gate 6)

Authority: principal direction, recorded under "Authorized deviations" in the report. These items sit outside P-raw-10C / F7 §1. Scope ceiling widens to `assets/css/pages/home/work.css`, `assets/js/main.js`, and Main's Work/Capabilities markup.

**Gate 5A: Work** · `/#work` at 375 / 414 / 768 / 1023 / 1440
- `fix(work): keep the card's desktop proportion in both carousels`. Measured at HEAD: desktop cards are 1.69× tall and clip 0px. The carousels fall back to `aspect-ratio: 4/5` (1.25×) and clip 88/234px at 375, 96 at 414, 75 at 320 and 72.6 at 768 (SVGs are 640×512, art starts at 60%). Fix: at ≤767 and 768–1023, `.work-card { aspect-ratio: 10 / 17; --work-art-top: 52%; }` (desktop's art top). Computed: clip 0 with ~2% slack at 320–1023. Carousel height grows (375: 366 → 497px).
- `feat(work): Access Brief takes the Contact CTA's form`, at **all breakpoints**. The four anchors become `class="work-card__cta cta"` with `<span class="cta__label" data-i18n="work_cardN_cta">` + `<span class="cta__icon"><svg><polyline points="9 6 15 12 9 18"/></svg></span>`, the same as Contact. `.work-card__cta` keeps only position, reveal and focus. Drop its font/gap/colour overrides, the dead `.work-card__cta-icon` rule, and the `.cta` 2rem bottom margin inside the card.
- **⛔ STOP: Waiting for APPROVED GATE 5A** (and APPROVED GATE 5, which can come in the same message).

**Gate 5B: Capabilities mobile carousel** · `/#capabilities` at 375 / 414 / 767, plus 768 / 1440 to confirm the triptych is unchanged
- Research found **the legacy chassis is already in this repo**. `pages/capabilities/carousel.js` is byte-identical to `jdsaire/legacy-desops` `main.js` (only the IIFE → ES module wrapper differs). `capabilities/index.html`'s carousel markup is identical to legacy `index.html:327–495` (only the `../` prefixes and CTA hrefs differ). `capabilities.css`, the chassis CSS including the ≤767 slide rules, is **already linked on Main**. The slides bind the same keys and SVGs as Main's triptych (`cap_s1–3_*`), so the content is current by construction. Nothing is copied from the other repo.
- The child page stays hidden (F3.4 is untouched). The per-vertical CTAs stay hidden on Main (F3.6); the chassis already hides both slide CTAs at ≤767.
- `feat(capabilities): the legacy slide carousel carries Main's three pillars on mobile`. Insert the chassis block (carousel-outer → dots) after `.teaser__triptych` in Main `#capabilities`, with root-relative asset paths, CTA `href="#contact"` and `data-i18n-aria="chrome_nav_cta"` (as Gate 1 did). `assets/js/main.js` imports `./pages/capabilities/carousel.js` (null-safe on every page). The Main-only `home-layout.css` swap: at ≤767 hide `.teaser__triptych`; at ≥768 hide `.services__carousel-outer`, `.services__controls` and `.services__dots` inside `#capabilities`.
- Watch item: the legacy live site clips slide body text at the right edge at 375. If Main reproduces it, fix it Main-scoped in a separate commit.
- **⛔ STOP: Waiting for APPROVED GATE 5B.**

**Verification for 5A/5B:** re-run the scratch `measure2.mjs` (clip = 0 for every card at 320–1440). Screenshots EN/ES × dark/light. The CDP audit shows 0 mismatches, 0 console errors and 0 duplicate ids (`servicesTrack` unique). CDP clicks the in-slide › and ‹ and swipes via `scrollLeft`: the counter goes 1/3 → 2/3 and the active slide follows. SwapLang on slide text. At ≥768 the triptych renders unchanged versus HEAD. New hard-coded aria-labels ("Previous"/"Next") are reported as S9 input.

## Scope ceiling

**May change:** `index.html`, `about/index.html`, `assets/i18n/en.json` (the `home_about_head` EN value only), `assets/css/pages/home/{hero,home-layout}.css`, `assets/css/shared/{bridge,designops-variant}.css`, `assets/css/pages/about/evolution.css`, `assets/js/pages/home/hero.js`, `assets/js/pages/about/{main,stats}.js`, and the `docs/v4/` archive.

**Never:** `assets/js/core/*`, `es.json`, the nav, the footer, `capabilities/`, `contact/`, `work/`, `docs/parking-lot.md`, or local `main`. No new dependencies. If a need arises outside the ceiling: stop and report.

## Stop conditions

- Passing a gate without its phrase.
- `origin/main` ≠ `63813c9`, or `gh` or the attachment is unreachable.
- Port 8000 held by something foreign.
- Any string that would need authoring, or any ES text that would need writing.
- A SwapLang or SwapTheme regression on a touched surface (revert that commit and report).
- An unlisted deletion or out-of-ceiling edit.
- Any credential in output.
