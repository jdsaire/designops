> Archived plan for Wave 6 task 6.2 — the plan as approved by the principal before execution. Sole author: jdsaire.

# Plan — Wave 6 Task 6.2 · Surgical Refinements

**Run:** `P-CC-Wave6-SurgicalRefinements-v1_0` · build run; verification sweeps · single-context run (no delegated sub-processes) · Plan Mode → **STOP for approval**.
**Repo:** `jdsaire/designops` · default branch `main` · GitHub Pages off `/designops/` (relative paths only).

---

## Context

Wave 6 task 6.2 splices the **approved** `SPEC-Wave6-ConsistencyPass-v1_0` proposal set (P‑1…P‑12) and the four **locked** options (O‑1…O‑4) into the live five‑page site. This is an implementation run, not a re‑audit or redesign: every proposal is already ranked and approved; I implement them faithfully and completely, and STOP-and-report on any live‑repo conflict rather than silently resolving it. It authors new keys **EN‑only** (ES locks at 6.3), does **not** action the parking lot (6.4), and preserves every invariant: zero‑build / zero‑dependency, relative paths, placeholder‑honesty badging, sole author `jdsaire` with no automated-authoring attribution, and **PR‑not‑direct‑push**.

## Task 0 — Preflight (COMPLETE · all green)

- **gh CLI**: `~/bin/gh` v2.96.0, authenticated as `jdsaire` (keyring). GitHub reachable via `gh api`.
- **HEAD**: `4f529e2` (2026‑07‑20) — matches the SPEC's expected state; has **not** advanced past authoring time. (SPEC itself was audited at `4ca323e`, two commits back; `4f529e2` added Wave‑7 docs only, no in‑scope page change.)
- **Governing files** — all present & read: `docs/v3/SPEC-Wave6-ConsistencyPass-v1_0.xml`, `docs/v3/Execution_Roadmap_v3_0.md`, `docs/v3/organisms/motion-system.spec.md` + `.html`, `docs/v3/IA-CONVENTION.md`, `docs/parking-lot.md`.
- **Five pages + i18n** — all present at stated paths (root `index.html`; four `work/*/index.html`; `assets/i18n/{en,es}.json`; four per‑brief BODY dicts). New-key collision check against `en.json`: **clean** (all 7 new chrome keys are net‑new).
- **Archival folders** — `docs/v3/cc-plans/` and `docs/v3/cc-completion-reports/` exist (hold the Wave‑5 records). Iteration folder = **`docs/v3/`**; no newer folder. Confirmed as the task‑5 destination.

## Live structure (as verified)

- **Home** `index.html` (root) — modular: `assets/js/main.js` (ES‑module entry) → imports `core/i18n.js` + `pages/home/*.js`; CSS split across `assets/css/{base,shared,pages/home}/*`. i18n loader depth‑0 (`fetch('assets/i18n/…')`).
- **Briefs** `work/<slug>/index.html` — **self‑contained**: one inline `<style>` + one inline classic `<script>` per page; i18n loader depth‑2 (`../../assets/i18n/…`), `data-nav-context="brief"` prepends `../../` to nav links. Progress bar + nav + footer are **inline copies** today.
- The two immovable paths (`index.html` at root; `assets/i18n/{en,es}.json`) and both loader depths are **untouched** by every proposal below.

---

## Surfaced flags (read before approving — nothing is silently resolved)

1. **F‑5 vs live state (O‑2).** SPEC finding F‑5 says "Home currently has no progressive‑disclosure vocabulary at all." **Live state differs:** the Evolution timeline **already** implements the `aria-expanded` accordion (`.timeline__toggle` + `.timeline__panel`, `evolution.js`), revealing `evo_mN_body`. So O‑2's `evo_rv_*` is a **nested, second‑level** reveal inside the already‑expanding panel — not a from‑scratch pattern. O‑2 is locked; I implement it as the deeper layer. Flagging the finding/reality gap for visibility, not re‑opening the decision.
2. **P‑7 footer is not currently unified.** Home uses `.footer__grid / .footer__content / .footer__tagline / .footer__strip`; briefs use a *different* inline structure (`.footer__inner` flex / `.footer__tag` / `.footer__c`). P‑7 ("one structure, five pages") therefore **reconciles two divergent footers** onto one canonical structure (I standardize on Home's richer class system and replicate it inline on the four briefs). This is the work P‑7 asks for; noting the scope.
3. **P‑5 progress loader — build decision.** SPEC text says "Home loads via its existing modular graph (main.js imports)"; briefs "link to the shared files." **Recommendation:** author `assets/js/core/progress.js` as an idempotent **ES module** exporting `init`; Home imports+calls it from `main.js` (faithful to SPEC); each brief adds a one‑line inline module bootstrap `<script type="module">import{init}from'../../assets/js/core/progress.js';init()</script>` + `<link rel="stylesheet" href="../../assets/css/shared/progress.css">`. Both paths use the proven depth‑2 `../../` pattern i18n already relies on. **This is exactly the PR‑5 risk class** (an ES‑module path break fails the whole graph silently) → gets a mandatory **runtime execution check** on every page, not just a resolution check.
4. **PRINCIPAL-AUTHORIZED DEVIATION beyond SPEC P‑10 — remove read-time hooks from descriptions.** During plan review the principal directed: strip read-duration mentions (the “next four/five minutes” hook) from the card-body descriptions and the brief “short version” reveals, and — confirmed — **read-duration only** (metric cadences like “130,000+ passengers monthly” and “governed daily” stay; they are facts, not read-times) with a **clean removal** (no rephrase). This **supersedes the SPEC’s P‑10(b) four→five edit**. Audit shows the read-time hook exists in exactly two places: Home `work_card1_body` and Brief 01 `hero_rv_txt` (the same sentence). Cards 2/3/4 and briefs 02/03/04 carry no read-duration hook — unchanged. This is an authorized scope expansion over the SPEC, logged as such in the completion report (see revised P‑10).
5. **Same key, three loci.** Brief 01 `hero_rv_txt` lives in `designops.en.json:10`, `designops.es.json:10`, **and** the inline HTML render‑fallback `work/designops-system/index.html:437` — all three are the same key's content; the read-time-sentence removal applies to all three together.

*No hard STOP‑condition conflict was found* (no path move, no loader‑depth change, no new dependency, no absolute path). The **one** copy change beyond the SPEC's authorized set — Flag 4's read-time removal — was explicitly authorized by the principal during this review, so it is a recorded deviation, not a silent breach. All items above are surfaced for visibility with recommendations, per the "surface don't silently resolve" rule.

---

## Proposal → file/selector/key mapping (rank order)

Each carries the SPEC's own **Responsive:/AA:** contract forward. Motion proposals map to a named capability and ship static end‑state + reduced‑motion.

### P‑1 — Filter bar v2, collapsed disclosure (O‑3: inline strips, all widths)
- **Files:** `index.html` `#tagFilter` (232–272) · `assets/css/pages/home/work.css` `.tagfilter*` (339–410) · `assets/js/pages/home/tagfilter.js`.
- **Do:** Collapse the 3 always‑open rows into one ~56px resting bar: label · three **category disclosure triggers** ("Industry/Field/Role") as `<button aria-expanded aria-controls>` with a live count badge ("Field · 2") · status line + Clear. Trigger opens that category's chip panel **directly beneath as an inline strip** (O‑3 — no bottom‑sheet, scrim, scroll‑lock, or focus‑trap); one panel at a time; **Esc closes + returns focus to trigger**; outside‑click closes. Active selections also render as removable **mini‑chips** in the bar ("Banking ✕"). **Engine unchanged** — same `.tag[aria-pressed]` chips, same `tagfilter.js` faceted matching / `data-empty` dead‑end dimming / `role="status"` live region; the panels just house the chips that sit permanently open today.
- **Keys (EN‑only, module‑substituted like `filter_status`):** `filter_remove_label` ("Remove filter: {tag}"), `filter_open_cat` ("Open {category} filters"). Mini‑chip remover gets accessible name via `filter_remove_label`.
- **Responsive:** desktop single‑row + full‑width strips; mobile triggers wrap on the existing 767/768 hinge, mini‑chips wrap to a 2nd row; 44px touch targets preserved. No new breakpoint.
- **AA:** chips keep `aria-pressed`; triggers add `aria-expanded/aria-controls`; DOM focus order bar→panel→grid; Esc+focus‑return; existing live region intact.

### P‑2 — Filter result motion (O‑1 capability **S3**, WAAPI)
- **Files:** `tagfilter.js` (extend `apply()`) · `work.css`.
- **Do:** On shortlist change, animate surviving cards' re‑entry with `element.animate()` sequenced stagger (**transform+opacity only**, ~40ms/card). Panel open/close = compositor‑only `scaleY` on a wrapper (`transform-origin:top`), not height animation.
- **AA/reduced‑motion:** `matchMedia('(prefers-reduced-motion: reduce)')` collapses duration+delay to 0; static end‑state = the filtered grid; no content motion‑gated.

### P‑3 — One new filter category: Status (O‑4: "Live / In progress")
- **Files:** `index.html` `#tagFilter` (new 4th group) + `data-tags` on the four cards · `tagfilter.js` (zero engine change — `categoryOf` reads groups from DOM) · i18n.
- **Do:** 4th category "Status", exactly two chips. **DECISION (principal-confirmed): page-state membership** — add `data-tags` value `live` to cards **1 & 4** (real, sourced pages) and `wip` to cards **2 & 3** (badged-placeholder pages). Two chips: `tag_live` / `tag_wip`. This resolves the SPEC's internal ambiguity (its "Live: cards 1, 2, 4" membership prose) in favor of the honest, placeholder-preserving reading — matching the SPEC's own "value matching its PAGE state: in-progress" instruction. So filtering to **Live** returns cards 1 & 4; TUUA (card 2) does **not** appear under Live because its *page* is scaffold. Recorded in the completion report as an authorized reconciliation. Engine unchanged (`categoryOf` reads the new group from the DOM).
- **Keys (EN‑only):** `filter_cat_status` ("Status"), `tag_live` ("Live"), `tag_wip` ("In progress").
- **AA/Responsive:** same disclosure/chip semantics as P‑1; one more trigger, wraps on existing flex.

### P‑4 — Filter state in URL hash
- **Files:** `tagfilter.js` (~15 lines).
- **Do:** Reflect active chips into `location.hash` (`#f=banking,frontend-developer`) via `history.replaceState` in `apply()`; hydrate from hash on init (before first grid paint). No routing/storage/dependency; empty hash = today's behavior.

### P‑5 — Scroll‑progress bar promoted site‑wide (roadmap's named upgrade · motion **native**)
- **New files:** `assets/css/shared/progress.css`, `assets/js/core/progress.js` — extracted from Brief 01's proven inline bar (3px, brand purple, fixed top, grows L→R, reverses on upscroll, `aria-hidden="true"`).
- **Home:** add `<link>` + load `progress.js` via `main.js` import (see Flag 3).
- **Briefs (all 4):** **replace** the inline `.progress` CSS block and the inline `updateProgress` JS with the shared `<link href="../../assets/css/shared/progress.css">` + inline module bootstrap. IA‑CONVENTION immovable paths untouched; this is chrome, "everything genuinely shared stays shared."
- **AA:** decorative (`aria-hidden`); `scaleX`/transform width (compositor‑only); reduced‑motion keeps position tracking, drops easing (Brief‑01 parity).
- **Gate:** runtime execution check per page (PR‑5 lesson).

### P‑6 — Smart navbar v2
- **Files:** `assets/css/shared/nav.css` · `assets/js/pages/home/nav.js` · each brief's **inline** nav script.
- **Do:** (a) **Home scrollspy** — one `IntersectionObserver`; the nav link whose section holds the viewport majority gets `aria-current="true"` + underline held at `scaleX(1)`. (b) **All pages** — language panel gains **Esc‑to‑close + focus return** and explicit **`aria-expanded`** on `#langBtn` (today `aria-haspopup` only, class/hover‑driven); lands in `nav.js` **and** each brief inline nav script. (c) Verify byte‑parity of shared nav behaviors (hide‑on‑scroll threshold, heights, link set) across five copies; **add the focus‑within return** on hide‑on‑scroll if absent (P‑6c carried item).
- **AA:** `aria-current` canonical; underline = sighted equivalent; Esc/focus‑return per disclosure pattern.

### P‑7 — Unified smart footer (see Flag 2)
- **Files:** `assets/css/shared/footer.css` + Home footer markup (`index.html` 904–935) · each brief's inline footer + inline footer CSS.
- **Do:** one canonical structure on all five: **col A** tagline + LinkedIn CTA (existing) · **col B (new)** compact site map — 4 nav anchors + 4 brief links (reuses existing‑but‑unused `.footer__columns/.footer__links/.footer__link` tokens already in `footer.css`) · **strip** existing meta + one new line, the 48‑hour response commitment (reuses the established contact fact — no new claim). Brief nav links use depth‑correct relative hrefs; Home uses root‑relative.
- **Keys (EN‑only):** `footer_map_label` ("Site"), `footer_sla` ("I reply within 48 hours.").
- **AA/Responsive:** site map in `<nav aria-label="Site">`; col A/B stack at ≤767px; existing grid tokens.
- **After P‑6/P‑7:** run footer + nav **structural‑parity grep** across all five pages.

### P‑8 — S1 scroll choreography on Home section entrances (motion **S1**)
- **Files:** section CSS (`work.css`, `capabilities.css`, `evolution.css`, `section-extras.css`/track‑record, `contact.css`) — pure CSS, `animation-timeline: view()`, `@supports`‑gated (Chromium 115+).
- **Do:** subtle `translateY`+opacity on section headers + first‑level children of work, capabilities, evolution, track‑record, contact (the SPEC's named Home splice point).
- **AA:** outside the `@supports` gate and under reduced‑motion, rows render in place fully opaque; no content motion‑gated.

### P‑9 — S6 restrained depth on work cards (motion **S6**)
- **Files:** `work.css` `.work-card*` (+ parent perspective).
- **Do:** `preserve-3d` + parent `perspective`; tilt ≤4° on `hover`/`focus-within`; art vs overlay‑text at two `translateZ` offsets. Gated to `@media (hover:hover) and (pointer:fine)` (both already in `work.css:244`).
- **AA:** static fallback = flat card; reduced‑motion holds flat; `focus-within` parity for keyboard; text stays AA at rest and in tilt (no opacity change on text).

### P‑10 — Copy consistency closures (the only authorized copy edits beyond new keys)
- **(a)** `assets/i18n/es.json:125` `contact_engagement_placeholder` "Selecciona una" → **"Seleccione una"** (usted register). One ES value.
- **(b) [PRINCIPAL-AUTHORIZED, supersedes the SPEC's four→five]** Remove the read-duration sentence entirely (read-duration only; clean removal). The hook " The next four minutes show exactly how." is deleted from its two homes so each passage ends on "…shipped the system you are reading, governed daily by me alone.":
  - Home `work_card1_body`: `assets/i18n/en.json:25` (EN) + inline fallback `index.html:294`. *(Home ES `es.json:32` `work_card1_body` is an already-diverged translation with **no** time phrase → no change; remains logged stale for 6.3.)*
  - Brief 01 `hero_rv_txt`: `designops.en.json:10` (EN) + inline fallback `work/designops-system/index.html:437`; and `designops.es.json:10` (ES) — delete " Los próximos cuatro minutos muestran exactamente cómo.", ending on "…gobernado a diario solo por mí."
  - **Unchanged** (no read-duration hook): `work_card{2,3,4}_body`; briefs 02/03/04 `hero_rv_txt`; the standard `hero_read` "N min read" badge stays as the single read-time affordance. Closes the Wave-4 hero_read/hero_rv_txt logged tension by deletion (noted in report; parking-lot itself is 6.4's to action).

### P‑11 — Breakpoint grid unification (responsive‑integrity proposal)
Canonical grid: `max-width:767px / min-width:768px`, `max-width:1023px / min-width:1024px`, `prefers-reduced-motion:reduce`. **Verified @media census → concrete edits:**
- **Off‑by‑one → 767/768:** `nav.css` L85 `max-width:768→767`, L168 `min-width:769→768`, L179 `max-width:768→767`; `hero.css` L77 `min-width:769→768`, L81 `max-width:768→767`; `ticker.css` L76 `max-width:768→767`.
- **1024‑as‑max → 1023:** `capabilities-cards.css` L177 `max-width:1024→1023`.
- **Whitespace variants** normalized to `property: value` (space) in touched files.
- **Strays (SPEC's named three) — resolve per rule (migrate‑if‑equivalent / retain‑with‑comment), six‑width check each, flagged in report):**
  - `ticker.css:92 @media (min-width:641px)` — marquee lane threshold; assess vs 768.
  - `designops-variant.css:133 @media (max-width:900px)` and `:136 @media (max-width:480px)` — assess vs 1023 / mobile.
- **Regression gate:** before/after visual check at **360, 767, 768, 1023, 1024, 1440px** on every touched file.
- *(Non‑breakpoints confirmed & left alone: `work.css` `max-width:320/380px` and `contact.css` `max-width:440/820px` are CSS **property** values, not media queries.)*

### P‑12 — Placeholder heroes sharpened, honesty loudened (briefs 02/03 only)
- **Files:** `work/tuua-transfer/index.html`, `work/limafly-ux/index.html` (inline).
- **Do:** (a) add a hero‑integrated **state line directly under the deck** using the existing dashed‑purple **`.temporal`** idiom, reading the existing **`hero_status`** key ("Case study in progress") — provisional nature unmissable before any scaffold is read. (b) apply P‑5 shared progress bar + P‑7 footer like every page. **No scaffold copy touched, no badge removed, no figure reframed** — `.wip`/`.scaffold`/`.act--scaffold` blocks untouched; honesty is *more* visible, never less.
- **AA:** text state line (not color‑only); dashed border decorative; existing token contrast.

---

## O‑2 — Evolution reveal cards (locked; nested second‑level; HOME body)

- **Files:** `index.html` timeline (611–718) — add a nested reveal inside chosen `.timeline__panel`s · `evolution.css` · possibly a few lines in `evolution.js` (or a small dedicated handler) for the nested `aria-expanded` toggle. Uses the briefs' proven `rv_btn` semantics.
- **DECISION (principal-confirmed): 4 milestones / 8 keys.** Distinct `rv_btn`+`rv_txt` pairs on the **4** highest‑value milestones = **8 keys** (top of the SPEC's "6–8"). All copy **sourced from the CV §5.3 frozen fact set + on‑page facts — zero invention.** Draft copy (EN‑only; for principal approval as part of this plan):
  - **m3 MBA** — `evo_m3_rv_btn` "The exchanges" / `evo_m3_rv_txt` "Full‑time across three continents — terms at the University of Victoria in Canada and Maastricht University in the Netherlands — finishing first in class, specialized in Strategic Consulting."
  - **m4 Lecturer** — `evo_m4_rv_btn` "What I taught" / `evo_m4_rv_txt` "At UTEC, eleven courses across three project levels, mentoring 29 teams end to end through UX design and evaluation. At ESAN, Calculus I to 1,200+ students, in person and remote at scale."
  - **m6 Lima Airport** — `evo_m6_rv_btn` "Beyond the platform" / `evo_m6_rv_txt` "Beyond TUUA, I ran a tracking dashboard across a twelve‑project hybrid portfolio, working preventive and corrective action alongside the Product Owners, and articulated the planning phase of five central units into one standard."
  - **m7 System** — `evo_m7_rv_btn` "What's under it" / `evo_m7_rv_txt` "Not just tokens: ten organisms, a Gantt and a native motion system, and a 175‑key bilingual engine — all hand‑written to WCAG AA, governed daily by me alone."
- **AA:** inherits the briefs' proven `aria-expanded` reveal semantics; static fallback = collapsed; keyboard‑operable; reduced‑motion instant.

---

## New EN keys inventory (all logged for 6.3 ES lock; `es.json` untouched beyond P‑10a)

**Chrome dict (`assets/i18n/en.json`):** `filter_remove_label`, `filter_open_cat`, `filter_cat_status`, `tag_live`, `tag_wip`, `footer_map_label`, `footer_sla`.
**Home body (`assets/i18n/en.json`, O‑2):** `evo_m3_rv_btn/txt`, `evo_m4_rv_btn/txt`, `evo_m6_rv_btn/txt`, `evo_m7_rv_btn/txt` (8 keys; 6 if trimmed to 3 milestones).
**Only ES writes this run (count unchanged):** `contact_engagement_placeholder` (P‑10a, value fix) + Brief 01 `hero_rv_txt` (P‑10b, sentence deletion). Nothing else in `es.json` or any brief ES dict moves.

---

## Build sequence, branch, verification, archive

**Branch:** `wave6-task62-surgical-refinements` · one logical commit · **open PR, do NOT merge** (principal's standing override). All GitHub access via `gh`.

**Order:** T2 Home‑surface (P‑1→P‑2→P‑3→P‑4→P‑8→P‑9→O‑1 hero S3→O‑2 reveals; apply P‑10a) → T3 cross‑page chrome (P‑5, P‑6, P‑7, P‑11; then footer+nav parity grep) → T4 briefs (P‑12; P‑10b) → verify → commit → PR → T5 archive.

*Note on O‑1 (hero S3):* replace the hero's `fadeUp` cascade (`hero.css` badge/h1/right + `@keyframes fadeUp`) with a WAAPI **S3 sequenced build** (transform+opacity, per‑element delay) in a small hero build step; **S5 explicitly deferred** (recorded against O‑1 in the report). Ships static end‑state + reduced‑motion collapse.

**Verification (before PR; verification sweeps where apt):**
- **Runtime** — hero animations under `prefers-reduced-motion` actually collapse, not just present in CSS (F‑7 carried item).
- **Runtime** — P‑5 new files load and resolve at run time on **all five** pages (PR‑5 lesson: execution check, not existence check); `main.js` graph still executes (filter, carousel, evolution, contact, ticker all run).
- Nav **focus‑within return** on hide‑on‑scroll (P‑6c).
- Footer + nav **structural‑parity grep** across five pages.
- **Six‑width** visual regression (360/767/768/1023/1024/1440) on every P‑11‑touched file + any file P‑1/P‑6/P‑7 reflowed.
- **Banned‑strings sweep** — no automated-authoring attribution anywhere (files, commit, PR); no "tested with users"; no invented metric.
- **Relative‑path sweep** — no `href="/`, `src="/`, `fetch('/`, `url(/` introduced.
- **Key‑parity note** — every new EN key logged for 6.3; `es.json` untouched beyond P‑10a.

**Archive (task 5, final step, same branch/PR):**
- `docs/v3/cc-plans/Plan-Wave6-Task62-SurgicalRefinements.md` — this plan as approved.
- `docs/v3/cc-completion-reports/wave-6-task62-surgical-refinements-completion-report.md` — canonical shape: outcome summary; PASS/FAIL table vs this deploy's success_criteria; authorized deviations (PR‑not‑push; **principal-authorized read-time removal superseding SPEC P‑10(b)'s four→five, read-duration only**; any P‑11 stray retained; P‑3 card‑membership reconciliation; any live‑repo‑forced adjustment); open items carried forward (all new EN‑only keys awaiting 6.3; any parking‑lot append; **S5 deferral recorded against O‑1**); plain statement that 6.2 is complete and 6.3/6.4 remain. No automated-authoring attribution; sole author `jdsaire`.

**Invariants held:** zero‑build/zero‑dependency; relative paths only; immovable paths + loader depths unmoved; placeholder honesty intact and (P‑12) more visible; content‑freeze respected except the one principal-authorized read-time removal (P‑10b, this session); sole author, no automated-authoring attribution, single logical commit, PR opened not merged; zero delegated sub-processes.
