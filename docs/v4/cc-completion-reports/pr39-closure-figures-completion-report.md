# Completion report — PR #39 · Closure figures

**Branch:** `deploy/v26-pr39-closure-figures`, from `6261415` · **Pull request:** #39, manual merge only
**Plan:** [Plan-PR39-ClosureFigures.md](../cc-plans/Plan-PR39-ClosureFigures.md)

## 1. Commits

In order, on `deploy/v26-pr39-closure-figures`:

- `64edb50` — "fix(brief02): Act 04 reveal labels align left when they wrap"
- `04990a4` — "fix(briefs): reveal labels align left on Briefs 01, 03 and 04"
- `f1840ca` — "fix(nav): the open menu keeps its purple close and is named \"Close menu\""
- `1a69c9e` — "fix(brief02): Act 02 drops its arrows; the row scrolls with snap and a peek"
- `455196a` — "feat(brief04): Act 04's numbered cards light in reading order from 768"
- `077a1c9` — "feat(brief04): the multi-page column shows its figures, measured at PR #38's merge"
- (this commit) — "docs: archive the PR #39 plan and completion report"

- **One commit per item.** G1 is two commits: the defect on Brief 02, then the same rule on the other three briefs, kept as a separate, droppable commit.

## 2. Outcome

- **Centring (G1):** at the smallest breakpoint, Brief 02's Act 04 labels read flush left in English as in Spanish. The cause: the English labels wrap, and a `<button>` centres wrapped text by default; the Spanish fit one line. The same rule now sets `text-align:left` on all four briefs' reveal labels.
- **Menu × (G2):** the purple close never gives way to the plain ×. The cause: a language swap reflows the page under the open menu and moves the scroll position (Brief 01: 238 px); past 120 px the bar read it as a downward scroll and slid away, uncovering the overlay's own ×. The bar now stays while the menu is open. While open, the button is named "Close menu" / "Cerrar menú" in the reader's language.
- **Act 02 (G3):** Brief 02's pillars have no arrows. Below 1024 the row scrolls with snap; the next card peeks 26 px on phones and the third 43 px on tablets; from 1024 three columns. The two English-only arrow names are gone and the row's name is keyed (`act2_aria`).
- **Motion (G4):** Brief 04 Act 04's numbered cards light in reading order from 768, where the set fits the screen. The inventory showed Briefs 01 and 04 already carry the same patterns as Brief 03 wherever their markup has a sequence; Brief 03's phone motion comes from its vertical relays, which PR #40's mobile schedule brings to Briefs 01, 02 and 04.
- **Figures (G5):** Brief 04's multi-page column shows 561 commits, 21 pull requests, 45 days, 33 active build-days, 64 organisms and 990 dictionary keys; 12.5 commits a day, 3.3 PRs a week, 26.7 commits a review gate, each rate with its formula line. Counted at `6261415` from 28 Aug 2026 with the single-page column's rule. Under the dashboard, the single-page method note returns beside the cut-off line: "Multi-page figures measured on 12 Oct 2026, at the merge of PR #38."

## 3. Results against the success criteria

1. **Gates:** every gate halted and released only on its exact phrase: Plan, G1, G2, G3, G4 (map, pick, then build), G5, G6.
2. **Centring:** sweep of 7 pages × 320/390/768 × EN/ES × Chrome/WebKit: 2 EN-only splits on the base, 0 on the tip. Brief 04's Spanish dashboard tabs wrap but are centred in both languages by design.
3. **Menu:** grid of 7 pages × 320/390 × warm cache × EN/ES start × mid-page × 2 engines: 8/56 runs showed the plain × on the base (every Brief 01 cell), 0/56 on the fix; on the tip, 160 more runs (cold and warm, top and mid-page, Briefs 01–03 and Main) 0 bad. Accessible name correct in 16/16 checks through open, swap, swap back and close.
4. **Act 02:** 20/20 cells (5 widths × EN/ES × 2 engines): 0 controls, snap, keyboard scroll, peek, three columns from 1024, keyed name. Hidden text at 390 on Brief 02: 6 → 0.
5. **Motion:** census 7 pages × 390/1440 × 2 engines: only Brief 04 at 1440 (and 768, 1024) changed, +4 events. Final frame equals reduced motion: 148/148 component frames at 390 and 1440, and 0 px for the cards at 390/768/1024/1440 in both engines.
6. **Figures:** nine numbers, no "Measured at closure", in EN and ES at every width and theme; each value equals its recorded command at `6261415` (records: `closing/PR39-run/gates/G5/figures.json`). The method reproduces WC-Q11's confirmed figures at `0b94217` exactly.
7. **Regression on the tip:** matrix 84/84 with zeros; parity 0, missing 0, shadow 0, fallbacks 0; contrast 292 failures, all pre-existing, 0 new; hidden text 0 on all 7 pages at 390 and 1440; layout shift 0.0000; outlines 0; menu layout 84 runs 0 fails; resize 0 fails; first-visit cue 0 failures.
8. **Attribution:** sole author and committer jdsaire across 6 commits; no trailer.

## 4. Authorized deviations

- **Menu grid:** the full 224-run grid was cut short at my request; the 56-run grid before and after, plus 160 runs on the tip, replace it.
- **Act 02 tablet peek:** added at G3; removing the arrows would otherwise have left tablets with no sign of a third card.
- **G1 preventive commit:** the label rule applied to Briefs 01, 03 and 04 although none wraps today.

## 5. Decisions resolved autonomously

- The open button takes its name through `aria-labelledby` on the overlay's close, whose label every language engine already keeps translated, so a swap never leaves a stale name and no key was added.
- The card pass uses an opt-in attribute (`data-deco-run`, with a minimum width) and plays only where the whole set fits the viewport, so a pass never lights a card off screen.
- `dash_pending` and its CSS were removed once no cell used them.

## 6. Retired and added keys

- **Retired, deleted from both languages with no reference left:** `dash_pending` (Brief 04).
- **Added (local):** `act2_aria` (Brief 02); `dash2_d1_p`, `dash2_d2_p`, `dash2_d3_p`, `dash_cutoff` (Brief 04).
- **Retired, never keyed:** the static labels "Previous stop" and "Next stop" (Brief 02).

## 7. Open items carried forward

- **Decoration spec v1.4 (Cowork):** the proposals in `closing/PR39-run/SPEC-AMENDMENT-PROPOSALS-PR39-v1_0.md` — the Act 02 arrow lines, the Brief 04 card pass (D40, §6, §11), and Brief 02's longest one-shot at 390, which hovers around 1.5 s (1,498–1,533 ms) and predates this PR.
- **EVIDENCE (Cowork):** one proposed line for the multi-page figures in `closing/PR39-run/EVIDENCE-AMENDMENT-PROPOSALS-PR39-v1_0.md`.
- **KEYS v1_3 → next:** the five added keys and `dash_pending`'s retirement.
- **PR #40:** its mobile schedule's relays carry Brief 03's motion to Briefs 01, 02 and 04; its Brief 04 dashboard synthesis runs on these final figures.
- **PR #41 (hygiene):** the overlay's plain × is now never visible; Brief 03 carries dead arrow CSS.
- **Backlog WC-Q45:** closed (the method note is back).

## 8. Relay

- **Landed:** 6 commits on `deploy/v26-pr39-closure-figures`, plus this archive. Four PR #38 precedent fixes and Brief 04's closure figures.
- **Open:** the manual merge of PR #39.
- **Next station:** Cowork, the post-deploy sync.
- **Do there first:** decoration spec v1.4 and EVIDENCE from the run's proposals; KEYS for the new keys.
- **Then:** PR #40 (mobile organisms, About filters, read time), then PR #41 (hygiene).
- **Records:** `out/active/PRE-MAX/closing/PR39-run/`.
