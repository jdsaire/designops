# S10-B — the `about/` journey · completion report

**Branch:** `deploy/v15-s10b-about-journey`, cut from `origin/main` `8f238a5` · **PR #28**, open and unmerged
**Ran:** 15–16 September 2026 · Plan Mode, then five gates
**Authority:** `AMENDMENT-F11-JourneyRendering-v1_0.md` (signed 15-SEP-2026) and `SPEC-AboutJourney-v1_0.md` (approved 15-SEP-2026), from `BRIEF-CC-S10B-v1_0.md`

---

## 1. Commits, in order

| # | SHA | Message |
|---:|---|---|
| 1 | `24f0085` | feat(about): rebuild the evolution list as the journey sequence |
| 2 | `cb460d8` | feat(about): add the eleven credential items to the journey sequence |
| 3 | `2d0b222` | feat(i18n): name the eight institution marks with about-scoped keys |
| 4 | `303eeef` | style(about): lay out the journey sequence in the site's own tokens |
| 5 | `708feb1` | fix(about): keep the institution marks visible on the light theme |
| 6 | `b999271` | feat(about): one merged body per item, and the rail's reading position |
| 7 | `68ba591` | style(about): sit the rail's progress fill on the rail |
| 8 | `9f69b89` | feat(about): category filters and a sort control on the sequence |
| 9 | `b92266c` | feat(i18n): the journey's control strings |
| 10 | `9c001c6` | feat(about): fix the sequence at oldest to newest and retire the sort toggle |
| 11 | `0f90410` | chore(assets): the eleven credential marks at delivery dimensions |
| 12 | `3b87ca1` | style(about): the credential marks fill their own box |
| 13 | `9b3a8ef` | fix(about): give the IBM badge its top margin back |
| 14 | `bb84440` | feat(about): size the journey's marks to read, and mark the Build items |
| 15 | `cc6e85c` | style(about): lock the Formation and Work marks to one height |
| 16 | `aa11e8f` | docs(parking-lot): append the three queued lines |
| 17 | `b1b167f` | fix(about): hold the outbound link's transition under reduced motion |
| 18 | `2dae280` | feat(about): apply the EN copy pass and the G5 mark and disclosure edits |
| 19 | `bc03e87` | style(about): frame each institution mark as the principal set it |
| 20 | `e73be38` | style(about): the marks as framed in round two, one square badge each |
| 21 | `ff611cf` | style(about): rework the ESAN frame and widen three marks by half |
| 22 | *(this commit)* | docs: archive the S10-B plan and completion report |

**Splits and merges, flagged.** Four commits carry more than one item: `b999271` (the disclosure rewrite and the reading position are one module — splitting would land a half-written file), `0f90410` (the marks, their plate rules and their keys are meaningless apart), `bb84440` (mark sizing and the Build marks are one markup pass over one file) and `2dae280` (four principal-directed items that interleave in three files). Every other commit is one item.

## 2. Outcome

`about/`'s eight-milestone EVOLUTION accordion is now one chronological sequence of **25 items** — 14 entries and 11 credential items — inside the same `<ol class="timeline">` organism, between `#track-record` and the CV section. Items sort on a per-class key (Formation and Work on start date, Build and Credential on completion), carried in `data-sort` with the section-4.1 ordinal as tiebreak so no date is invented for display. Each item shows its class word, period, title, subtitle and mark while collapsed, and opens one merged body behind one control, one open at a time, with the nested second-level reveal retired. A rail tracks the reading position, filling to the item nearest a line at 38% of the viewport, recomputed on scroll, resize and focus, with the terminus forced current at document end. Five category filters reorder and hide the same nodes in place with a live count and a stated empty result. Eleven credentials sit at their own issue dates, ten linked to their own credential page and Beta Gamma Sigma unlinked. Eight institution marks, three platform marks and eleven credential marks render from measured crops of files that were never re-rendered or recoloured.

**The invariant held both ways.** Mechanically: the existing organism was extended, never duplicated — one list, 25 nodes, zero duplicates at any point, and Main's ticker, which shares the eight logo files, is untouched. On content: every claim traces to `SOURCE-AboutNarrative-v1_1.md` §5 as amended by F11, and no claim was authored beyond the principal's own copy pass.

## 3. Results against the prompt's success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | Every gate halted, released only on its phrase | PASS — see §4 |
| 2 | One sequence of 25 items in the §4.1 order, in place | PASS — 25 `<li>`, order verified ascending by sort key at 390/768/1280 |
| 3 | Class legible from the item; brand palette only | PASS — word label per item; no new hue; `--cl/--ct/--cw/--ch` crops only |
| 4 | Per-class sort keys; period never contradicts position | PASS — keys re-derived when the exchange-term months arrived |
| 5 | One body, collapsed, one open at a time, truthful state | PASS — open ≤1 and `aria-expanded="true"` = open count across 6 runs |
| 6 | Filters, live count, in-place reorder, 0 duplicates, empty state | PASS — Formation 5 / Work 4 / Build 5 / Credential 11 / All 25; DOM always 25 |
| 7 | Native scroll; no scroll-snap | PASS — computed `scroll-snap-type` none on every element |
| 8 | Eleven credentials, each once, no grid or block | PASS |
| 9 | Ten resolving links; BGS unlinked | PARTIAL — links PASS (verified by content); **BGS no longer states its limit, see §6** |
| 10 | No route to the six repos; no ShopEase, ladder or backend prose | PASS — 0 hits on the served page |
| 11 | No Full-Stack completion fraction | PASS — 0 hits |
| 12 | Eight marks, about-scoped names, ticker untouched | PASS — 9 references / 8 files; 0 `ticker_*` keys; Main unchanged |
| 13 | No asset over A18's ceiling | PASS — largest 143,856 B |
| 14 | AA in both themes for every new surface | PASS — dark 7.33–20.38, light 5.74–19.80 |
| 15 | `prefers-reduced-motion` honoured | PASS — 0s on panel, node, fill, chevron, chip, link and marks |
| 16 | Full keyboard path with visible focus | PASS — 30 stops, 0 without a ring; open items' links reachable |
| 17 | Organism extended, not duplicated | PASS — one list |
| 18 | Bytes reported gross and net; every figure sourced | PASS — §5; **budget exceeded on raw, see §6** |
| 19 | Three parking-lot lines landed | PASS — `docs/parking-lot.md`, lines 86–88 |
| 20 | Sole author, zero AI attribution, PR open and unmerged | PASS — 0 in metadata; the only matches in added lines are the three Academy credential names in copy, which `BRIEF-CC-S10B` §9 permits |

## 4. Gates

| Gate | Released by | Notes |
|---|---|---|
| G1 · Structure | `APPROVED GATE G1` | Released with two deferrals recorded: possibly hiding the logos, and purple-shade categories |
| G2 · Disclosure and reading position | `APPROVED GATE G2` | Clean release |
| G3 · Controls | `APPROVED GATE G3` | **Released with its final correction** — the sort control removed first |
| G4 · Credentials and assets | `APPROVED GATE G4` | Re-presented three times: badge boundaries, IBM's top margin, logo sizing and the Build marks, then the locked height |
| G5 · Measured close | `APPROVED GATE G5` | Re-presented twice: the EN copy pass and disclosure edits, then two rounds of mark framing on a design canvas |

## 5. Measurements

**Contrast** (dark / light): title 20.38 / 19.80 · body, subtitle, period, class label, count, idle chip, empty 7.33 / 5.74 · link 9.68 / 6.74 · pressed chip 19.80 / 17.68. Focus ring 2px solid `#A100FF`, 3px offset, on every stop.

**Document height, all collapsed:** 4,513 px at 390 (the spec's prototype reference was 4,684) · 5,114 px at 1280.

**Component bytes, net added:** `about/index.html` +32,775 · `evolution.css` +10,252 · `evolution.js` +4,373 = **47,400 B raw / 7,570 B gzip**, against `SPEC-AboutJourney` §5's ≤30,000 raw / ≤10,000 gzip. Gzip passes; raw does not — see §6.

**Dictionary:** `en.json` 161 → 285 keys (**+124**), +7,903 B raw. `es.json` untouched; **124 ES keys owed at S9C**.

**Bound key names**, for the copy gate and S9C: `about_jr_class_{formation,work,build,credential}` · `about_jr_filter_{all,formation,work,build,credential}` · `about_jr_filter_group_label` · `about_jr_count` (`{n}`/`{total}`) · `about_jr_empty` · `about_jr_link_credential` · per item `about_jr_<stem>_{period,title,meta,body}` over the 25 stems `esan_deg, hunt, centrum, uvic, maas, esan_lec, bgs, utec, hec, ibm, limafly, lap, gpm, mck, gai, gux, single, tv, msfe, gpy, c101, ccow, ccod, accredita, apex` (the ten linked credentials carry no `_body`) · `about_jr_mark_{esan,centrum,uvic,um,hunt,utec,hec,lap,figma,github}_alt` · `about_jr_cred_<stem>_alt` for the eleven credentials.

**Assets:** `assets/img/badges/` — 11 files, 569,736 B, largest `microsoft-front.png` 143,856 B. `assets/img/logos/` gains `github-mark.svg` 968 B, `figma-mark.svg` 786 B, `hec-montreal-square.svg` 3,375 B. The eight shared logo files are byte-identical to `8f238a5`.

**Credential links, verified by content, not by status code.** HTTP 200 proves nothing here: a fabricated Credly UUID and a fabricated Academy id both return 200. All seven Credly pages name "Juan Diego Saire" and the exact badge name; all three Academy pages render "Presented to Juan Diego" with the right course, while a fabricated id renders "couldn't be verified". Build links: five checked, all 200, and a fabricated GitHub slug returns 404, so that check does discriminate.

**Issue dates** are the principal's own account, sourced by hand from his Credly profile (ruling 22) — never measured by this run.

## 6. Authorized deviations

1. **The sort control was removed** (G3). `AMENDMENT-F11` §F11-f's **C2-c′′** requires one toggling both directions. **That signed condition is now false.**
2. **Beta Gamma Sigma's verification line was dropped** (G5). Criterion **19′′′** and `SPEC-Badges` §5.1's rule 2′ require the item to state that verification is a letter held privately with no public verification page. **Both are now false.**
3. **Three new marks entered `assets/img/logos/`** — GitHub, Figma and HEC Montréal's square file. `AMENDMENT-F9` §F9-b's "Stays out" fences new institution and employer marks behind a written admission; these are platform marks and an institution's own replacement file, so the clause does not name them, but the change is of that class.
4. **The uniform credential plate was retired** (G4), against `SPEC-AboutJourney` §4 and `SPEC-Badges` §3.1(b), which chose it as the remedy for a mixed set. Each mark now fills its own box, files trimmed to their content, nothing recoloured.
5. **The raw byte budget is exceeded**: 47,400 B against 30,000. The transfer figure passes at 7,570 B against 10,000. No frozen substance was trimmed to fit, and **no ruling was given on which figure governs**.
6. **The empty state is force-tested.** No category is empty, so it cannot occur naturally.
7. **Four commits carry more than one item**, each with its reason in §1.

## 7. Decisions resolved autonomously

- **C2-b′ on resizing the marks:** reuse the eight files unchanged. Main's ticker renders them at up to 235×176 CSS px (470 device px at 2×), so an in-place resize would soften Main, and a resized copy would be a new institution asset. Every crop is done in CSS over the untouched file.
- **Light-theme visibility** follows `shared/ticker.css`'s existing invert for the same files; HEC's black letterforms take the inverse of that, as GitHub's near-black mark does.
- **Sort keys pad by direction** — start keys to a period's opening, completion keys to its close — so the signed §4.1 order reproduces without inventing a date. The ordinal breaks ties.
- **ESAN's frame was reworked from the file** after it rendered clipped: the emblem's own bounding box measured x169–359, y293–481, and the frame is a square centred on it with 12% padding.
- **Dynamic strings** (count, empty state) are dictionary-backed and re-render on `i18n:changed`, rather than being bound with `data-i18n`, which would overwrite them with a stale template.
- **The organism's rules live in `pages/about/evolution.css`**, scoped to `#evolution`; the shared `designops-variant.css`, which Main, capabilities and contact also link, was not touched.

## 8. Open items carried forward

1. **An amendment is owed** covering the four conditions above — C2-c′′, 19′′′ and rule 2′, §F9-b's "Stays out", and the retired plate — before the closure audit. None of them can be settled in conversation under `SCOPE-FREEZE` §6.
2. **The raw byte budget needs a ruling**: accept the gzip figure as governing, or open a scoped pass at markup whitespace and CSS.
3. **124 ES keys owed at S9C.** `es.json` is untouched, so the journey renders its EN fallback when ES is selected — expected, not a defect.
4. **The copy gate** was folded into this run as the G5 copy pass; wording beyond it is settled whenever the principal chooses.
5. **H2 / F6-l** — three scan lines for Main's `#about` — carried forward by the principal's ruling at authoring time; Main's organism is still heading + CTA.
6. **C2-b′'s Innova half** is still false on Main: `10__innova-bw.png` remains in the ticker. Out of this run's scope.
7. **A18 remains false on `about/`**: `bridge1_onboarding.svg` at 665,784 B, disposal route A9-e assigned by F5 and never executed.
8. **Two deferred visual ideas**: possibly hiding the institution logos entirely, and purple shades per category. Both were offered and left as they are.
9. **A third idea to scope**: showing the year the reader is at, against the rail, as a visibility-of-system-status cue. Recorded, unscoped.
10. **Orphaned keys for S9's dead-key sweep**: the 30 EN / 22 ES `evo_m*` keys, and the ten credential `_body` keys removed at G5.
11. **`737d7f6`** — local `main`'s unpushed 10C/10D parking-lot lines — is still not on `origin`. This run branched from `origin/main` and never touched local `main`.
12. **Dead `.about-card*` CSS** in `pages/about/evolution.css`, including a `scroll-snap-type` declaration, renders nowhere and was left alone.

## 9. Figures and their sources

Every figure above was measured in this run by headless browser at 390/768/1280 in both themes, by `git` against `8f238a5`, or by reading the files on disk — except the credential issue dates, which are the principal's own account (ruling 22), and `SPEC-AboutJourney` §5's 4,684 px prototype reference, which is quoted from that document. No figure is carried forward from an earlier report.

**Pull request:** https://github.com/jdsaire/designops/pull/28 — open, unmerged, auto-merge never enabled.
