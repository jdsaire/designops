# Completion report — W2A · i18n split, brief standardisation, About corrections

**Branch:** `deploy/v18-w2a-i18n-split-mobile-chassis`, from `993fcd9` (the merge of PR #30)
**Pull request:** [#31](https://github.com/jdsaire/designops/pull/31), open and unmerged when this report was written. Manual merge only.
**Dispatch:** `BRIEF-CC-W2A-v1_0.md` → `P-CC-W2A-v1_0.xml`, both in `out/active/PRE-MAX/site-w2a/` outside this repository

---

## 1. Commits

The listed commits (53 when this report was written, plus this archive commit) are all authored and committed by jdsaire.

- `bf7040e` refactor(i18n): give Main, About and Contact their own dictionaries
- `a160280` refactor(i18n): merge shared chrome with each page's own dictionary
- `5e937a1` refactor(i18n): keep only shared chrome in the site-wide dictionaries
- `933b9c0` chore(nav): remove the hidden Capabilities entry from the navigation
- `16e6bc6` chore(capabilities): delete the hidden Capabilities page
- `5d55cab` fix(about): align the hero and the single-page build window with POSITIONING-v1_2 (EN)
- `0a68b2d` fix(about): show the bilingual engine's key count as 700+
- `6594e9b` fix(about): set the head to the locked title line and spine
- `6da602e` feat(brief01): lay out the AccreditaPass brief on the brief mobile chassis
- `ec50b43` fix(brief02): conform the Trust & Verify brief to the brief mobile chassis
- `d51ae54` fix(brief01): keep the scroll cue clear of the hero badges on phones
- `829fa69` feat(brief01): open on the story and move the build links under the short version
- `c023735` feat(brief01): tell the problem and the simulated pass in cards and a ladder
- `a819640` feat(brief01): show the five-week schedule as collapsed epics
- `bbc2bce` feat(brief01): cut the build to four cards and read the evidence as a before-and-after dashboard
- `80902ea` feat(brief01): close on claim, limit and next, then similar work
- `4e50f81` feat(brief01): lead with the match and move the notices into disclosure notes
- `ce90d59` feat(brief01): frame the problem as four failures a journalist lives through
- `615a1dd` feat(brief01): tell the UX simulation as three runs and the question they answered
- `bee3d65` feat(brief01): show the schedule as seven named phases
- `ffe2e2c` feat(brief01): present the architecture as four decisions and repeat the build links
- `053a0a1` feat(brief01): read the test figures in three tabs, first version against final
- `7e08743` feat(brief01): close on what the build proves, what it lacks and where it leads
- `8f73313` fix(brief01): measure the read time and give the lede's footnote marker a full tap target
- `f78aacf` chore(brief02): cut English lines that carry no claim, figure or decision
- `135d55d` feat(brief01): standardise the hero chassis and motion on Brief 04's
- `fb6af71` feat(brief02): standardise the hero chassis and motion on Brief 04's
- `675d432` feat(brief03): standardise the hero chassis and motion on Brief 04's
- `e011b40` feat(brief04): standardise the hero chassis and motion on Brief 04's
- `1a39935` fix(brief01): drop the brief number from the eyebrow
- `de13778` feat(brief02): regenerate the hero story, roles and links
- `2302821` feat(brief03): regenerate the hero story, roles and links
- `3a88938` feat(brief04): regenerate the hero story, roles and links
- `117afc4` feat(brief01): move notices to footnotes before the close
- `cb1c0c1` feat(brief02): move notices to footnotes before the close
- `5cba00c` feat(brief03): move notices to footnotes before the close
- `b8c79ec` feat(brief02): repeat the build links under the architecture
- `b7cc369` feat(brief04): repeat the build links under the architecture
- `8c297a2` feat(brief01): close on next steps, contact and two related briefs
- `79dd8d3` feat(brief02): close on next steps, contact and two related briefs
- `ed9ffb8` feat(brief03): close on next steps, contact and two related briefs
- `9381d80` feat(brief04): close on next steps, contact and two related briefs
- `a225a25` fix(briefs): measure the read time of Briefs 02 and 04
- `80aac38` fix(brief01): remove the hero scroll cue
- `13030bf` fix(brief02): remove the hero scroll cue
- `28499dc` fix(brief03): remove the hero scroll cue
- `cb8af9e` fix(brief04): remove the hero scroll cue
- `1cabbb7` fix(brief01): put the build links before the short version
- `8f45475` fix(brief02): put the build links before the short version
- `548e35b` fix(brief04): put the build links before the short version
- `a06813b` fix(brief04): drop the live-site link the reader is already on
- `85286aa` fix(about): align the hero and the single-page build window with POSITIONING-v1_2 (ES)
- `a27a551` fix(about): carry the Gate 4 edits to the track record and the journey (EN, ES)
- The archive commit that adds this report.

## 2. Outcome

**Dictionaries.**
- The shared dictionaries now hold only the 16 chrome keys.
- Main, About and Contact each load their own pair. The engine merges each pair with chrome, and the page value wins.

**Structural invariant: held.**
- Every value that changed files arrived byte-identical.
- The only key removed in the split was `nav_capabilities`, deleted with the Capabilities page.
- The check printed at Gate 1: 236 → 235 unique keys per language, 0 changed or added.

**Capabilities.** The page is deleted, and Main's capability section and carousel are intact.

**About.**
- It carries the POSITIONING-v1_2 corrections in both languages: no "agents", 04 Jul / 71 days, the 700+ stat, and the locked head.
- It also carries the principal's Gate 4 edits.

**Content freeze: held, with the exceptions the rulings name.**
- The principal lifted it at Gate 3B for Brief 01 (W2A-G3-Q1) and at Gate 3 for the brief heroes, notices and closes (W2A-G3-Q2).
- Every string written under those rulings was approved through /ask or annotated by the principal.
- No brief ES file was edited.

**Briefs.**
- All four share one hero, one notice treatment and one close.
- Brief 01 is rebuilt to Brief 04's standard.

## 3. Results against the success criteria

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | Every halt released only on its own phrase | PASS | Plan, Gates 1, 2, 3B, 3 and 4 were each released by their exact phrase. Gate 3B was re-presented once, after the principal's annotations. Gate 3 was re-presented once and released with its final correction. Gate 4 was released with on-disk edits, which were recorded |
| 2 | One PR, URL printed, unmerged, auto-merge never enabled | PASS | PR #31 |
| 3 | Shared pair chrome only; page files at the approved paths; brief loaders unchanged | PASS | 16 chrome keys. 0 loader lines changed across the four briefs |
| 4 | Structural invariant | PASS | Printed at Gate 1 |
| 5 | Zero unresolved keys, EN and ES | PASS for EN on every page, and for ES on Main, About, Contact and Briefs 01 and 03. Amended for the ES view of Briefs 02 and 04 | W2A-G3-Q2 rules an English fallback for the rewritten strings. Final pass: 624 unresolved against a baseline of 342, all on those two ES views |
| 6 | Capabilities gone; nothing links to it; Main's section unchanged | PASS | `/capabilities/` returns 404. Main was pixel-identical at Gate 1 |
| 7 | About shows the §5.1 values and the §5.2 head | PASS | Rendered text: "agents" and "agentes" 0, "6 Jul" 0, "73-day" and "73 días" 0. The ES hero carries the principal's edit (W2A-G4-Q1) |
| 8 | Briefs: zero overflow and clipping at 390/768; rule list; no desktop change | PASS for overflow, clipping and the rule list. Amended for desktop | W2A-G3-Q1 and W2A-G3-Q2 lifted the desktop fence for the redesign and the standardisation |
| 9 | Only deletions reached brief copy; no ES brief file changed | Amended; ES part PASS | Copy authored under W2A-G3-Q1 and Q2 with the principal's approval. 0 brief ES files changed |
| 10 | Zero new console errors | PASS | Final pass: 36 against a baseline of 36, all pre-existing (Brief 03's script error, and the missing brief ES files) |
| 11 | Key totals before and after; ES orphans listed | PASS | §6 and the gate-edits record |
| 12 | Gate-edits record matches every difference | PASS | `COPY-W2A-GATE-EDITS-v1_0.json` |
| 13 | `paths.js` and `navchrome.js` unchanged; `i18n.js` in one commit; no new stylesheet, component or asset | PASS | Only the six page dictionaries are new |
| 14 | Zero AI attribution | PASS | Author and committer on every commit: jdsaire. The PR title and body carry none |
| 15 | One commit per item | PASS, with two flags | `bbc2bce` batches the Build and Evidence acts of Brief 01 because they share one markup region. `a160280` was amended before push to wire the Capabilities entry, so the page kept resolving between commits |
| 16 | Plan and report archived; READMEs updated; link counts reported | PASS | This commit. Internal markdown links under `docs/`: 0 before, 0 after |
| 17 | Six-line relay | Owed after Gate 5 | |

## 4. Authorized deviations

- **W2A-G3-Q1:** Brief 01 was redesigned at every breakpoint, and its English copy was authored for approval. The rights-holder stays unnamed.
- **W2A-G3-Q2:** four-brief standardisation. It supersedes W2-Q4 (no copy on Brief 03) and "Brief 04 receives none".
- **The Spanish view of Briefs 02 and 04:** it shows English for rewritten strings, and 44 orphaned ES keys are listed for dispatch B.
- **Brief 04's repository link:** it was previously hidden, and is now shown at the principal's direction. The live-site link is removed because the reader is already on it.
- **About ES hero:** it follows the principal's edit (W2A-G4-Q1). POSITIONING-v1_2 §1.1 follows at its next bump.
- **One ES spelling fix** on About, "projecto" → "proyecto", by the principal's ruling.

## 5. Decisions resolved autonomously

**Engine and dictionaries**
- Page-file paths follow the brief convention; Main's files sit at `i18n/main.*`.
- `setPage()` is a new export, which keeps `init()` and `swapLang()` untouched.
- New files match `en.json`'s serialisation. `es.json` keeps its missing trailing newline.

**Brief layout**
- Brief 04's mobile rule list has twelve lines, measured at the plan halt.
- Brief 03 had nothing to fix on phone or tablet, so it got no chassis commit.
- New rules are written mobile-first. Content is visible without script: reveal bodies and sections fold or fade only when script runs.
- Hero content starts at the nav height plus `clamp(2.5rem, 6vh, 4.5rem)`.

**Measured figures**
- The Gantt shows seven phases, regrouped from the 206-commit history of `jdsaire/accreditapass`.
- Read times are measured at 230 words a minute, with every panel open.

**Verification**
- Screenshots force images to load and paint before capture. The baseline was re-shot the same way from a detached `origin/main`.

## 6. Open items carried forward

**Key totals, per file (before → after, keys added / removed / changed)**

| File | Before | After | Added | Removed | Changed |
|---|---|---|---|---|---|
| `assets/i18n/en.json` | 236 | 16 | 0 | 220 | 0 |
| `assets/i18n/es.json` | 236 | 16 | 0 | 220 | 0 |
| `i18n/main.en.json` | — | 53 | 53 | 0 | 0 |
| `i18n/main.es.json` | — | 53 | 53 | 0 | 0 |
| `about/i18n/about.en.json` | — | 140 | 140 | 0 | 0 |
| `about/i18n/about.es.json` | — | 140 | 140 | 0 | 0 |
| `contact/i18n/contact.en.json` | — | 28 | 28 | 0 | 0 |
| `contact/i18n/contact.es.json` | — | 28 | 28 | 0 | 0 |
| `work/accreditapass/…en.json` | 103 | 157 | 118 | 64 | 19 |
| `work/yape-trust-verify-brief/…en.json` | 135 | 135 | 24 | 24 | 0 |
| `work/yape-trust-verify-brief/…es.json` | 135 | 135 | 0 | 0 | 0 |
| `work/airport/…en.json` | 152 | 161 | 11 | 2 | 11 |
| `work/portfolio-evolution/…en.json` | 152 | 152 | 22 | 22 | 0 |
| `work/portfolio-evolution/…es.json` | 133 | 133 | 0 | 0 | 0 |

The six page-file rows show additions because the keys *moved* out of the shared pair, byte-identical. EN keys across the site: 842, above the 700+ floor.

**Gate edits recorded** (`out/active/PRE-MAX/site-w2a/COPY-W2A-GATE-EDITS-v1_0.json`)

| Round | Language | Edits |
|---|---|---|
| Gate 3B | EN | 148 |
| Gate 3 | EN | 117 |
| Gate 3 final correction | EN | 7 |
| About on-disk edits, Gate 4 | EN | 4 |
| About on-disk edits, Gate 4 | ES | 11 |

**For dispatch B**
- 44 ES keys orphaned by English rewrites on Briefs 02 and 04, listed in the gate-edits record.
- Brief 04's ES still prints "73 días", "06 jul" and "Setenta y tres" (`designops.es.json` lines 77, 82, 87, 109, 130 and 134). No build-window figure outside About was changed.

**W1 report §6**
- Item 4 (About's head) is closed here.
- Item 6 (the build-window end date) is closed for About. Brief 04's ES remains with dispatch B.

**Other open items**
- Brief 03 reads "1 min read" by ruling, ahead of its hub redesign. Its current page measures 15 minutes.
- The `<title>` and meta description on Briefs 02–04 still carry their old wording.
- Brief 03 still throws its pre-existing script error at line 1230.
- After the merge, GitHub Pages caches for 10 minutes, so a returning visitor may briefly see English fallback text on page keys.
- The backlog lines added during this run are in `out/active/PRE-MAX/PRE-MAX-BACKLOG.md`.
