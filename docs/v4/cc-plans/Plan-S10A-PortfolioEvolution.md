# Plan-S10A-PortfolioEvolution

**Dispatch:** `P-CC-S10A-PortfolioEvolution-v1_0.xml` · **Branch:** `deploy/v13-s10a-portfolio-evolution` · **Repo:** `jdsaire/designops`
**Push policy v13:** open a pull request after the first commit and do not merge it.

---

## Context

Brief 01 is a half-migrated route carrying a page whose subject no longer matches its content. Home's work card 4 already points at `work/front-end-evolution/`, which 404s today, while the page itself still sits at `work/designops-system/` and argues for "a design system I built and govern end to end" — a subject that F6-b has since moved to `about/`. The page's dashboard also carries figures the freeze has struck: 49 pull requests, a 73-day method line with three stale ratios, and legend marks (27 May, 06 Jun) with no source in either source repository.

S10-A resolves all of it in one run: the page moves to the slug `AMENDMENT-F6-S10Split-v1_1.md` §F6-a names, its eight sections are rewritten from copy frozen at Gate A2, its flat bar chart becomes a real days-axis Gantt covering both builds, the dashboard gains a second column for the multi-page build, and two measured bugs close — one of which (B2) affects all four brief pages. The intended outcome is that scope-freeze §2 exit conditions **B4, H5, G4 and G5** can be evaluated true for this route at S11.

Nothing on this page is authored during the run. Every visible EN string comes from `S10A-COPY-LOCK-EN-v1_0.md`; every figure traces to `S10A-DERIVATION-v1_0.md` or to the four rulings recorded below.

---

## Preflight — complete, all green

| Check | Result |
|---|---|
| `gh` CLI | `~/bin/gh` v2.96.0, authenticated as **jdsaire** (keyring), scopes `gist, read:org, repo, workflow` |
| `origin/main` HEAD | **`42de9a9`** — matches `<verified_state>` exactly. **No drift. No figure invalidated.** 103 commits confirmed. |
| Working tree | Clean. No `.git/index.lock`. Local clone on `deploy/v11-s7-assets` at `447e904`; branch cut from `origin/main`. |
| `S10A-COPY-LOCK-EN-v1_0.md` | present, readable, Gate A2 passed |
| `S10A-DERIVATION-v1_0.md` | present, readable |
| `freeze/AMENDMENT-F6-S10Split-v1_1.md` | present, readable, signed 08-SEP-2026 |
| `freeze/SCOPE-FREEZE-Portfolio-v1_0.md` | present, readable |
| `freeze/PATCH-F1-Precisions-v2_0.md` | present, readable |
| **Slug per §F6-a, verbatim** | **`work/portfolio-evolution/`** — matches the prompt. Reference name **Portfolio Evolution**. |

**Baselines recorded before any change:**
- Internal HTML `href`/`src` links (excluding external, `#`, `mailto:`): **228** across 10 HTML files. Internal Markdown links: **0**. Total **228**.
- Per-section EN character counts reproduce the derivation exactly: 00=392, 01=848, 02=512, 03=1,172, 04=3,135, 05=1,209, 06=1,154, 07=242, **total 8,664 across 133 keys**. Method: sum of `len(value)` over `designops.en.json`, bucketed by the principal's section map.

---

## Enumeration — what I found against what the prompt states

**Old-slug references: 18, exactly as stated, across the 8 named files.** Both non-obvious ones confirmed: `work/yape-trust-verify-brief/index.html:926` (continuity card) and `work/airport/index.html:12` (chassis comment).

| File | Lines |
|---|---|
| `index.html` | 68, 118 |
| `about/index.html` | 57, 107 |
| `capabilities/index.html` | 58, 108 |
| `contact/index.html` | 57, 107 |
| `work/accreditapass/index.html` | 303, 353 |
| `work/airport/index.html` | 12, 500, 550 |
| `work/designops-system/index.html` | 404, 454 |
| `work/yape-trust-verify-brief/index.html` | 435, 485, 926 |

**A 19th reference the prompt does not list:** `assets/css/shared/page-hero.css:9` — a CSS provenance comment reading `(work/designops-system/index.html lines 87–90)`. Not a route, not a link. I will update it for accuracy and report it as a 19th, keeping the prompt's 18 intact as its own count.

**Also found, and in scope as consequential:** `work/accreditapass/index.html:21` and `:659–660` carry comments stating *"work/front-end-evolution/ does not exist until S10."* Both become false this run. Comment-only edits; no visible string, no Main organism.

**tokens.css — verified by inspecting for the `<link>` element, not by grepping the string.** Exactly as `<verified_state>` predicts:
- Four brief pages: **zero `<link>`**; the only hit on each is the chassis comment at `designops-system:50`, `accreditapass:55`, `airport:64`, `yape:50`.
- Home, About, Capabilities, Contact: `<link rel="stylesheet" href=".../assets/css/base/tokens.css">` at line 18 of each.
- `nav.css:65` consumes `var(--surface-panel)`, `nav.css:280` consumes `var(--shadow-3)`. Values in `tokens.css` match the prompt's four literals exactly (lines 53, 59, 92, 96).

**Archive destination resolved from the live tree: `docs/v4/`.** `docs/v4/README.md` states it covers "S5 … S6 … S8 — the deployments under this repo's `docs/v{N}` archival convention since Wave 6", and `docs/v4/cc-plans/README.md` opens *"Approved deployment plans for **v4 and later**."* S10-A is the next stage in that same sequence. **No `docs/v5/` is created; no `handoff/` directory is created.**

**Pages workflow confirmed safe.** `.github/workflows/static.yml` uploads `path: '.'` with no per-page enumeration; `.nojekyll` already exists at root. A directory rename needs no workflow edit. §7 of the Repo Standard is already satisfied.

**Two mechanisms that make the route migration cheap, both verified:**
- `navchrome.js` rewrites every `data-nav-work` href as `rootPrefix + 'work/' + value`. The slug lives only in the HTML attribute — **no JS file is touched**, satisfying the stop condition on `paths.js` / `navchrome.js` / `i18n.js`.
- The brief's inline loader uses `BODY_BASE = "i18n/"`, a page-relative path. The dictionary moves with the directory and needs no edit.

---

## Rulings taken at plan time

Four `<stop_conditions>` triggers were hit and answered before planning. All four are recorded here so the completion report inherits the reasoning.

**R1 · Gantt strings absent from the lock → derive from the record, approve at the gate.**
The lock covers `sch_*` and says only *"tasks derive from the PR spine, #6–#25."* It supplies no E2 task name, no per-task (i) sentence, no chip label, no badge label and no caption body. Ruled: E2 task names come from the merged PR titles and branch names already in the commit record; each (i) sentence is a one-line restatement of that row's own window and source; chrome labels inherit from the Yape dictionary where an equivalent exists. **Every derived string is shown for line-by-line approval at localhost Gate 3 before its commit lands.**
*Architectural consequence:* these strings live in the component's `DATA` object and inline markup, **not** in `designops.en.json` — the Yape precedent, where task and epic names are likewise component data. §03 therefore stays at its locked 1,101-character budget, and the derived-string volume is reported separately at verification.

**R2 · Dependencies filter has no data → relabel the chip "Sequence".**
Derivation §5.4 measured that no dependency edge exists: #13 merged before #12, and a 34-day dormant gap breaks adjacency inference. Yape's five edges were declared by its author; there is no equivalent declaration here. Ruled: the third chip renders the **chronological order of the three epic bands**, which is measured, under a label that claims sequence and not causation. Three filters ship; the SVG overlay draws real chronology; nothing is invented.

**R3 · `dash_m2` = 175 → suppress the value.**
`PATCH-F1 §5.5` explicitly supersedes the 175-key figure and the lock's correction table does not touch it, so it would ship sourceless. Ruled: the single-page column renders **Dictionary keys** with its label and **no value**, the same treatment already ruled for `dash2_m2`. Both build columns carry one honestly pending figure. S9 fills both; S11 verifies both resolved.

**R4 · Multi-page column → ship only the rows the lock supplies.**
Nine cells: `dash2_m1`, `dash2_m2` (pending), `dash2_m6`, `dash2_m7`, `dash2_m8`, `dash2_d1`, `dash2_d3`, `dash2_r1`, `dash2_foot`. No value is carried across or computed for `dash2_m3/m4/m5`, `dash2_d2/d4`, `dash2_r2/r3`. The two columns are visibly asymmetric because the second build genuinely has fewer measured figures.

**Reported, not resolved by me — a figure disagreement between governing files.** Derivation §4.2 computes **71 days** and **35 active build-days** (and F6-f states 52 PRs / 35 build-days). The copy lock §2 rows 5–7 record your Gate A1 rulings as **73 days** (Q1 A, ending 06 Jul) and **32 active build-days** (Q2 A, F6-p). The lock post-dates the derivation and records the rulings the derivation asked for, so **the lock's 73 / 32 ship**. Flagged here per the guardrail rather than reconciled silently; confirm at Gate 2 if you read it otherwise.

---

## Redirect approach for the two retired routes — options, decided at Gate 1

GitHub Pages serves static files only; there is no server-side redirect and no `_redirects` support. Both retired slugs must therefore become real directories containing an `index.html`. Two shapes, for your call at the first localhost gate per the guardrail:

- **(a) Meta-refresh stub** — `<meta http-equiv="refresh" content="0; url=../portfolio-evolution/">`, `<link rel="canonical">`, plus a visible one-line fallback anchor for no-JS/no-refresh readers. Two files, ~15 lines each, zero JS.
- **(b) Stub plus `history.replaceState`** — as (a), with a script that replaces the history entry so Back does not bounce. Slightly better UX, one more moving part.

I recommend **(a)**. The visible fallback sentence is the only new string either shape needs; it is route chrome, not brief copy, and I will show it for approval at the gate.

---

## Files touched

| File | Change |
|---|---|
| `work/designops-system/` → `work/portfolio-evolution/` | `git mv` of the directory including `i18n/` |
| `work/portfolio-evolution/index.html` | the eight-section rewrite; the Gantt; the two token declarations |
| `work/portfolio-evolution/i18n/designops.en.json` | key edits, additions and deletions per the lock |
| `work/portfolio-evolution/i18n/designops.es.json` | **path move only — byte-identical content** |
| `work/designops-system/index.html`, `work/front-end-evolution/index.html` | **new** redirect stubs |
| `index.html`, `about/`, `capabilities/`, `contact/` | nav slug updates (2 lines each) |
| `work/accreditapass/index.html` | nav slug (2 lines) + two stale comments |
| `work/airport/index.html` | nav slug (2 lines) + chassis comment + two token declarations |
| `work/yape-trust-verify-brief/index.html` | nav slug (2 lines) + continuity card:926 + two token declarations |
| `assets/css/shared/page-hero.css` | provenance comment |
| `assets/img/work/reflection-{straw,sticks,bricks}.svg` | **new** vector figures |
| `docs/v4/cc-plans/Plan-S10A-PortfolioEvolution.md` | **new** — this plan as approved |
| `docs/v4/cc-completion-reports/s10a-portfolio-evolution-completion-report.md` | **new** |
| `docs/v4/README.md`, `docs/v4/cc-plans/README.md`, `docs/v4/cc-completion-reports/README.md` | one row each |

**Explicitly not touched:** `about/index.html` body (nav line only), the ladder, any Credly badge, any Main organism other than Home card 4's CTA, `assets/img/work/front-end-evolution.svg`, `paths.js`, `navchrome.js`, `i18n.js`, and any dictionary beyond this stage's own keys.

**`designops.es.json` handling.** Both i18n engines guard with `if (dict[key] !== undefined)` and fall back to the authored EN markup, so an EN-only key renders EN under the ES toggle and an orphaned ES key is inert. The ES dictionary therefore moves untouched — **zero Spanish authored, zero Spanish deleted** — and S9 reconciles it in its single pass.

---

## Commits, in order — the site loads clean after every one

| # | Message | Gate |
|---|---|---|
| 1 | `refactor(route): serve brief 01 at work/portfolio-evolution/` | |
| 2 | `fix(nav): declare surface-panel and shadow-3 on the brief chassis` | **Gate 1** |
| 3 | `feat(brief01): rewrite the editorial, problem, evolution and closing sections` | **Gate 2** |
| 4 | `feat(brief01): replace the schedule with a days-axis gantt of both builds` | **Gate 3** |
| 5 | `feat(brief01): six architecture cards behind a category filter` | |
| 6 | `feat(brief01): add the multi-page column to the dashboard` | |
| 7 | `feat(brief01): reflection cards per build, with their vector figures` | **Gate 4** |
| 8 | `docs(handoff): archive the S10-A plan and completion report` | |

Commit 3 carries four sections because task 4 of the dispatch treats them as one item — no new component, pure copy splice. Recorded as a deliberate combination in the completion report per the one-commit-per-item rule.

Zero AI attribution in any of the above: no `Co-authored-by`, no "Generated with", no tool name in any message, branch, PR field, file header or dictionary comment. Sole author and committer `jdsaire`.

---

## Execution detail

### Commit 1 — route migration (task 2, closes H5 and G4 for this route)
`git mv work/designops-system work/portfolio-evolution`, then the 18 references plus the CSS comment. Both `href` and `data-nav-work` change on each nav line. `index.html:342` is **left pointing at `work/front-end-evolution/`** — the card is already correct under patch A2 and the redirect stub makes it resolve; repointing it backwards would silently cancel A2. Redirect stubs created at both retired slugs per the shape chosen at Gate 1. `assets/img/work/front-end-evolution.svg` untouched.

### Commit 2 — bug B2 (task 3, all four brief pages)
Into each brief page's existing inline chassis: `--surface-panel: rgba(8,8,8,0.97)` and `--shadow-3: rgba(0,0,0,0.55)` appended to the `:root{ --ink … }` block; `--surface-panel: rgba(250,250,250,0.97)` and `--shadow-3: rgba(0,0,0,0.16)` appended to `html[data-theme="light"]{…}`. No `var()` fallback in `nav.css` — one fallback cannot be right in both themes. No `tokens.css` link added — the inline chassis is the established pattern for these four and changing it is a different decision.

### Commit 3 — sections 00, 01, 02, 07 (task 4)
Straight splice from lock §4, §5, §11 Q2–Q4 and §10. `hero_eyebrow` → `Work brief`, no digit; the other three briefs and Home's card labels are untouched, per §11 Q1 — the collision is resolved by removal, not renumbering. `kw4`/`kw5` added to the keyword row. Five `act1_*` keys deleted; the two-line scanstack and the role strip keep their current lengths. `act2` gains `act2_lede` and a fourth stop; Stop 3 regenerates. §07: `convert_next_label` → `Similar work`; both continuity cards repoint to `../accreditapass/` and `../yape-trust-verify-brief/` — live routes, never the Home anchor, which removes two `data-nav-link="#work"` attributes. `convert_cta`, `convert_temporal` and the `data-temporal` mailto are **hidden, not deleted**.

*Watch item:* `act4_insight` and `dash_r1` currently wrap a `<strong>`, and both engines skip elements with children. The lock's replacements are plain prose; they ship without a child element so the ES pass can reach them.

### Commit 4 — the days-axis Gantt (task 5)
**Inherited from `work/yape-trust-verify-brief/index.html:1124–1330` and its CSS at 286–351:** epic rows with disclosure toggles, task sub-rows, expand/collapse-all with arrow-key roving focus, `aria-pressed` chips, the SVG overlay, milestone markers, the right-hand totals column, the `noscript` fallback and the how-to-read caption. The component stays data-driven from one `DATA` object.

**Replaced, deliberately — this is a layout model change, not a divisor change:**
- `cursor += t.sp` contiguity → each row carries a real `start` and `end` date; rows are free to leave gaps, and the two real gaps (19–25 Jun, and the 34-day dormant 25 Jul – 28 Aug) render as gaps.
- `pct(points)` → `pct(date)` over a single continuous axis, **24 Apr 2026 → 08 Sep 2026**.
- `TICK_STEP = 10` story points → calendar ticks at month boundaries (Apr · May · Jun · Jul · Aug · Sep).
- Totals column shows the row's day span and its commit count, not SP/hours.

**Three epic bands, all measured (lock §6.2):**

| Band | Window | Record | Task rows |
|---|---|---|---|
| E1a · jdigital | 24 Apr – 18 Jun 2026 | 240 commits · 48 PRs | `sch_e1`–`sch_e6`, names and windows unchanged |
| E1b · legacy-desops | 26 Jun – 04 Jul 2026 | 46 commits · 4 PRs | `sch_e7`–`sch_e10` |
| E2 · designops | 10 Jul – 08 Sep 2026 | 103 commits · 20 PRs (#6–#25) · 17 active days | derived from the PR spine |

All twenty `sch_e*` keys are kept verbatim. Two boundary facts flagged for confirmation at Gate 3: E1b's locked band reads 26 Jun – 04 Jul but contains `sch_e10` at 06 Jul, so the drawn bar extends to 06 Jul with the extension carrying the principal-supplied badge; and `sch_e10` renders **badged as principal-supplied, not commit-sourced**, the one row on the chart sourced to your own account.

**E2 task rows, derived from the merged spine (verified in this clone):** 12 Jul (#6, #7) · 15 Jul (#8) · 18–19 Jul (#9–#14) · 21 Jul (#15) · 25 Jul (#16, #17) · 29 Aug (#18) · 30 Aug (#19) · 31 Aug (#20, #21) · 01 Sep (#22) · 05 Sep (#23, #24) · 06 Sep (#25). Eleven rows; every date is a merge date in `git log --merges`.

**Filters — exactly three, per R2:** timeframe in days (the axis) · **sequence** · forecast. No story-points filter and no critical-path filter; if either looked derivable mid-run I stop and report rather than build it.

**Forecast boundary 06 Sep 2026.** One forecast bar: this stage, starting 08 Sep. S9, the README stage and S11 are **named in the caption, not drawn** — they have no date, and drawing them would invent one. Flagged at Gate 3.

**Info affordance, WCAG-non-negotiable:** each task row carries an `(i)` as a real `<button aria-expanded>` toggling an inline `role="note"`. Reachable by keyboard focus as well as hover or tap, stays visible while the pointer travels onto it, and dismissible with Escape without moving focus. Not a hover-only tooltip — that fails G5 and would be caught at S11.

`sch_lg1`, `sch_lg2`, `sch_lg3` deleted (§6.1 — `sch_lg3` carried 27 May and 06 Jun, which have no source in either repository). `sch_note` and `sch_verdict` rewritten from the lock; both carry stale figures today.

### Commit 5 — architecture (task 6)
Six cards inside the original 3,135 ceiling; the four existing cards drop to 1,556 characters to fund 1,038 of new. Multi-select filter group above the grid, inheriting `.gantt__chip` (`aria-pressed`, keyboard operable): **Foundational · Single-page · Multi-page**, **all six shown by default**. `act3_c4_rv_txt1` preserved **verbatim**; `act3_c4_rv_txt2` deleted. The evidence container `act3_ev_*` is **hidden, not deleted** — which removes the page's last repository hyperlink, so `sch_note` and `dash_foot` must name both repositories in prose. The lock's strings do; I verify they ship intact at Gate 4.

### Commit 6 — dashboard (task 7)
A mutually exclusive `role="tablist"` above the dashboard, inheriting the wired `.dash__tabs` pattern already on the page. **Default: multi-page.** Single-page corrections exactly as locked: `dash_m7` 49→52, `dash_d2` 4.7→5.0, `dash_d3` 5.8→5.5, `dash_d4` 49→52, `dash_d2_p`/`dash_d3_p` PR counts, `dash_r1`, `dash_foot` rewritten. Unchanged and verified correct: `dash_m6` 286, `dash_m8` 73, `dash_d1` 3.9, `dash_d1_p`, `dash_d4`'s "73 days" label, `dash_d4_p`, `dash_m1`, `dash_m3`, `dash_m5`. `dash_m2` renders with its value **suppressed** per R3. Multi-page column: the nine locked cells per R4, with `dash2_m2` label-only and value-suppressed — never a placeholder, never a zero, never computed.

### Commit 7 — reflection (task 8)
Mutually exclusive filter matching §05, defaulting to multi-page. Three single-page cards and three multi-page cards, each with its own closing line. Single-page paragraphs become single-line bullets from the lock; `act5_h{1,2,3}_x` deleted. The three single-page cards gain **straw / sticks / bricks** figures inheriting the Home work-card treatment — `assets/css/pages/home/work.css:193–209`, where `.work-card__bg-img` takes `filter: blur(6px)` on hover, `:focus-within` and `.is-active`, revealing the content beneath. Keyboard operable; `.is-active` toggled on Enter/Space, cleared on Escape, per `assets/js/pages/home/work.js`.

**Asset constraint, hard:** genuine vector geometry authored at delivery dimensions. No embedded base64 raster. No file above 500 KB. The S7 precedent is the standard — seven files went 23,777,518 B → 23,077 B as real vector artwork.

---

## Localhost gates

Served with `python3 -m http.server 8000` from the repo root, which reproduces the Pages path semantics (`data-nav-depth` supplies every prefix). Each gate is a stop: I present what changed, you validate, and only then does the next commit group start.

| Gate | After | What you validate |
|---|---|---|
| **1** | commits 1–2 | Both retired routes resolve, neither 404s. Home card 4's CTA lands on the page. The Work dropdown is opaque on all four brief pages, **both themes, scrolled and unscrolled**. Redirect shape (a) or (b) chosen. |
| **2** | commit 3 | Sections 00, 01, 02, 07 read as locked. Eyebrow carries no digit. Both continuity cards land on live brief routes. No contact CTA renders. |
| **3** | commit 4 | The Gantt, and **every derived string approved line by line** — E2 task names, the ~30 (i) sentences, three chip labels, both badge labels, the caption body. Plus the three flagged boundary calls: E1b's bar extending to 06 Jul, the single forecast bar, and S9/README/S11 named in caption only. |
| **4** | commits 5–7 | Six cards all shown by default; the dashboard defaults to multi-page with both pending rows value-suppressed; three reflection cards per build with their figures blurring on focus and tap. |

---

## Verification before the PR opens (task 9)

- **Browser, both themes, scrolled and unscrolled:** Work dropdown opaque on all four brief pages. This defect class is runtime-only and static checks miss it — the PR-5 precedent.
- **HTTP:** Home card 4's CTA returns 200. `work/designops-system/` and `work/front-end-evolution/` both resolve.
- **Keyboard:** complete path through the Gantt filters, disclosure toggles, every `(i)`, both tablists, the architecture chips and the reflection cards. Visible focus throughout. AA contrast verified in both themes, not assumed.
- **Links:** recount with the same script that produced the 228 baseline; report **N/228**. The count is expected to hold — the two `#work` anchors that leave §07 are replaced by two live brief routes.
- **Budgets:** recount per section with the same method that reproduced 8,664, and report the delta against lock §3 for all eight. Component `DATA` strings reported separately, per R1.
- **Attribution:** grep every commit message, the branch, the PR title and body, and every touched file for `Claude`, `Anthropic`, `AI-generated`, `Co-authored-by`, `Generated with`. Expect zero. The architecture card's `act3_c4_x` names Claude as a tool in page copy — that is the lock's own string and stays exactly as locked, propagated nowhere.
- **Spanish:** zero strings authored; `designops.es.json` diff must show a path change only.
- **Assets:** no file entering `assets/` above 500 KB. Recorded but out of scope: `assets/img/bridge1_onboarding.svg` is 665,784 B and still breaches A18 under your explicit S7 hold-out. **A18 therefore still evaluates FALSE** and the dashboard must not imply the ceiling is met.

---

## Archive and PR (task 10)

Into `docs/v4/`, the destination resolved from the live tree:
- `docs/v4/cc-plans/Plan-S10A-PortfolioEvolution.md` — this plan **as approved**, under that exact filename.
- `docs/v4/cc-completion-reports/s10a-portfolio-evolution-completion-report.md` — what was **actually** executed: outcome summary, per-task results, every deviation with its reason, before/after link counts, per-section character deltas, the four auto-merge criteria each evaluated true or false with evidence, and everything left open for S9 (`dash_m2` and `dash2_m2`, the full ES reconciliation) and S10-B.
- A row added to `docs/v4/README.md` and to both folder READMEs.

Then `gh pr create` against `main` from `deploy/v13-s10a-portfolio-evolution`. **The PR is left open. I never merge it** — this stage edits i18n dictionaries, which are barred from auto-merge under every condition, so manual merge is the default and there is no case in which auto-merge applies.

---

## Stop conditions I will honour mid-run

Beyond the four already ruled: if the lock does not cover a string I need, I stop and report rather than adapt a neighbour or carry the live string forward silently. If a Gantt bar would need an invented date or duration, I stop. If a section misses its budget after two trim attempts, I stop and report the delta rather than cut a load-bearing claim. If any task would reach `about/`'s body, the ladder, a badge, or a Main organism beyond Home card 4's CTA, I stop — that is S10-B and its amendment is unsigned.
