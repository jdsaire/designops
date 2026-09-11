# Plan-S10A-Iteration

**Dispatch:** `P-CC-S10A-Iteration-v1_0.xml` · **Branch:** `deploy/v13-s10a-portfolio-evolution` (exists, continued — not created)
**Base:** `eda6bb4`, 9 commits ahead of `origin/main` · **Push policy v13:** open the PR at Gate 7, never merge.
**Review shape:** seven blocking gates, each released only by its exact phrase.

---

## Context

S10-A shipped once. Nine commits landed, the branch was pushed, and the run then reported four
"localhost gates" that were never halts — the previous dispatch marked tasks `gate="localhost"` as an
XML attribute and no prose anywhere gave that attribute a behaviour, so a compliant executor planned,
got approval, and ran to the end uninterrupted. It also reported a pull request that does not exist.

This iteration fixes what the principal saw when they finally looked at the running page, from a copy
lock frozen at v1.1: §01 becomes a sourced problem grid rather than two scan lines, §02 drops to three
version cards on a stepped layout, §03 loses its filter rail and 22 information buttons and gains
phase-named bands, §05 becomes paired values per metric instead of a tablist, §06 collapses six cards
to two, and the 3D card lift and three reflection figures go. The window moves to **71 days**
everywhere, because deleting the 06 Jul row removed the only source for the 73rd day.

The intended outcome is a page the principal has actually reviewed surface by surface, and a pull
request whose URL is printed and checkable.

---

## Preflight — complete, all green

| Check | Result |
|---|---|
| `gh` CLI | authenticated as **jdsaire** (keyring). GraphQL was transiently flaky; REST used instead |
| Branch | `deploy/v13-s10a-portfolio-evolution` checked out, local HEAD **`eda6bb4`**; origin at **`eda6bb4`** confirmed via `gh api` |
| Base | `origin/main` = `42de9a9` and **is an ancestor of HEAD**. 9 ahead, 0 behind |
| Working tree | clean, no untracked files, no `.git/index.lock` |
| **No PR exists** | newest PR on the repo is **#25** (`deploy/v11-s7-assets`, closed). `gh pr list --head` for this branch returns `[]` |
| Local `main` | `a32955a` — **25 behind `origin/main`, 1 unpushed ahead**, exactly as `verified_state` describes. **I will not check it out, merge it, rebase onto it or push it.** Where main is needed I use `refs/remotes/origin/main` |
| Port 8000 | occupied by the previous session's Python server **serving this same repository** (`/work/portfolio-evolution/` → 200). Per `<gate_protocol>` I **reuse it** rather than start a second |
| **§01 ceiling** | **960** — lock §4. Locked at 954, **6 characters of headroom** |
| **§03 ceiling** | **1,172** — lock §4. Locked at 1,165, **7 characters of headroom** |

**Governing files, all present and readable:** `S10A-COPY-LOCK-EN-v1_1.md` · `S10A-ITER-PREFLIGHT-v1_0.md` ·
`RESEARCH-PortfolioRelevance-2026-v1_1.md` · `freeze/AMENDMENT-F6-S10Split-v1_1.md` ·
`freeze/SCOPE-FREEZE-Portfolio-v1_0.md`.

**One repo-state note, not a blocker.** The remote-tracking ref `refs/remotes/origin/deploy/v13-…`
is absent locally although `branch.<name>.remote/merge` config is intact and the remote is confirmed
at `eda6bb4`. A `git fetch origin` at execution start restores it. Nothing in `verified_state` is
invalidated.

---

## Enumeration

**Internal links: 233, not 235.** Method: `href`/`src` in `*.html`, excluding `http(s):`, `mailto:`,
`tel:`, `data:`, `javascript:` and bare `#`. Zero relative markdown links, confirming the prompt.
There are no single-quoted, root-relative, `srcset`, `data-src` or `poster` attributes that a wider
method would catch, so the 2-unit difference sits in the prompt's method, not in the repo. Per the
prompt's own instruction, **233 governs, and both ends of the before/after pair use it.**

**All five CSS target groups are where `verified_state` says** — inline in the brief page, none in a
shared stylesheet: `.card:hover` (186) · the `@supports (transform-style:preserve-3d)` wrapper with
`#act3 .cardgrid--2 { perspective }`, `#act3 .card:hover/:focus-within` and `.card__t` translateZ
(469–477) · `.house--fig` / `.house__bg` / `.house__bg-img` (320–340) · `.house__tag` (402). The
`rotateX` hits in `assets/css/pages/home/work.css` belong to Home's work-card organism — a Main
organism, out of scope, untouched.

**Gantt `DATA`** confirmed inline at **line 1268**. Three bands, **22 task rows**, band-03 commits
sum to **103** ✓. Clustering verified against the live object: Wave rows `4+8+18+3+5 = 38`
(12–25 Jul); remaining `2+2+14+13+4+20+10 = 65`; **38 + 65 = 103**. Row count after R4 and
clustering: 6 + 3 + 8 = **17**.

### The §03 count reconciles exactly — and only under one bucketing

The lock's §03 figure of 1,165 does **not** mean the `sch_*` dictionary keys alone. Measured:

| Component | Chars |
|---|---|
| `sch_*` keys after the locked edits (`sch_e10_*` deleted) | 933 |
| 3 band labels + the `Phase` column header + the 8 band-03 row names | 232 |
| **§03 total** | **1,165** ✓ exact |

`gantt_*` chrome is excluded — and is being deleted anyway; bands 01/02 row names come from
`sch_e*_t` and are already counted. **My Gate 4 and Gate 7 scripts will use this bucketing**, because
it is the only one that reproduces the lock's own number.

**Every other section reconciles too**, which is what makes the bucketing trustworthy:
§00 **461** ✓ · §01 **954** ✓ · §02 **602** ✓ · §06 **552** ✓ · §07 **181** ✓ (hidden keys excluded).
§05 projects to **1,368** against the lock's 1,330 (+38, likely `dash_pending`) — 532 under its
ceiling, so no risk; both figures get reported. §04 lands at **2,817** against the lock's 2,820,
315 under its ceiling.

**One stale line in the lock, reported not resolved:** §15's checklist says §03 was "trimmed to
1,148", while §4's narrative and table both say **1,165**. §4 is internally consistent
(`sch_lede` → 78, `sch_note` → 367) and matches my measurement. **1,165 governs.**
Separately, the preflight's §7 table carries eight rulings (R1–R8) while the lock's §2 carries
eleven (R1–R11); R9/R10/R11 exist only in the lock. The lock governs.

---

## Rulings taken at plan time

**Q1 · §04 category labels → reuse the three existing keys.** The lock contradicts itself: §9's table
lists six NEW `act3_c*_cat` keys, its next row marks `act3_f1/f2/f3` **REPURPOSED**, and §4 states the
labels "cost nothing." Ruled: cards 1–2 render `act3_f1`, 3–4 `act3_f2`, 5–6 `act3_f3`, uppercased in
CSS. Matches §4's arithmetic, adds no key, and gives S9 three strings instead of six.

**Q2 · N3 sequencing → strip the figure markup at Gate 1, defer `.house__tag`.** N3 as written deletes
the SVGs and four CSS rules at Gate 1 while the markup using them survives to Gate 6 — five gates of
broken image references and unstyled tag text, against the load-clean-after-every-commit rule. Ruled:
Gate 1 deletes the three files, the three `<img>`/`.house__bg` wrappers, the `house--fig` class, its
`tabindex` and its JS, and the `.house--fig`/`.house__bg`/`.house__bg-img` rules. **`.house__tag`
alone waits for task 7**, where its last markup user is deleted. Flagged as a deviation.

**Q3 · §02 scroller → hide the nav, keep the markup.** With three statically-placed cards the
snap-scroller has nothing to scroll. `.timeline__nav` goes `display:none`, which removes two inert
buttons from the tab order without deleting markup the prompt did not authorise removing. The track
keeps its `tabindex`.

**Q4 · `act4_insight` → lede in the head, insight above the grid.** §05's head carries eyebrow,
verdict and the new `act4_lede`, matching the five other sections' opening treatment; `act4_insight`
moves down to sit directly above the dashboard, next to the numbers it describes.

---

## §02 stepped layout — the calculated offsets

The step unit is the existing `--slide-gap: clamp(1.25rem, 2vw, 2rem)`. No new token, no viewport
unit, no `min-height`. The track becomes a three-column grid with `align-items:start`, and the rise
comes from `margin-top` on each card — so the grid grows naturally rather than transforms overflowing.

| Breakpoint | Step | Version 3 | Version 2 | Version 1 | Total rise |
|---|---|---|---|---|---|
| ≥1024 | `calc(var(--slide-gap) * 1.5)` = 3rem | 0 | 1 step | 2 steps | 6rem |
| 768–1023 | `var(--slide-gap)` = 1.25–2rem | 0 | 1 step | 2 steps | 2.5–4rem |
| ≤767 | none — equal stack, `gap: var(--slide-gap)` | 0 | 0 | 0 | 0 |

**Reasoning.** A `.stop` at desktop runs roughly 18–20rem tall (padding `clamp(1.3rem,2vw,1.8rem)`
doubled, plus the number, a `clamp(1.05rem,1.4vw,1.25rem)` title and a three-line body). A 3rem step
is about a sixth of that — unmistakably deliberate, while the deepest card still overlaps the highest
across most of its height, so the three read as one row rather than a broken one. Total section
growth of 6rem sits inside `--act-pad`'s own 4–8rem, so nothing below shifts perceptibly. Tablet
steps down to one gap because the columns are narrower and the cards taller, so the same rise would
start to separate them.

**These are derived, not measured in a browser.** The lock is explicit that the gate review replaces
the figure; I confirm the rendered result at Gate 3 and adjust there if the climb does not read.

---

## Dictionary delta

**184 → 158.** 57 removed, **26** added (Q1 removes the six `_cat` keys), 30-odd edited. Every planned
deletion was verified present and every addition verified non-clashing.

| Section | Removed | Added |
|---|---|---|
| §01 | `act1_scan1`, `act1_scan2` | `act1_lede`, `act1_g{1-4}_{cat,l,r}`, `act1_foot` (14) |
| §02 | `act2_s4_{n,t,x}` | — |
| §03 | `gantt_expand`, `gantt_collapse`, `gantt_show`, `gantt_f_days`, `gantt_f_seq`, `gantt_seq_text`, `gantt_caption`, `gantt_caption_body`, `gantt_badge_principal`, `sch_e10_t`, `sch_e10_m` (11) | — |
| §05 | `dash_pick1`, `dash_pick2`, `dash_m4`, `dash_m4_n`, `dash_m5`, `dash2_foot` (6) | `act4_lede` |
| §06 | `act5_intro`, `act5_pick1`, `act5_pick2`, `act5_sequel`, `act5_m_sequel`, all `act5_h{1,2,3}_*` and `act5_m{1,2,3}_*` (35) | `act5_lede`, `act5_r1_{t,b1-b4}`, `act5_r2_{t,b1-b4}` (11) |

**`gantt_noscript` is kept** — the accessibility fallback, explicitly not part of the chrome being
removed. **`dash_m2` is kept**, and there is no separate `dash2_m2` key: the multi-page slot reuses
the shared `dash_m2` label, so in the paired layout **one row carries two suppressed value slots**.
Both slots render label-only — never a placeholder, a zero or a guess. Deleting either would make
B4's i18n clause unsatisfiable.

---

## Commits and gates

The server is already running and is reused. Every gate ends with the literal line
`Waiting for: APPROVED GATE N`, and nothing past it begins until that exact phrase arrives.

| Gate | Commit(s) | Message |
|---|---|---|
| **1** | 1–2 | `style(brief01): flatten every card to the base hover` · `chore(assets): remove the reflection figures and their treatment` |
| **2** | 3 | `feat(brief01): rebuild the problem as a sourced grid, and relocate the role strip` |
| **3** | 4 | `feat(brief01): three version cards on a stepped layout` |
| **4** | 5 | `feat(brief01): name the schedule by phase and retire its chrome` |
| **5** | 6–7 | `feat(brief01): label the architecture cards by category` · `feat(brief01): pair both builds per metric in the dashboard` |
| **6** | 8 | `feat(brief01): consolidate the reflection to two cards` |
| **7** | — | verification only, no commit |
| — | 9 | `docs(handoff): archive the iteration plan and completion report` — after Gate 7 |

Zero AI attribution in any message, the branch, the PR title or body, any file header or any
dictionary comment. Sole author and committer `jdsaire`.

### Gate 1 — global presentation (task 2)
N1: every card inherits `border-color: var(--color-brand-purple)` and nothing else. N2: delete the
whole `@supports (transform-style:preserve-3d)` wrapper — `perspective`, `transform-style`, both
transitions and both transforms — leaving no empty block. N3 per Q2 above.
**Review:** `/work/portfolio-evolution/` — hover a card in Act 04, then Act 06, both themes.

### Gate 2 — §00 and §01 (task 3)
§00: `hero_title`, `hero_deck`, `hero_rv_txt` rewritten; `kw5` → `Design Systems`. The role strip
**moves** from §01 into the hero between the keyword tags and The Short Version — DOM position only,
`act1_role1-3` keep their names. §01 is **replaced**: `act1_scan1/2` deleted with no replacement, and
a new verdict, lede, four-row context/implication grid with uppercase purple category labels, and
`act1_foot` authored from the lock. N5: two columns collapsing to one at 767px.
**I verify §6.2's seven prohibitions are absent before committing** — no employer or sector named, no
AI-destroyed-jobs claim, no degrees-stopped-mattering claim, no seniors-vs-juniors claim, no hit rate,
nothing about prior employment beyond dates, no aggrieved register. §01 counted and reported exactly.
**Review:** `#act1`, both themes and at 767px.

### Gate 3 — §02 (task 4)
Four stops become three versions; `act2_s4_*` deleted; "Stop" becomes "Version". Offsets as
calculated above. **No `vh`, `svh`, `dvh` or section `min-height`** — if the climb cannot be made to
read without one I stop and report rather than introduce it.
**Review:** `#act2` at desktop, tablet and mobile.

### Gate 4 — §03 (task 5)
Copy per §8.1. Eleven chrome keys deleted, `gantt_noscript` kept. Header `Repository` → `Phase`;
bands become `01 Single Page`, `02 Repo Hygiene`, `03 Multi Page`; band 02's printed window shortens
to 04 Jul; the `sch_e10` row is deleted; five Wave rows cluster into `Multi-page strategy runs`
(12–25 Jul, 38 commits); six `S*` rows renamed per the lock's table. **The invariant is re-verified
after the change: 38 + 65 = 103, or I stop.** N6: epics collapsed by default, days axis and
gap-preserving layout permanently on, filter rail deleted. R4: all 22 (i) buttons, their notes and the
principal-supplied badge deleted, with **no hover tooltip replacing them**. The sequence overlay is
deleted **together with `gantt_seq_text`** — shipping the arrows without that sentence would re-assert
a causal claim the record cannot support.
**Before deleting the notes I verify the summary column carries what they carried**, per the guardrail.
**Review:** `#sched`, plus a full keyboard pass.

### Gate 5 — §04 and §05 (task 6)
§04: verdict and lede rewritten, six titles numbered `1)`–`6)`, filter rail deleted, category labels
per Q1. `act3_c4_rv_txt1` **verified byte-identical against `origin/main`** before committing;
`act3_ev_*` stays hidden.
§05: tablist deleted, dashboard rebuilt as paired values per metric with an em dash where a metric
exists for one build only; `dash_tab3` → `Insights`; `dash_m4`, `dash_m4_n`, `dash_m5` deleted;
**both dictionary-key slots kept and value-suppressed**. All nine R8 strings move to the 71-day
window. `dash2_foot` merges into `dash_foot` as one line **still naming all three repositories**.
**Review:** `#act3` then `#act4`, both themes.

### Gate 6 — §06 (task 7)
Six cards to two. Filter, all three house cards including House of sticks, all three multi-page cards
and both sequel lines deleted. `act5_intro` **deleted and `act5_lede` authored** — a key rename with
the element moved onto the shared lede class. Two cards and eight phase-tagged bullets from the lock;
the `01 / 02 / 03` marks stay, because they are what keeps both builds on this surface for B4.
`.house__tag` retires here with its last user. No orphaned figure reference remains.
**Review:** `#act5`, both themes.

### Gate 7 — verification (task 8)
All eight sections counted **by script** against their v1.1 ceilings, using the bucketing established
above. Links re-counted and reported **N/233**, with the delta accounted for — three figure references
leave with the SVGs, so 230 is expected. Full keyboard pass with visible focus and no trap. Contrast
**computed, not assumed**, in both themes for every new colour, specifically §01's category labels and
§04's card labels as new purple-on-dark surfaces. The Work dropdown re-checked opaque on all four
brief pages, both themes, scrolled and unscrolled — the previous run fixed it and I confirm no
regression. Zero AI attribution; `designops.es.json` byte-identical to `eda6bb4`; exactly three files
deleted; nothing entering `assets/` above 500 KB. Dictionary delta reported against 184.

### Task 9 — archive and PR, only after `APPROVED GATE 7`
N7: correct §7 of `s10a-portfolio-evolution-completion-report.md`, which asserts a pull request that
was never opened — that statement only, leaving the rest of that run's record intact. Commit this plan
as `docs/v4/cc-plans/Plan-S10A-Iteration.md` and write
`docs/v4/cc-completion-reports/s10a-iteration-completion-report.md`, recording **which phrase released
which gate and any gate re-presented after corrections**, every deviation with its reason, before and
after link counts, per-section counts against ceilings, the dictionary delta, the four auto-merge
criteria with evidence, and what stays open for S9 and S10-B. Both folder READMEs gain a row.
Then open the PR against `main` and **print its URL in the report and in my final message**.
**Do not merge.**

---

## Files touched

`work/portfolio-evolution/index.html` (markup, inline CSS, inline JS, the Gantt `DATA` object) ·
`work/portfolio-evolution/i18n/designops.en.json` · deletion of
`assets/img/reflection/{straw,sticks,bricks}.svg` ·
`docs/v4/cc-completion-reports/s10a-portfolio-evolution-completion-report.md` (§7 only) ·
`docs/v4/cc-plans/Plan-S10A-Iteration.md` and its README ·
`docs/v4/cc-completion-reports/s10a-iteration-completion-report.md` and its README.

**Untouched:** `about/`, the ladder, any badge, any Main organism, `paths.js`, `navchrome.js`,
`i18n.js`, `designops.es.json`, local `main`, and every other brief page.

---

## Stop conditions I will honour mid-run

Proceeding past a gate without its exact phrase is the first one. Beyond that: a string the lock does
not cover; a section over its ceiling; a band-03 total that does not sum to 103; a viewport-relative
height; deleting or filling either dictionary-key row; a hover tooltip replacing the (i) buttons; the
sequence overlay shipping without its sentence; any deletion beyond the three named files; any
touch of local `main`; and merging the pull request. A correction at a gate is applied and the gate is
re-presented — never treated as an approval.
