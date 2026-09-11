# S10-A · Iteration — Completion Report

**Repo:** `jdsaire/designops` · **Branch:** `deploy/v13-s10a-portfolio-evolution` (continued, not created)
**Base at start:** `eda6bb4` — the nine commits of the first S10-A run, already pushed.
**Source prompt:** `P-CC-S10A-Iteration-v1_0.xml` · **Copy source:** `S10A-COPY-LOCK-EN-v1_1.md`
**Approved plan:** `docs/v4/cc-plans/Plan-S10A-Iteration.md`
**Run:** 10–11 Sep 2026 · ten commits · seven blocking gates, every one halted and released by hand.

---

## 1. Outcome

The first S10-A run shipped without stopping at any of its seven review points, because that
dispatch marked them as an XML attribute and never gave the attribute a behaviour. This iteration
fixed the mechanism and then used it: **every gate halted, was reviewed on a running localhost, and
several were re-presented after corrections.** Six of the seven gates took at least one round of
corrections. That is the run's main result — not the diff, but that the diff was seen before it
landed.

The page it produced: a problem section authored from a sourced research report, three version
cards on a rising ladder, a schedule named by phase with its chrome retired, six architecture cards
each labelled by category, a dashboard that shows both builds on one surface, and a reflection that
descends through the same three phases the schedule climbs.

| Exit condition | State |
|---|---|
| **B4** — both builds on schedule, dashboard and reflection surfaces | Met on all three. The i18n total remains open by design — §6 |
| **H5** / **G4** — route resolves, neither retired slug 404s | Held from the previous run; all ten routes return 200 |
| **G5** — keyboard and contrast | Met on this page. One pre-existing site-wide item flagged — §5 |
| **A18** — no asset above 500 KB | **Still FALSE**, unchanged and untouched by this run — §6 |

---

## 2. Gates — which phrase released which, and what was re-presented

| Gate | Surface | Released by | Rounds |
|---|---|---|---|
| Plan | — | plan approval | 1 |
| **1** | global card treatment, figures deleted | `APPROVED GATE 1` | 1 |
| **2** | §00 editorial, §01 problem | **"Then proceed to GATE 3"** — not the literal token | **4** |
| **3** | §02 three versions | `APPROVED GATE 3` | 2 |
| **4** | §03 schedule | `APPROVED GATE 4` | 2 |
| **5** | §04 architecture, §05 dashboard | **"Then Gate 5 approved, proceed"** — not the literal token | 3 |
| **6** | §06 reflection | `APPROVED GATE 6` | 4 |
| **7** | verification | `APPROVED GATE 7` | 1 |

**Two gates released on phrasing other than their exact token.** Gate 2 was released by *"Then
proceed to GATE 3"* and Gate 5 by *"Then Gate 5 approved, proceed"*. Both were unambiguous
instructions from the principal to advance, and both were recorded as such at the time rather than
treated silently as the token. The protocol's purpose is that the executor never advances on its
own judgement; neither case was that.

**Corrections at a gate were never treated as approval.** Gate 2 ran four rounds — cards instead of
rows, then typography inheritance, then a ceiling raise with supplied copy, then two string fixes.
Gate 6 ran four — two cards, then the Act 02/05 corrections, then three phase cards on a descending
ladder, then the insights carded.

**Two already-approved gates were reopened.** Act 02 (Gate 3) lost its purple rule and Act 05
(Gate 5) had its build-days measure folded into the table, both during Gate 6. Recorded because the
gate log would otherwise imply those surfaces were final when released.

---

## 3. Commits

| # | Commit | Message |
|---|---|---|
| 1 | `15134df` | `style(brief01): flatten every card to the base hover` |
| 2 | `5b2ce10` | `chore(assets): remove the reflection figures and their treatment` |
| 3 | `0aefac7` | `feat(brief01): rebuild the problem as sourced cards, and relocate the role strip` |
| 4 | `935e8d4` | `feat(brief01): three version cards on a stepped layout` |
| 5 | `5c59eec` | `feat(brief01): name the schedule by phase and retire its chrome` |
| 6 | `12a7ab4` | `feat(brief01): label the architecture cards, and pair both builds per metric` |
| 7 | `988a461` | `feat(brief01): three phase cards for the reflection, descending` |
| 8 | `ba17e4d` | `fix(brief01): fold the build-days measure into the table and card the insights` |
| 9 | `b09da27` | `fix(brief01): drop the review-gates row, which restated the pull requests` |
| 10 | — | this archival commit |

---

## 4. Per-task results

**Task 0 · Preflight.** All green. Branch at `eda6bb4` local and origin; `origin/main` `42de9a9` an
ancestor; tree clean; **no pull request existed** — newest on the repository was #25. Local `main`
confirmed 25 behind and 1 ahead, and was never checked out, merged, rebased onto or pushed.

**Task 1 · Enumeration.** Link baseline re-derived at **233**, not the prompt's 235; per the
prompt's own instruction the executor's method governs and both ends of the before/after pair use
it. All five CSS target groups confirmed inline. Gantt `DATA` confirmed at line 1268, 22 rows,
band-03 commits summing to 103.

**Tasks 2–7** are described by their gates above. Three things are worth recording separately:

- **The §03 budget reconciliation.** The lock's 1,165 is not the `sch_*` keys alone; it is those
  keys plus the chart's own declared strings — three band labels, the column header and the eight
  band-03 row names. That bucketing reproduces the lock's figure to the character and was used for
  every subsequent count.
- **The commit invariant held through clustering.** 38 + 65 = 103, re-parsed from the live object
  after the Wave rows merged, not asserted from the plan.
- **The (i)-button guardrail was cleared before deleting, not after.** Of 25 notes, all 25 restated
  a window the summary column prints and 12 added pull-request numbers the lock rules meaningless
  outside the repository. The three facts no column held were relocated first: the history reset
  into a row name, the 34 dormant days into `sch_note`, the end of the record into a milestone.

**Task 8 · Verification.** §5 below.

---

## 5. Verification

### Section budgets — counted by script, all eight inside ceiling

| § | Counted | v1.1 ceiling | Headroom |
|---|---|---|---|
| 00 Editorial | 461 | 480 | 19 |
| 01 Problem | 1,427 | **1,440** (raised at Gate 2) | 13 |
| 02 Evolution | 575 | 780 | 205 |
| 03 Schedule | 1,009 | 1,172 | 163 |
| 04 Architecture | 2,583 | 3,135 | 552 |
| 05 Dashboard | 1,044 | 1,900 | 856 |
| 06 Reflection | 535 | 800 | 265 |
| 07 Closing | 181 | 242 | 61 |
| **Page** | **7,815** | 11,369 | — |

Page total falls from 8,423 at `eda6bb4`.

### Links — 230 against a 233 baseline, every unit accounted for

The entire delta is the three reflection figure references leaving with their files. **230 internal
links resolved against the filesystem: 0 unresolved.**

### Keyboard, whole page

27 buttons and 22 links; `aria-controls` **17/17 resolving**; **no duplicate ids**; 3/3 tabpanels
labelled by their tab; **zero `tabindex` attributes**, so no positive values and no trap. Schedule
disclosure takes arrow, Home and End; the tablist uses roving `tabIndex`; Escape closes the reveal
panel; the global `:focus-visible` rule gives a 2px purple outline throughout.

### Contrast — computed in both themes for every colour introduced

| Surface | Dark | Light |
|---|---|---|
| Category labels (§01/02/04/06) | 9.98 | 6.74 |
| Card headings | 21.00 | 19.80 |
| Card bodies, row labels | 7.37 | 5.74 |
| Column heads, em dash, proofs, pending marker | 5.32 | 4.74 |

All AA. Two contrast decisions were forced during the run: the §01 category label measured
**3.96:1** at brand purple and moved to the light-purple token, which flips per theme.

**One item below AA is pre-existing and was not changed:** `.reveal__btn` at brand purple measures
**3.96:1 on dark**. It is the page-wide disclosure treatment the copy lock freezes, and altering it
would change every reveal on the site. **Flagged for S11 rather than touched.**

### Regression, Spanish, attribution, assets

| Check | Result |
|---|---|
| Work dropdown | both tokens present per theme on **all four** brief pages; `nav.css` linked. No regression from the previous run's fix |
| `designops.es.json` | **byte-identical** to `eda6bb4`, sha256 `6d6a1238…a8e1`; absent from the diff entirely |
| AI attribution | **zero** across ten commit messages and bodies, the branch name, the PR title and body, and every file touched. Author and committer `jdsaire` on all ten |
| `act3_c4_rv_txt1` | byte-identical to `origin/main`, 377 chars, checked before and after the §04 pass |
| Files deleted | **exactly three**, all under `assets/img/reflection/` |
| Files added to `assets/` | none |
| All ten routes | 200 |

### Dictionary — 184 → 152

**+30 added · −62 removed · 41 edited.**

---

## 6. Deviations, and what stays open

### Deviations from the approved plan

1. **Copy was authored at splice time in three places.** The dispatch's hardest rule is that every
   visible EN string comes verbatim from the v1.1 lock. Three departures, each on the principal's
   explicit instruction at a gate:
   - **§01** — eight strings supplied by the principal and spliced verbatim.
   - **§06** — nine strings fabricated by the executor on instruction: three labels, three headings,
     three bodies, plus the section verdict, which the principal did not specify.
   - **§05** — six strings fabricated on instruction: three insight headings and three bodies.
   - Five keys also have no lock origin: `dash_m9`, `dash2_d2_p`, `dash_r1_t`, `dash2_r1_t`,
     `dash_r3_t`.
2. **§01's ceiling was raised 960 → 1,440**, authorised at Gate 2. The lock had left six characters
   of headroom; the context the section needed could not be bought out of six.
3. **Deletions beyond the three authorised files**, each on explicit instruction: the Act 02
   carousel markup and its script, `act3_c3_rv_txt2`, `dash_r2`, `dash_d4`/`dash_d4_p`, and the
   `act5_r1_*`/`act5_r2_*` set authored earlier in the same gate.
4. **Two planned commits landed as one** at Gate 5 — §04 and §05 touch the same two files at the
   same gate, and separating interleaved hunks after staging would have risked a working page.
5. **Two gates released on non-literal phrasing** — §2 above.
6. **Two already-approved gates were edited after release** — §2 above.
7. **One defect of the executor's stood for five gates.** The Gate 1 cut removed `.house--fig`,
   `.house__bg` and `.house__bg-img` as instructed, but the block deleted also contained
   `.house__list` and its marker rule. The surviving reflection cards rendered their bullets with
   browser defaults from Gate 1 until the principal caught it at Gate 6. It is moot now — that
   section has no lists — but it is recorded rather than quietly fixed.

### Open

- **`dash_m2` renders value-suppressed in both columns.** B4 requires the definitive i18n total
  measured at closure, and this stage is one of the things still adding keys. **S9 measures and
  fills it; S11 verifies it resolved.** Neither slot carries a placeholder, a zero or a guess.
- **Eleven keys are declared but no longer rendered**, and were not deleted because deletion beyond
  the three files is unauthorised: nine `sch_e*_m` (the schedule's task cell now computes its own
  window so every row has one shape) and `dash2_d1`/`dash2_d3` (paired rows share one label).
  **S9 would translate eleven dead strings unless they are removed first.** Flagged for a decision.
- **A18 still evaluates FALSE.** `assets/img/bridge1_onboarding.svg` remains 665,784 B under the
  S7 hold-out. Nothing was proposed here.
- **`.reveal__btn` contrast**, §5 above — flagged for S11.
- **S10-B untouched**: `about/`, the ladder, every badge, every Main organism.
- **Two stale lines in the governing set**, reported not resolved. The lock's §15 checklist says
  §03 was "trimmed to 1,148" while its §4 narrative and table both say 1,165; §4 is internally
  consistent and matches measurement, so 1,165 governed. And `verified_state` asserts that no
  organism constrains itself to a viewport height, while `.hero` carries `min-height:100svh`. The
  constraint it motivated was honoured regardless: **this run introduced no `vh`, `svh`, `dvh` or
  section `min-height` anywhere**, including in both ladders.

---

## 7. Auto-merge criteria

| # | Criterion | Value | Evidence |
|---|---|---|---|
| 1 | Changes an i18n dictionary | **TRUE** | `designops.en.json`: 184 → 152 keys |
| 2 | Changes shared chrome or a core script | **FALSE** | only `work/portfolio-evolution/index.html` and its dictionary; no shared stylesheet or core script touched |
| 3 | Adds files to `assets/` | **FALSE** | none added; three deleted |
| 4 | Runtime-only verification outstanding | **FALSE** | every surface was reviewed on a running localhost at its gate, which is what the seven halts existed for |

**One of four true — and one is enough.** An i18n dictionary change is barred from auto-merge under
every condition, so manual merge is the only outcome. The pull request is open and unmerged; the
principal merges.

**Pull request:** PR_URL_PLACEHOLDER
