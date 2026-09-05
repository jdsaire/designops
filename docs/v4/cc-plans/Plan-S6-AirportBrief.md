# Plan — S6 · Airport Brief

*Iteration 2, as approved. Iteration 1 planned the page on the AccreditaPass chassis; it was
superseded at the first localhost gate. What was executed after this approval, and where it
diverged, is recorded in the completion report.*

**Repo** `jdsaire/designops` · clone `repos/designops-s6` · branch `deploy/v10-s6-airport-brief` (commit 1 = `424a593`)
Supersedes the commit-1 build. Commits 2–4 are unchanged and still pending.

---

## Context

Localhost review returned six findings. One of them is a defect I introduced; three are executable now; two need copy that does not exist.

**Finding #1 is a bug, and it silently caused most of finding #3.** I put the reveal-on-scroll class `.io` on the whole evidence container. Measured: **10,218 bytes, 939 words, 3 images, 1 iframe — 5× larger than any other `.io` block on the page** (next largest: 1,931 B). The chassis observer fires at `threshold:0.18`, a ratio of intersecting area to the *element's own* area, so a block that tall can never reach it on a laptop viewport. It stayed at `opacity:0`.

The embed, all three stills and the entire 28-block walkthrough **rendered invisible**. That is the "huge empty space" between the two eyebrows, and it is why Chapter 01 appeared to carry no visual evidence. The evidence was on the page the whole time.

The same `threshold:0.18` observer exists in the replacement chassis, so `.io` sizing discipline is a rule from here on, not a one-off fix.

**Finding #6 is the enabling move.** `work/designops-system/index.html` (1,067 lines vs AccreditaPass's 819) carries the component library this page actually needs, and AccreditaPass does not: a calendar schedule organism, a tabbed metrics dashboard, a horizontal numbered timeline, a proposal-vs-shipped contrast block, a role strip, and a richer evidence block. Chassis is structure, not copy — swapping it changes zero visible strings.

---

## What governs, and what I will not do

The copy lock is the only source of visible strings. Per your ruling: **build everything that renders locked copy, and hand over a written list for a copy round** rather than authoring the gap.

Three requests cannot be met inside the lock, and are listed at the end as the copy round's input:

- **Extra figures/tables for Chapters 02 and 03.** Lock §3 closes the asset set at three JPEGs; D1 closed at three stills on 02 Sep. Any new image needs alt text and a caption, and neither exists. Source material is plentiful (`ch2-visual-compartir.pdf` 18.9 MB, `ch2-feasibility-model.xlsx`, 20 Ch3 artefacts) — the blocker is copy, not assets. A18's 500 KB cap also applies to whatever gets exported.
- **Dashboard Levels 2 and 3.** Level 3 "The read" is three authored sentences. Level 2 "Derived" computes new ratios, and a new ratio is a new claim (§10).
- **Per-card reveal disclosures**, which is where the new chassis gets most of its density. The lock has exactly one `[REVEAL]` row and one `[FULL]` row. Fourteen cards opening onto nothing is worse than fourteen cards that do not open.

---

## The re-splice — amends commit 1

### 1 · Fix the visibility defect (highest severity)

`.io` comes off the evidence container and goes onto its children, each small enough to cross the threshold: the block eyebrow + intro, the embed, the stills grid, and each walkthrough sub-block. Verification adds a standing check: **no `.io` element on the page may exceed ~2,000 bytes of markup**, measured, reported as a table.

### 2 · Chassis swap — a merge, not a straight copy

Base becomes `work/designops-system/index.html`. It does **not** carry six rule groups the locked copy depends on, all of which are carried forward verbatim from `work/accreditapass/index.html`:

`.badges` / `.independence` (both standing notices) · `.pull` · `.synthesis` · `.closing` · `.ctarow`

Carried forward from my commit-1 work: the `data-i18n-html` and `data-i18n-title` engine branches (the new chassis has neither), `BODY_SLUG = "airport"`, and the `.embed` / `.stills` / `.still` / `.walkthrough` rules. `.evidence` is **dropped** in favour of the chassis's own `.evidence` / `.evidence__label` / `.evidence__links`.

The new chassis brings its own working JS for the dashboard tabs, the timeline scroller and the `data-count` counters — none of it is written here.

### 3 · Eyebrow hierarchy (finding #2)

`§6.3 How it was designed…` and `§8.2 A year later…` are sub-sections of their chapters, not peers. They lose the chapter-level `.section__eyebrow` treatment and take a new subordinate variant — smaller, no bar, indented to the text column — and their `<h3 class="verdict">` drops one step in the type scale. Chapter eyebrows keep the bar; nothing else does.

### 4 · The 2024–2025 schedule band (finding #4)

Built with the chassis's `.sched` / `.srow` / `.sbar` organism, **percentage-driven** via `--l` and `--w`, on a 24-month axis (Jan 2024 → Dec 2025):

| Row | Locked source | `--l` | `--w` |
|---|---|---|---|
| Chapter 01 · LimaFly | `act1_meta` — *Feb 2024 – Oct 2024* | 4.17 | 37.5 |
| Chapter 02 · The lounges case | `act2_meta` — *Q2 2025* | 62.5 | 12.5 |
| Chapter 03 · TUUA Transfer | `act3_meta` — *May 2025 – Oct 2025* | 66.67 | 25.0 |

Row titles are the locked chapter eyebrows; row meta lines are the locked meta strings verbatim. Axis labels are the four year/half markers — identifiers, not sentences.

**It lives inside the Prologue, not in a section of its own.** §5's Scan 1/2/3 already state these three periods in prose; the band is the same fact rendered visually, directly beneath them. A section of its own would need an eyebrow, a verdict and a lede — three sentences the lock does not have. **The `.sched__legend` is omitted** for the same reason.

*Flagged:* `docs/v3/organisms/gantt-organism.spec.md` bans calendar dates as a standing rule. That rule governs the **roadmap** organism, where dates imply unexecuted commitments. This is `.sched`, a different organism, already shipping calendar months and spans on `work/designops-system/`, rendering a completed historical record. Noted in the completion report rather than assumed away.

### 5 · Chapter 01 — the nine itinerary steps as a timeline

The walkthrough's nine numbered steps move from a plain `<ol>` into the chassis's `.timeline` / `.stop` scroller: `stop__n` takes the step number, `stop__t` the bold step name, `stop__x` the description. The source already carries all three parts separately (`1. **Preparativos** — plan before leaving for the airport.`), so this is a structural mapping, not a split. **Text content stays byte-identical**; the other five walkthrough blocks stay as prose. Nothing is abridged, re-authored or placed behind a reveal.

### 6 · Chapter 02 — the dashboard, Level 1 only, inside the chapter

One `.dash` instance **below the case-exercise notice, inside Chapter 02**, so the badge stays attached to the numbers it governs. Level 1 "Measured" only; the Level 2 and Level 3 tabs are not rendered until copy exists.

Eight `.dcell`s, every number locked at §7.1 Scan 2 and Card 1. The labels are derived noun phrases — **approving this plan approves these eight labels**, and all eight go in the completion report's derivations table:

| `dcell__n` | `dcell__l` (derived) | Locked source |
|---|---|---|
| 27.44M | Passengers projected, 2025 | §7.1 Scan 2 |
| 14.27M | Relevant passengers | §7.1 Scan 2 |
| 2.14M | Lounge users | §7.1 Scan 2 |
| 0.713M | Paying per use | §7.1 Scan 2 |
| 58% | Conversion rate | §7.1 Scan 2 |
| $4.04M | Annual abandonment cost | §7.1 Scan 2 |
| $1.44M | Attributable to usability | §7.1 Scan 2 |
| $2.60M | Attributable to technical failure | §7.1 Scan 2 |

The two least mechanical are the last pair — the lock's phrasing is *"$1.44M of it attributable to usability and $2.6M to technical failure"*. Say the word and they become `Usability share` / `Technical share`, or the pair comes out entirely.

### 7 · Chapter 03 — role strip

`.rolestrip` renders the locked `act3_meta` split at its existing `·` separators. §8.2 becomes a subordinate block per item 3. **No `.contrast` organism**: its two-face compare needs each face's text authored separately, and §8.2's scans are single sentences that would have to be cut in half to fit.

### 8 · Dictionary

`work/airport/i18n/airport.en.json` stays **EN only**. Net change is small: no string is added or removed, and existing keys are re-bound to new components. Expected ~138 keys plus the eight derived dashboard labels and the schedule axis identifiers.

---

## Commits 2, 3 and 4 — unchanged

Commit 2 (`fix(nav)`, 9 files, en.json + 14 `data-nav-work` + the Yape continuity card + the inline fallbacks), commit 3 (`chore(work)`, delete both retired routes), the PR, and commit 4 (`docs(handoff)`, `docs/v4/`) are exactly as approved. Order is still create → relink → delete. **Merge stays manual under the freeze §5 D3 carve-out.**

Internal link baseline is unchanged: **246 links across 9 shipping pages, 244 resolving**; the two that do not are `work/airport/` (closed by commit 1) and `work/front-end-evolution/` (S10).

---

## Gate 1, re-run

Same URL. Beyond the original five checks:

1. **Every `.io` block is under the size ceiling** — reported as a measured table, largest first.
2. The embed, the three stills and all six walkthrough blocks are **visible on first scroll**, no interaction needed.
3. The schedule band renders and its three bars land in the right years.
4. The dashboard renders under Chapter 02's notice, with the notice visible in the same viewport.
5. Sub-section eyebrows are visibly subordinate to chapter eyebrows.
6. Frame-blocked re-read still passes A18.

---

## The copy round's input — what S6 cannot author

Hand this to the S6 copy session; it is the complete list.

**A · Chapter 02 and 03 figures.** For each exported asset: a caption and an alt string, plus a ruling on what may be shown from `ch2-visual-compartir.pdf` / `ch2-visual-no-compartir.pdf` (the filenames themselves assert a sharing boundary) and from the Ch3 evaluation set. Assets must land under 500 KB each (A18).

**B · Dashboard Levels 2 and 3.** Level 2 needs each derived figure *and* its own provenance line, and a ruling on whether deriving a ratio from case-exercise figures is a new claim under §10. Level 3 needs three sentences — `dash_r1`, `dash_r2`, `dash_r3` — plus a `dash_foot` method line.

**C · Whether Chapters 01 and 03 get dashboards at all.** §10/R5 forbids any CES, CSAT, SUS or NPS score, so Chapter 01 has no figures to show. Chapter 02 having one and Chapter 01 having none reads as a gap, which A10/P9 forbids acknowledging on the page. This is a copy-record decision, not a splice decision.

**D · Card reveal copy.** Fourteen cards across the four chapters could each carry a `[REVEAL]` body. The lock has one. If the chapters are to read less compressed, this is the highest-value copy to author.

**E · Schedule band legend**, if the three bars are judged to need one.

---

## Verification, unchanged plus two

Everything from the approved plan — A8 byte-diff, H1 identity across three places, E6 identity, zero `forthcoming`, zero ES, exactly one iframe, sub-500 KB, zero AI attribution, N/N links — plus:

- **No `.io` element exceeds the size ceiling.** This is the regression test for the defect that produced finding #1.
- **The walkthrough still carries no `hidden`, `display:none`, `details`, `summary` or conditional rendering**, including inside the new `.timeline` scroller, which must not gate any step behind its prev/next controls.
