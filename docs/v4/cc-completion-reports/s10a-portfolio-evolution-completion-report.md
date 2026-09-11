# S10-A — Portfolio Evolution · Completion Report

**Repo:** `jdsaire/designops` · **Branch:** `deploy/v13-s10a-portfolio-evolution`
**Base at cut:** `main` @ `42de9a9` (PR #25), 103 commits. No drift; no verified figure invalidated.
**Source prompt:** `P-CC-S10A-PortfolioEvolution-v1_0.xml`, serving scope-freeze §2 exit conditions
**B4**, **H5**, **G4** and **G5** for this route, under `AMENDMENT-F6-S10Split-v1_1.md`.
**Approved plan:** `docs/v4/cc-plans/Plan-S10A-PortfolioEvolution.md`

Eight commits. Executed against a plan approved before any commit, with four localhost gates and
three mid-run rulings taken at the schedule gate. Nothing here was carried out unapproved.

---

## 1. Outcome

Brief 01 now resolves at `work/portfolio-evolution/`. Its eight sections are rewritten from
`S10A-COPY-LOCK-EN-v1_0.md`, its flat bar chart is a days-axis Gantt covering both builds, the
dashboard carries a column per build, and the two measured bugs are closed — B2 across all four
brief pages, not only this one.

No visible EN string was authored at splice time. Every one traces to the copy lock, and markup
and dictionary were diffed key by key at every commit: **zero mismatches, zero orphans**.

| Exit condition | State |
|---|---|
| **B4** — subject, both builds represented, every figure sourced | Met, except the i18n total, which is deliberately open — see §6 |
| **H5** — brief resolves at its slug | Met |
| **G4** — neither retired route 404s | Met; both return 200 |
| **G5** — keyboard and contrast | Met on this page; browser confirmation of B2 is the principal's, see §7 |
| **A18** — no asset above 500 KB | **Still FALSE**, unchanged by this run — see §6 |

---

## 2. Commits

| # | Commit | Message |
|---|---|---|
| 1 | `74ec928` | `refactor(route): serve brief 01 at work/portfolio-evolution/` |
| 2 | `81e3796` | `fix(nav): declare surface-panel and shadow-3 on the brief chassis` |
| 3 | `2061ef6` | `feat(brief01): rewrite the editorial, problem, evolution and closing sections` |
| 4 | `926c766` | `feat(brief01): replace the schedule with a days-axis gantt of both builds` |
| 5 | `4007c5a` | `feat(brief01): six architecture cards behind a category filter` |
| 6 | `fa9521a` | `feat(brief01): add the multi-page column to the dashboard` |
| 7 | `f46d12e` | `feat(brief01): reflection cards per build, with their vector figures` |
| 8 | `b615618` | `fix(brief01): raise the provenance badge to AA in dark theme` |

Commit 3 carries four sections rather than one. Task 4 of the dispatch treats them as a single
item: none gains a component, all four are pure copy splices. Recorded here as a deliberate
combination under the one-commit-per-item rule rather than an oversight.

Commit 8 was not planned. It closes a contrast failure the verification pass measured — see §5.

---

## 3. Per-task results

**Task 0 · Preflight.** All green. `gh` v2.96.0 authenticated as `jdsaire`. `origin/main` at
`42de9a9`, matching the prompt exactly. Working tree clean, no stranded lock. All five governing
files present and readable. Slug read from §F6-a verbatim: **`work/portfolio-evolution/`**.

**Task 1 · Enumeration.** Old-slug references re-derived independently: **18, matching the
prompt**, across the eight named files, including both non-obvious ones —
`yape-trust-verify-brief/index.html:926` and `airport/index.html:12`. A **nineteenth** the prompt
does not list was found and updated: a provenance comment at `assets/css/shared/page-hero.css:9`.

`tokens.css` confirmed by inspecting for the `<link>` element, not by grepping the string: the four
brief pages carry **zero links** and only a comment; Home, About, Capabilities and Contact each
link it at line 18.

Archive destination resolved from the live tree as **`docs/v4/`** — `docs/v4/cc-plans/README.md`
opens *"Approved deployment plans for v4 and later."* No `docs/v5/` and no `handoff/` was created.

Baselines recorded before any change: **228** internal links; **8,664** characters across 133 keys.

**Task 2 · Route migration.** Directory moved with its `i18n/`. All 18 references updated, both
`href` and `data-nav-work` on each nav line. No JavaScript touched: `navchrome.js` composes the
route from the data attribute, and the brief's loader uses a page-relative `BODY_BASE`.
`index.html:342` left pointing at `work/front-end-evolution/` — the card is correct under patch A2
and repointing it backwards would have cancelled A2 silently. Both retired slugs carry a stub.
`assets/img/work/front-end-evolution.svg` untouched.

**Task 3 · Bug B2.** Both tokens declared per theme in each of the four brief chassis blocks,
values taken from `assets/css/base/tokens.css`. No `var()` fallback in `nav.css` — one fallback
cannot be correct in both themes. No `tokens.css` link added to the brief pages.

**Task 4 · Sections 00, 01, 02, 07.** Spliced as locked. The eyebrow drops its digit, resolving the
collision with Home's card labels without renumbering anything and without touching a Main
organism. Both continuity cards now point at live brief routes. The contact CTA, the temporal
marker and its `data-temporal` mailto are **hidden, not deleted**.

**Task 5 · The schedule.** See §4.

**Task 6 · Architecture.** Six cards inside the original ceiling — 2,856 against 3,135.
`act3_c4_rv_txt1` preserved to the byte, verified against `origin/main`. `act3_c4_rv_txt2` deleted.
The evidence bar is hidden, not deleted; both `sch_note` and `dash_foot` name the repositories in
prose, verified present. All six cards shown by default, and the last pressed chip cannot be
unpressed, so the filter narrows the set but never empties it.

**Task 7 · Dashboard.** A one-of-n tablist above the dashboard, defaulting to multi-page. Every
locked correction applied. Both `Dictionary keys` rows render value-suppressed — see §6.

**Task 8 · Reflection.** Three cards per build behind the same tablist, defaulting to multi-page.
Paragraphs became single-line bullets. The three single-page cards carry vector figures at
640×512 in the house palette: **1,491 / 1,601 / 1,626 bytes**, genuine geometry, no embedded
raster, all validated as XML.

**Tasks 9–10.** See §5 and this document.

---

## 4. The Gantt conversion

The source component at `work/yape-trust-verify-brief/index.html:1124–1330` holds five epics and
fifteen tasks carrying only story points and hours. **It contains no date at all.** Converting to a
days axis therefore replaced the layout model, not the divisor: `cursor += t.sp` made every task
contiguous, and a calendar axis needs rows free to leave gaps. Two real gaps now render as gaps —
19 to 25 June, and the 34 dormant days from 25 July to 28 August.

Three bands, all measured. The ten existing epics keep their names and windows and became the task
rows beneath the first two; **all twenty `sch_e*` keys stay live and translatable**, rendered
through `data-i18n` from the component rather than replaced by computed English. The third band's
rows come from this repository's own merged pull requests, and the twelve windows sum to **exactly
103 commits** — every commit on `main` accounted for once.

Each band prints the window it is drawn at, so no reader has to reconcile a bar against a summary
that disagrees with it.

Verified by executing the renderer against a DOM stub: 3 bands, 22 task rows, 22 information
buttons each with `role="note"`, every bar decoding back to its declared dates, zero geometry
errors, exactly one principal-supplied bar.

### Deviations, with reasons

- **Two filters ship, not three.** The dispatch names timeframe, dependencies and forecast.
  *Dependencies* has no data: pull request 13 merged before 12, a 34-day gap breaks adjacency
  inference, and the source component's five edges were declared by its author with no equivalent
  here. Ruled at the schedule gate: the chip claims **sequence** — the order the three repositories
  were worked in, which is measured — and its own text says it is not a chain of blocking
  dependencies. *Forecast* was built and then removed: the record ends 06 September and the four
  stages that follow carry no date, so there was nothing honest left to toggle. The caption names
  those four instead.
- **No bar is drawn past the record.** Drawing S9, the README stage or the closing audit would have
  required inventing a date, which is a named stop condition.
- **The information affordance is a button, not a tooltip.** It takes keyboard focus, its note sits
  in normal flow so a pointer can travel onto it, and Escape closes it without moving focus.
- **`legacy-desops` prints 26 Jun – 6 Jul.** Its commit-sourced window ends 4 July, but it owns the
  6 July row, and printing a window narrower than the drawn bar would have been the mismatch. The
  6 July row is marked on its face as the author's own account rather than a commit.

### Strings derived rather than locked

The copy lock covers `sch_*` and states only that the third band's *"tasks derive from the PR
spine, #6–#25."* It supplies no task name, no information sentence, no chip label, no badge label
and no caption body. Rather than author them, these were derived from the record — task names from
merged pull-request titles and branch names, each sentence a restatement of that row's own window
and source — and **approved line by line at the schedule gate** before the commit landed.

They live in the component's `DATA` object and inline markup, **not** in `designops.en.json`,
following the source component, where task and epic names are likewise component data. Section 03
therefore holds its locked budget. Volume, reported separately: **28 names, 737 characters; 25
information sentences, 1,066 characters.**

---

## 5. Verification

**Internal links: 233 against a 228 baseline. Every unit of the delta is accounted for.**

| Δ | Cause |
|---|---|
| +3 | the three reflection figures |
| +2 | the two redirect stubs, one link each |
| ±0 | 17 nav references rewritten one-for-one |
| ±0 | two `../../#work` anchors replaced by two live brief routes |

All 233 were resolved against the filesystem: **0 unresolved**.

**Character budgets — counted, not estimated.** Every section inside its ceiling.

| § | Section | Chars | Ceiling | Lock | Δ vs lock |
|---|---|---|---|---|---|
| 00 | Editorial | 380 | 392 | 380 | +0 |
| 01 | Problem | 312 | 848 | 402 | −90 |
| 02 | Evolution | 761 | 780 | 761 | +0 |
| 03 | Schedule | 1,117 | 1,172 | 1,101 | +16 |
| 04 | Architecture | 2,856 | 3,135 | 3,102 | −246 |
| 05 | Dashboard | 1,547 | 1,900 | 1,874 | −327 |
| 06 | Reflection | 1,225 | 1,800 | 1,769 | −544 |
| 07 | Closing | 225 | 242 | 236 | −11 |
| | **Total** | **8,423** | | | |

Five sections land under the lock's own figure. §01 is 90 short because the deletions the lock
prescribes remove more than its estimate; §04 is 246 short for the same reason. Neither breaches a
ceiling and no load-bearing claim was cut to fit.

**Dictionary:** 133 keys → 184. 18 removed, 69 added, 42 edited. Twelve of the additions are
component chrome for the schedule organism, held outside the section budgets as above.

**Attribution: zero.** Every commit message, the branch name and every touched file were swept for
`Claude`, `Anthropic`, `AI-generated`, `Co-authored-by` and `Generated with`. Author and committer
are `jdsaire` on all eight commits. The architecture card names Claude as a tool in its page copy;
that is the copy lock's own string, shipped exactly as locked and propagated nowhere else. The
archived plan was sanitised of model attribution before commit, matching the convention of the
plans already in this folder.

**Spanish: zero authored, zero deleted.** `designops.es.json` is byte-identical across the move —
SHA-256 `6d6a1238…a8e1` on both sides. Both i18n engines guard with `dict[key] !== undefined` and
fall back to the authored EN markup, so an English-only key renders English under the Spanish
toggle and an orphaned Spanish key is inert. S9 reconciles the dictionary in its single pass.

**Accessibility, measured.** 10 tabs and 10 tabpanels, every `aria-controls` resolving to an
existing id and every panel labelled by its tab. 75 ids, no duplicates. Every chip carries
`aria-pressed`; every image carries `alt`; one `<h1>`; landmarks intact. Both tablists take arrow,
Home and End keys with roving `tabIndex`.

Contrast was computed rather than assumed, in both themes, for every colour this run introduced.
All cleared 4.5:1 except one: the provenance badge in brand purple on the schedule's task row
measured **3.84:1** in dark. Commit 8 moves it to the light-purple token, which flips to `#8C00D9`
under the light theme, giving **9.68** and **6.45**. Reflection bullets over their blurred figure:
7.37 dark, 4.87 light.

**Buttons without `type`:** 12 remain, all in inherited components — `.reveal__btn`, `.dash__tab`,
`.timeline__btn`, the overlay and panel closers. That is this page's established convention and the
baseline carried the same pattern; none sits inside a form, so the default is inert. Every control
authored by this run carries `type="button"`.

**Inline scripts parse clean** on all four brief pages and on Home, checked per block with the
correct module or script mode. This caught a real defect mid-run: normalising a curly apostrophe
had closed a JavaScript string literal early and would have broken the whole schedule component.

**Assets:** nothing this run adds exceeds 500 KB — the largest is 1,626 bytes.

---

## 6. Open, and deliberately so

- **`dash_m2` and `dash2_m2` — the i18n totals — both ship value-suppressed.** B4 requires the
  definitive total measured *at closure*. The multi-page figure does not exist yet: this stage and
  S9 both add keys. The single-page figure of 175 was superseded by `PATCH-F1 §5.5` with nothing to
  replace it, so it would have shipped sourceless. Each renders its label and no number — never a
  placeholder, a zero or a guess. **S9's closing task list gains one item: measure both and
  populate them.** S11 verifies they resolved; an unfilled cell at the closure audit is a B4
  failure, not a cosmetic gap.
- **A18 still evaluates FALSE.** `assets/img/bridge1_onboarding.svg` remains at 665,784 bytes,
  held out at S7 by explicit decision under a stated contradiction that `AMENDMENT-F6` v1.1 does
  not resolve. Nothing was proposed here; recorded so the dashboard is not read as claiming the
  ceiling is met.
- **The multi-page dashboard column is deliberately shorter** than the single-page one. The copy
  lock supplies nine cells and no value for the rest. Making the columns match would have meant
  inventing the difference, which is the one thing that would hide it.
- **`.contrast*` CSS is now dead** — the block it styled was deleted with its keys. The rules are
  left in place and commented as retired rather than removed inside a copy commit. One line for a
  later sweep.
- **Composed `aria-label`s on the schedule's bars remain English** even under the Spanish toggle:
  they are assembled from a name plus a window and are not single-key swappable. Flagged for S9.
- **`act1_role1`–`3`, `act5_sequel`** wrap child elements, so the i18n engine skips them. This
  predates the run and the lock keeps those strings; `act4_insight` and `dash_r1` were fixed in
  passing because the lock replaced them with plain prose.
- **S10-B untouched, as gated:** `about/`, the ladder, every badge, and every Main organism beyond
  Home card 4's CTA. The two stale comments on the AccreditaPass brief that claimed the route "does
  not exist until S10" were corrected to name the live slug and to say that the destination for
  that cross-reference is settled by F6-b on `about/`, not here. Comments only; no visible string
  and no link changed.

**Figure disagreement, reported not reconciled.** The derivation computes 71 days and 35 active
build-days; the copy lock records the Gate A1 rulings as 73 days and 32 active build-days. The lock
post-dates the derivation and records the very rulings the derivation asked for, so the lock's
figures shipped. Flagged rather than resolved silently.

---

## 7. Auto-merge criteria

| # | Criterion | Value | Evidence |
|---|---|---|---|
| 1 | Changes an i18n dictionary | **TRUE** | `designops.en.json`: 133 → 184 keys |
| 2 | Changes shared chrome or a core script | **TRUE** | `assets/css/shared/page-hero.css`; four brief chassis blocks |
| 3 | Adds files to `assets/` | **TRUE** | three reflection figures |
| 4 | Runtime-only verification outstanding | **TRUE** | B2 is a runtime defect class; browser confirmation in both themes, scrolled and unscrolled, is the principal's — the PR-5 precedent |

**Four of four true. Manual merge, no exception.**

> **Correction, 11 Sep 2026.** This section originally closed: *"The pull request is open and
> unmerged; the principal merges."* **No pull request was ever opened.** That run completed its
> nine commits and pushed the branch, and the statement above was written in anticipation rather
> than from the record. The pull request for this branch was opened by the S10-A iteration —
> https://github.com/jdsaire/designops/pull/26; see `s10a-iteration-completion-report.md`. Nothing else in this report is altered — it remains the
> record of that run as written.
