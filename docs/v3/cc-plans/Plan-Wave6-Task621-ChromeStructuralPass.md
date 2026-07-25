# Plan — Wave 6 · Task 6.2.1 · Chrome & Work‑Section Structural Pass

## Context

Wave 6.2 (PR #15, `7220a68`) is merged and live. It left the site carrying **five separately‑maintained navigation chromes**: Home drives its nav from `assets/css/shared/nav.css` + a JS module graph, while each of the four brief pages carries its **own inline `.nav*` CSS block and its own inline nav script**. The two chromes have already drifted (link size, underline sweep, static vs hide‑on‑scroll bar, logo). Separately, the mobile hamburger is `display:none` on every page (unreachable), so **there is no working mobile navigation anywhere**, and the work‑section filter surface (a Status facet + an active‑chip bar) has outgrown the four‑card pool it serves.

This run — inserted at **6.2.1**, ahead of the roadmap's 6.3 ES lock — consolidates the chrome onto **one shared surface** (`nav.css` + a new `navchrome.js`), then applies the principal's annotated corrections **once** on that surface. It is **not a copy wave**: it authors **zero new i18n keys**, retires **five EN‑only keys** whose surfaces it deletes, and moves exactly **two i18n values** (both principal‑supplied verbatim). Content is otherwise frozen.

**Repo / branch:** `jdsaire/designops`, branch **from `origin/main` @ `7220a68`** → `wave6-task621-chrome-structural-pass`. PR‑based; the principal merges.

**Execution note (important):** the local `designops/` clone here is stale (on `wave5-task56-es-keys-close` @ `6fa834f`). Wave 6.2 objects have been fetched into it; execution will `git checkout -b wave6-task621-chrome-structural-pass origin/main` (a clean 6.2 base) rather than building on the stale worktree. This is the pre‑gate house‑keeping step, not an approved change.

---

## Preflight (Task 0) — RESULTS

| Check | Result |
|---|---|
| `gh` at `~/bin/gh`, authed as `jdsaire` (keyring) | **PASS** |
| Input `P-multipage-cont-enhance.txt` (annotations) | **PRESENT** (attached) |
| Input `docs/v3/Execution_Roadmap_v3_0.md` (Wave 6 table 6.1–6.4) | **PRESENT** |
| Input `docs/v3/cc-completion-reports/wave-6-task62-…report.md` | **PRESENT** — open items read (15 EN‑only keys listed) |
| Input `docs/parking-lot.md` (has "Stale ES keys — Wave 6" heading) | **PRESENT** |
| (a) HEAD of `main` = `7220a68` (W6.2, PR #15) | **PASS** (verified via `gh api`) |
| (b) 17 nav tokens defined in each brief's inline `:root` | **PASS** — 17/17 on all four briefs |
| (c) `.nav__hamburger` `display:none` in base (nav.css:106) + tablet (176) + mobile (185); no rule re‑enables | **PASS** |

Briefs confirmed: `data-nav-context="brief"`, **no** overlay markup, **no** hamburger, **no** `id="navbar"`, **no** `nav.css` link. i18n counts: `en.json` **156**, `es.json` **148**.

---

## Decision gates (Task 2) — RESOLVED

Principal's picks: **A1** · **B1** · **PICK C = hide SwapLang, move into overlay**. These are locked into the plan below.

### PICK A — chosen‑filter display inside the work cards
Card tag vocabularies (after Status tokens are stripped): C1 `tech · design‑systems · development · ux‑engineer`; C2 `airport · product‑design · program‑manager`; C3 `airport · ux‑research · prototyping · ux‑designer`; C4 `banking · development · cybersecurity · frontend‑developer`.

- **A1 (recommended)** — each card always renders its **own full tag set**; tags matching an active filter are emphasised. Resting state: dense (3–4 tags/card), **stable height**, self‑descriptive. In‑card tags are **read‑only** (removal happens by re‑clicking the chip in the dropdown panel); `filter_remove_label` becomes an orphan but is **retained** (EN‑only; the "exactly‑5" deletion cap forbids removing it).
- **A2** — each card renders only active‑matching tags; falls back to full own set when nothing active. Height varies resting↔active (clamp needed).
- **A3** — active‑matching only; empty label row at rest (title rises). Bare resting cards.

Recommendation **A1**: it satisfies "the card's tags now serve as the label" cleanly, keeps the fixed desktop height (`clamp(384px,37.5vw,540px)`) stable, and needs no reflow safeguard beyond the existing `-webkit-line-clamp`.

### PICK B — the brief pages' nav CTA
- **B1 (recommended)** — full standardisation: briefs adopt `nav_cta` ("Contact"/"Contacto") → `../../#contact`; one CTA sitewide. Brief's own `#convert` block loses its **nav** entry point (still reachable by scroll/footer).
- **B2** — variant preserved: briefs keep `chrome_nav_cta` → `#convert`, gain only the chevron.

Recommendation **B1**: the annotation names "Contact / Contacto" as the CTA getting the chevron and says "standardize navbar across all subpages… with variants" (variants = depth‑corrected hrefs, not a different destination). Both keys are populated in both languages, so neither option creates translation debt.

### PICK C — mobile SwapLang (principal's "Key issue" note — a deliberate override of the XML)
The XML hard‑rules say *"SwapLang is unchanged in behaviour, position, and markup"* and *"`.nav__cta` … lives in the overlay at ≤767px."* The principal's dispatch note **amends the mobile treatment**:
> *Mobile navbar = new logo (top‑left) + hamburger (top‑right) only. SwapLang button hidden completely in mobile. ES/EN switching moves inside the overlay, reached by tapping the hamburger.*

This is a **collision surfaced, not silently resolved**. Proposed reconciliation (recommended): desktop/tablet SwapLang stays byte‑identical (XML honoured); at ≤767px `.nav__lang` is `display:none` and a language control is added **inside the overlay** (reusing the existing `.nav__lang-option` / `data-lang` idiom — **no new i18n key**, labels are literal `ES`/`EN`). Hamburger becomes reachable and toggles the overlay; the obsolete `#mobileClose` "lang↔X swap" (CHG‑21 in `overlay.js`) is retired. Recorded as an **authorized deviation** from the XML in the Completion Report.

---

## Architecture (one chrome, five pages)

- **`assets/css/shared/nav.css`** — the one nav stylesheet (already linked by Home; newly linked by the four briefs).
- **`assets/js/core/navchrome.js`** — NEW. Owns, guarded so it runs on any page: the `data-nav-link` href rewrite (idempotent, prefix from `data-nav-context`); hide‑on‑scroll (incl. P‑6c focus‑within return); the **language‑panel disclosure** (aria‑expanded + Escape/focus‑return), resolving **either ID pair** (`langBtn/langPanel/langLabel` on Home; `briefLangBtn/briefLangPanel/briefLangLabel` on briefs); the **overlay** open/close (from `overlay.js`); the **Work dropdown** disclosure; and the **overlay language control**. Accepts an options object with a `swapLang` callback so it drives Home's module `swapLang` and each brief's global inline `swapLang` without importing either. Exports `init()`.
- **`assets/js/pages/home/nav.js`** — REMAINS, reduced to Home‑only: scrollspy against Home's sections; the `swapLang` option‑click wiring (keeps its `swapLang` import + `init()` export + `main.js` slot).
- **`assets/js/pages/home/overlay.js`** — DELETED; logic folded into `navchrome.js`; import + call removed from `main.js`, replaced by `navchrome.init(...)` in the same slot (execution order preserved).
- **Each brief** keeps its inline body‑i18n (`applyI18n`/`swapLang`/`curLang`) — only the **nav** portions of the inline script leave.

---

## Task‑by‑task plan (executes only after approval; gate answers baked in)

### Task 3 — Behaviour‑preserving promotion (visually inert; prove before Task 4)
1. Create `navchrome.js` per architecture; guard every `getElementById` (briefs lack overlay/hamburger/`#navbar`; degrade, never throw).
2. Reduce `nav.js` to scrollspy + language option‑click; keep `init()`/`main.js` position.
3. Delete `overlay.js`; remove its import/call in `main.js`; insert `navchrome.init({...})` in that slot.
4. Each brief (`work/{designops-system,tuua-transfer,limafly-ux,yape-trust-verify-brief}/index.html`):
   - delete inline `.nav*` CSS block (≈ lines 71–105 of each `<style>`);
   - add `<link rel="stylesheet" href="../../assets/css/shared/nav.css">` immediately **before** the existing `progress.css` link;
   - delete the inline **nav** script parts only (nav‑context href rewrite + `briefLang` IIFE), **keep** `applyI18n`/`swapLang`/`curLang`;
   - add the one‑line module bootstrap (same shape as the existing progress bootstrap) calling `navchrome.init({ swapLang })` with the brief's global `swapLang`.
5. **Guardrail:** because inline brief nav CSS ≠ `nav.css` (font‑size .85rem vs 1rem, no underline, static bar, `.nav__right` vs `.nav__utility`), add `html[data-nav-context="brief"]` **variant rules** to `nav.css` reproducing today's brief rendering **exactly**. Task 4 collapses them deliberately.
6. **VERIFY (must be empty/clean or STOP):** every module + remaining brief inline script parses; every local ref on all five pages resolves 200 over a served HTTP root at real depth; each page's `init()` graph runs under a DOM shim with no synchronous throw; **per‑brief nav declaration diff is empty** (property‑by‑property).

### Task 4 — Rebuild the navbar on the shared surface
- **LEFT/logo:** Home adopts the wordmark `JD·SAIRE <small data-i18n="chrome_wordmark_sub">DesignOps</small>` in **both** the nav and overlay header, replacing the 4‑state JDigital SVG set. Delete `.nav__logo-img*` state rules; brief `.nav__logo` rules become shared. **Do not** touch `logos/` — `jdigital-logo-default.svg` remains Home's favicon. `nav_logo_alt` → orphan, retained + logged.
- **CENTER labels (values only, `assets/i18n/`):** `nav_capabilities` ES `Capacidades → Verticales`; `nav_evolution` EN `Evolution → About`. Keys unchanged. Both verbatim from the principal → logged like `work_card1_cta`.
- **CENTER link grammar:** brief treatment becomes default (muted resting, solid white on hover/focus‑visible, **no underline**). Delete `.nav__link::after` + hover/focus rules.
  - **RECONCILIATION (mandatory):** P‑6a scrollspy survives as **colour + weight** instead of underline. Keep the IntersectionObserver, `aria-current`, and `.nav__link--current`; restyle it to solid white + semibold. Verify the observer callback still sets `aria-current` on the correct link. State in the report.
- **CENTER Work dropdown:** `Work` becomes a `<button>` (aria‑expanded + aria‑controls) with a caret reusing `.tagfilter__trigger-caret`; panel lists the four brief links labelled from `work_card1..4_label` (depth‑correct hrefs); muted default, white+bold hover/focus; one panel open at a time, Escape→focus trigger, outside‑click + navigation close (mirror `tagfilter.js`'s disclosure). `Capabilities`/`About` get **no** dropdown. `#work` still reachable from footer + overlay.
- **RIGHT SwapLang:** unchanged in behaviour/markup at desktop/tablet (ID reconciliation only). **Per PICK C**, hidden at ≤767px.
- **RIGHT Contact CTA:** add the purple square chevron button reusing `.cta__icon` (2rem purple square, `>` polyline, `--color-purple-hover`, icon `aria-hidden`) to the right of the `nav_cta` label. Delete `.nav__cta::after`. Brief CTA per **PICK B**.
- **BEHAVIOUR hide‑on‑scroll everywhere:** each brief `<header class="nav">` gains `id="navbar"`; `navchrome.js` degrades if absent.
- **BREAKPOINTS (restore mobile nav on all five):** delete the three `.nav__hamburger` `display:none` assertions and give it a real value at ≤767px (reachable, accessible name, toggles `#navOverlay`); give each brief the **byte‑identical overlay markup** Home carries (class sequence identical; hrefs depth‑corrected); in the overlay, `Work` becomes a nested disclosure of the four brief links; `Capabilities`/`About`/`Contact` stay flat; **per PICK C** the overlay carries the language control and `.nav__lang` is hidden at mobile. Only canonical 767/768 + 1023/1024 hinges.

### Task 5 — Hero + bridge CTAs
- (a) Delete the hero `<a class="cta">` "See the work." element in `index.html` (not `display:none`). Confirm `hero.js` `seq` degrades (badge → h1; no element left at `opacity:0`). Retain `hero_cta`/`hero_cta_aria` as orphans. Leave `.cta*` in `hero.css` (footer LinkedIn + new nav CTA use them).
- (b) Delete the bridge `<a class="bridge__cta">` "Access Brief ›" element in `index.html`; delete dead `.bridge__cta`, `.bridge__cta:hover`, `.bridge__cta-icon` from `bridge.css`. `work_card1_cta` stays (cards use it).

### Task 6 — Work filter surface (engine in `tagfilter.js` stays intact)
- (a) Replace the `Filter the work` `<p>` with a funnel **icon** (inline SVG, `aria-hidden`, non‑interactive, `stroke="currentColor"`, ~cap height). Move `filter_label` onto `.tagfilter` as `data-i18n-aria` + `role="group"` (key stays alive with its ES value).
- (b) Delete the Status trigger, `#tf-panel-status`, both chips; strip `live`/`wip` from all four `data-tags`. Delete `filter_cat_status`, `tag_live`, `tag_wip` from `en.json` (EN‑only). Re‑run faceted‑logic check on Industry/Field/Role. **Placeholder honesty:** Briefs 02/03 keep every badge/`.temporal`/scaffold banner — removing the filter ≠ removing the marking.
- (c) Implement **PICK A** in the card default+hover faces (vocabulary from `data-tags`, labels from dict — never hardcoded). Preserve fixed height + `-webkit-line-clamp`; clamp the label row if it can grow. Remove `.tagfilter__active` host + `renderActiveChips()` wiring; `filter_remove_label` retained‑orphan per PICK A.
- (d) Uppercase category/filter names via `text-transform:uppercase` **CSS only** (dict strings stay sentence‑case).
- (e) Centre: `justify-content:center` on `.tagfilter__bar` and `.tagfilter__chips`; remove `margin-left:auto` on `.tagfilter__clear` (work.css:429). Verify wrap at 767.

### Task 7 — Footer revert (all five pages)
Delete the entire `<nav class="footer__columns">` site map (both `<ul>`, all 8 links) + the `footer_sla` span. Keep tagline, LinkedIn CTA, copyright. Delete `footer_map_label`, `footer_sla` from `en.json` (EN‑only). Delete dead `.footer__columns/.footer__links/.footer__link` from `footer.css` **and each brief's inline CSS**; collapse `.footer__grid` to one column at every width. **LinkedIn CTA parity:** add `.cta__label { font-weight:var(--fw-bold); color:var(--color-brand-white) }` to each brief's inline CSS (briefs currently lack it). Verify by computed declarations.

### Task 8 — Roadmap
Insert exactly ONE row into the Wave 6 table of `docs/v3/Execution_Roadmap_v3_0.md`, between 6.2 and 6.3, matching the confirmed columns `| # | Task | Where / who | Inputs | Output | Done when |`:
`| 6.2.1 | Chrome consolidation onto one shared navbar surface + work‑section structural corrections; inserted after 6.2, ahead of 6.3, so the ES lock translates final surfaces | Code · **Opus 5** | 6.2 merged site + principal annotations | consolidated chrome | Grep‑verifiable parity across five pages |`
Nothing else changes in the file.

### Task 9 — i18n reconciliation + parking lot
- (a) Diff‑confirm `en.json` lost **exactly 5** keys, gained 0; `es.json` moved on **exactly 1** value (`nav_capabilities`). No per‑brief BODY dict changed. Report counts before/after (156→151 EN; 148→148 ES).
- (b) Append **exactly three** bullets under "Stale ES keys — Wave 6 Sonnet translation pass": (1) the five retired keys, stating 6.3's EN‑only debt drops **15 → 10** (`filter_open_cat`, `filter_remove_label`, `evo_m{3,4,6,7}_rv_{btn,txt}`); (2) retained orphans with reasons (`hero_cta`, `hero_cta_aria`, `nav_logo_alt`, `filter_remove_label`, `filter_label`); (3) `nav_capabilities` ES="Verticales" + `nav_evolution` EN="About" are principal‑supplied verbatim, NOT stale (mirroring the `work_card1_cta` exception line).

### Task 10 — Verification (any failure → STOP AND REPORT)
JSON parse ×4; HTML balance ×5; JS parse (modules + brief inline); served‑path 200 + DOM‑shim `init()` for all five (report ref count); nav + overlay class‑sequence byte‑identical across five (grep); footer class sequence byte‑identical + zero `footer__columns`/`footer_sla` remaining; scrollspy `aria-current` correct with underline gone; reduced‑motion + no `opacity:0` end‑state; mobile hamburger reachable + overlay + nested Work (4 depth‑correct links) on each; relative‑path sweep (`href="/`,`src="/`,`fetch('/`,`url(/`); banned‑strings sweep; breakpoint census (only 767/768, 1023/1024 + P‑11 strays 900/641/480). Live‑browser render flagged as an open item if unavailable.

### Task 11 — Archive + PR
Iteration folder = **`docs/v3/`** (confirmed). Rename approved plan → `docs/v3/cc-plans/Plan-Wave6-Task621-ChromeStructuralPass.md`. Author `docs/v3/cc-completion-reports/wave-6-task621-chrome-structural-pass-completion-report.md` matching the 6.2 report shape (outcome, PASS/FAIL vs success_criteria, the three gate picks incl. the PICK C deviation, scrollspy reconciliation, authorized deviations, "open items carried forward" stating the revised EN‑only count **10** for 6.3). **One logical commit**, author/committer `jdsaire`, **no AI/agent attribution**. Push `wave6-task621-chrome-structural-pass`, open PR via `gh`, report URL, **STOP** (do not merge).

---

## Hard invariants held throughout
Zero new i18n keys · exactly 5 EN‑only deletions · exactly 2 value changes · never rename a key · no absolute leading‑slash paths · relative + depth‑correct links · no new dependency/build/breakpoint · placeholder honesty on Briefs 02/03 · no subagents · one commit as `jdsaire` · PR not push.

## Verification summary
Static (no live browser available in this environment): served‑HTTP‑root 200 sweep + Node DOM‑shim `init()` execution for all five pages; property‑level nav declaration diff for the Task‑3 inertness proof; grep parity for nav/overlay/footer class sequences; JSON/HTML/JS parse. Live‑browser render explicitly logged as an open verification item.
