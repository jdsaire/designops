# Completion report — PR #35 · Main closing build

**Branch:** `deploy/v22-main-closing`, from `1cdecb1` (origin/main after PR #34); origin/main unchanged through the run, so no merge was needed
**Pull request:** #35, opened after `APPROVED PR35 G5`. Manual merge only. Auto-merge off.
**Dispatch:** `BRIEF-CC-PR35-Main-v1_1.md` → `P-CC-PR35-Main-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository
**Plan:** `docs/v4/cc-plans/Plan-PR35-MainClosing.md` (the plan as approved, followed by rulings PR35-Q1 to PR35-Q58)

---

## 1. Commits

The 44 commits on the branch, from 6 to 7 Oct 2026, were written under the GitHub account jdsaire (`88201583+jdsaire@users.noreply.github.com`) as author and committer, display name "Juan Diego S.". The archive commit follows them. History was never rewritten.

- `87963e0` feat(site): self-host Archivo as the site-wide primary typeface
- `af653d3` feat(main): set the new hero heading
- `e9cc8eb` feat(main): add the value proposition
- `ba0b037` feat(main): add the hero call to see the work
- `2a081bd` feat(main): play the hero entrance and type line 2
- `ed03f33` feat(main): add the positioning bridge after Work
- `b0e061c` feat(main): rewrite the BUILD card around the business case
- `0eec02d` fix(main): retitle card 04 and address the Spanish reader as usted
- `ace07cb` feat(site): rewrite Main and About head meta
- `d10c884` feat(about): rewrite the About hero heading
- `aef74b3` fix(site): keep the bridges' phone layout on tablets
- `153b695` feat(contact): put the footer's LinkedIn and GitHub links under the heading
- `dcb5c98` fix(site): match markup fallbacks to their English values
- `c562387` feat(site): bring the footer back on every page
- `481f68a` feat(site): link the site's code from the footer
- `14cc395` fix(about): put each disclosure chevron right after its heading
- `7175c11` fix(site): keep the reading position when a page reloads in Spanish
- `c1e90aa` style(site): set the closing statement in sentence case
- `5dbeb9d` feat(site): add the decoration timing tokens; still the nav under reduced motion
- `4b32245` feat(site): draw every eyebrow bar once as its section arrives
- `3f77903` feat(site): show the brief figures at once; About's figures count over themselves
- `4097d44` feat(site): keep text in place from the first frame
- `ddcd077` feat(work): pass a purple edge through each brief's ordered steps
- `0bf1918` feat(work): grow the roadmap bars and draw their dependencies
- `d326ba9` fix(work): keep the timelines' layout under reduced motion
- `cc12012` fix(about): draw the disclosure chevron as a chevron in Safari
- `1306381` perf(work): run Brief 03's canvases only while they are on screen
- `5cf7ae3` feat(main): hold a ticker lane still while it is hovered
- `064ac26` docs(organisms): add the decoration system spec and its live specimen
- `a2f4f33` feat(main): rewrite the bridge heading and the three capability pillars
- `795aa42` feat(about): rewrite the About hero heading and its head meta
- `60289ad` fix(site): correct the copy flagged by the release scan
- `1d26fe7` fix(site): fit the fallback font to each weight so headings keep their lines
- `9359536` docs: archive the PR #35 plan and completion report
- `a742328` feat(main): say websites and apps in the value proposition
- `c219d24` feat(main): rest the hero's second line on one word
- `dbc9e00` fix(main): hold the hero gradient still
- `fbcc131` fix(main): show the hero at once, without an entrance
- `e9ead99` fix(about): show the track-record figures as they are
- `0716d8d` docs(organisms): retire the hero's motion and About's count from the decoration spec
- `b8a30ef` feat(about): offer the CV from the hero
- `7adc3fb` feat(about): invite the reader to talk after the timeline
- `61e4d40` fix(about): name the CV links by file and keep them on one row on phones
- `74f2200` fix(about): match the CV links' fallback to their labels

## 2. Outcome

Main opens on the new positioning, every page renders in Archivo, the footer is back, and a reload keeps the reader's place in Safari.

- **Typeface:** Archivo (normal and italic) self-hosted for all 7 pages, with a metric-matched Arial fallback; first paint loads two files.
- **Main hero:** "DESIGN ATE CODE. / IMPACT PREVAILS." ("DISEÑO DICTA CÓDIGO. / IMPACTO INNEGABLE."), both lines fitted to the full width and still: no typing, entrance or gradient drift (PR35-Q48…Q51); name and title line; the value proposition "I build seamless websites and apps, translating business challenges into tested products using advanced AI." in About's purple highlight; a call to see the work.
- **Positioning bridge after Work:** the portrait with its halo, AVIF and WebP at 600/900/1200, the heading "Judge. Verify. Anticipate. The real work when AI writes the code." and a caption shared with About.
- **Capabilities:** "Validated Builds." · "Scalable Workflows." · "Unified Execution." with JD's bodies; card 04 retitled and its Spanish in usted.
- **About:** the heading "Engineer. MBA. Six years in tech and design. …", its head meta to match, and under it the CV as two download links, "CV (PDF)" and "CV (MD)", in the Contact page's channel row (one row at every width); each disclosure chevron 12–14 px after its title, flipping when the item opens; after the timeline, Main's Contact organism invites the reader to talk, in place of the old CV section.
- **Footer on every page:** "Tested concepts. / Protected budgets." with italic last words and the second line in purple, its bar drawn once; LinkedIn and GitHub (→ jdsaire/designops) from 1024 px; Contact shows the statement and © only, with the two buttons under its heading.
- **Decoration system:** every eyebrow bar draws once; a purple edge passes through the briefs' ordered steps; roadmap bars grow and Brief 02's dependency lines follow; Brief 02's meters fill; every figure on the site is static; text sits in place from the first frame; Brief 03's canvases run only on screen; a ticker lane holds still while hovered. Main's ticker and Brief 03's map are the only moving decorations. Specified in `docs/v3/organisms/decoration-system.spec.md` with a live specimen.
- **Safari reload:** Spanish is applied before the first layout on repeat visits, so the restored position lands on the same lines.

## 3. Results against the success criteria

| # | Criterion | Result on the tip |
|---|---|---|
| 1 | Gates and effort checkpoints released only on their phrases | Plan, G1, G2 (per item), G3, G4a, G4 and G5 released by their phrases; each checkpoint answered by JD (three inside a release message); G5 iterated twice before its release; re-presentations listed in the plan's §3 |
| 2 | Hero in the chosen face, EN/ES, 320–1440, both themes, no orphan | G1 final prototype and G3: 0 orphans in every cell; font applied 28/28 cells |
| 3 | No fallback font when Archivo is available; CLS 0; 5 `--font-primary` | 5 of 5 declarations name Archivo (tokens.css + 4 briefs); CLS 0 on every page with the font cached; with the font held back 600 ms, CLS ≤ 0.0002 on every page at 1440 and 390 (see §4) |
| 4 | CTA → `#work`; bridge after Work, image budget, `shared/bridge.css` | CTA href `#work`; bridge between `#work` and `#capabilities`; largest file 56,672 B (≤ 64 KB), all six 210,197 B (≤ 250 KB) |
| 5 | Footer visible everywhere: sign-off · LinkedIn · GitHub · © | on 7 pages; Contact carries the statement and © only, its two buttons under the heading (PR35-Q33) |
| 6 | Reload keeps the position in Safari; WebKit and Chrome on every Main anchor | Tip suite: 262 of 264 cells at 0 px (7 pages × WebKit and Chrome × EN/ES × 390/1440; Main: 5 anchors + 4 depths; other pages: 4 depths); the two others re-ran clean: Brief 03 Chrome EN 1440 at 80 % 0 px in 6 of 6, Brief 04 at 40 % 0/0/−1 px (sub-pixel). Root cause PR35-Q41; JD's Safari check at G4 |
| 7 | About chevron after the heading, target ≥ 44 px, row clickable | 25 rows, EN and ES, in WebKit: gap 12–14 px at 1440, 768 and 390; toggle 44–64 px tall (49 at 1440); the whole row is the button |
| 8 | Approved motion as approved; reduced motion = final state, same layout | Motion as amended by PR35-Q48…Q51 (hero still, About figures static): 74 of 74 decorated components identical to their reduced-motion frame at 1440 and 390; text hidden or fading while scrolling 0 of 6,600 samples at 1440, 6 of 6,407 at 390 (Brief 02's disabled arrow); 28 smoke cells final, 0 errors; Main's hero runs 0 animations at rest |
| 9 | Matrix 84/84, parity, fallbacks = EN, no new contrast failure | 84/84: 0 errors, 0 overflow, 0 clipped, 0 unresolved, 0 unapplied, 0 missing keys; parity 0; fallbacks equal EN (0 new, 32 resolved); contrast 8,272 checked, 0 new failures |
| 10 | No "MVP", "agents", "full-stack", "Tech Lead", "led" for JD, *tú* | 0 · 0 · 0 · 0 · "led" 2 (LAP Finance, Yape) · *tú* 0. AI product names: none added by this run (see §4) |
| 11 | Zero AI attribution; sole author jdsaire | 44 commits plus this archive: one author and committer identity; 0 attribution lines; branch, PR title and body checked |
| 12 | Pushed only after `APPROVED PR35 G5`; PR unmerged, auto-merge off | see §8 |
| 13 | Plan and report archived under docs/v4 with index lines; link count | indexed in three READMEs; internal markdown links under docs/v4: 0 before, 0 after (the indexes use code spans, as before) |
| 14 | Every deviation listed; ends with the relay | §4 and §9 |

## 4. Authorized deviations

- **Hero copy (PR35-Q10, Q18, Q22):** JD's own hero keys replace the key sheet's; the method (and the name "Claude Code") leaves the hero, so criterion 10's "Claude Code only in `hero_sub`" no longer applies. The AI product names on the site predate this run: About's Claude Academy credentials (C07) and Brief 02's Act 6 tools.
- **Hero motion retired (PR35-Q48…Q51):** the typing loop (PR35-Q19, Q23), its caret and pause button, the entrance (X-4) and the gradient drift are gone; line 2 rests on IMPACT / IMPACTO and fills the width.
- **Footer (PR35-Q31, Q32, Q33, Q40):** new closing copy in Sentence case; Contact's footer is the statement and © only.
- **Ticker kept (PR35-Q28):** a decorative pause at every width, exception X-1 in the decoration spec.
- **Decoration instead of retirement (PR35-Q29, Q30, Q36, Q37):** the motion review became a decoration system with its own spec. About's count-ups (X-3) were kept, then revoked (PR35-Q49): floor rule 3 has no exceptions, and X-1 (ticker) and X-2 (Brief 03's map) are the only registered ones.
- **Tablet bridge (PR35-Q39):** the shared bridge uses its phone layout from 768 to 1023 px.
- **JD's copy at the G4 release (PR35-Q42…Q45):** the bridge heading, the three capability pillars and the About heading as JD wrote them, with "A decade" replaced by the ruled six years; About's meta follows.
- **JD's hero copy at the G5 iteration (PR35-Q47, Q52, Q53):** "websites and apps" replaces "digital products" and "interfaces" for universal accessibility; ES line 1 "DICTA"; EN line 1 kept; Main's og:description follows the hero.
- **About's conversion path (PR35-Q54…Q58):** the CV section after the timeline gives way to Main's Contact organism; the CV moves to the hero as "CV (PDF)" / "CV (MD)" in the shared channel row (`shared/channels.css`, Contact pixel-identical), with placeholder files; About's hero takes 3rem padding at 1024–1279 so the heading and links fit the first screen; Main's Contact rules moved to `shared/section-extras.css` (Main pixel-identical).
- **Typo scan (PR35-Q46):** two ES spaces, two ES "multi-" words and ten EN words set to US spelling across the briefs.
- **Fallback font per weight (found at G5, fixed in `1d26fe7`):** the metric fallback added at G3 was tuned on weight 400 only. Before Archivo arrived, the briefs' 900-weight act verdicts set on one line instead of two, and a reload could restore mid-swap (Brief 02, Chrome, −59 px). Each weight band now has its own fallback face: 149 of 9,308 text elements wrapped differently before, 22 after.
- **Pre-existing fixes in passing:** markup fallbacks matched to EN on Main, About, Brief 01 and Brief 02 (32 resolved); Brief 03's canvas labels moved off Graphik; Contact's CSP opened to self-hosted fonts.

## 5. Decisions resolved autonomously

- The About chevron is painted as a background SVG, because WebKit does not apply a mask to an inline pseudo-element.
- Both i18n engines cache each page's merged dictionary under `jds-i18n:<path>:<lang>`; one identical inline script applies it before the first layout.
- Brief 03's canvas change is recorded as `perf(work)`.
- Main's "One decade of career milestones" stays: the career since May 2015 supports it; the ruled six years apply to tech and design only.

## 6. Open items carried forward

- **CV files (PR35-Q54, Q56):** both downloads are outdated placeholders until the closing PR brings the correct CV per format and language, with per-language links. The MD placeholder is JD's Spanish 31 Aug file, which prints his phone, district and email.
- **Process note:** an interim commit was made while its check reported 8 failures; it was never pushed and was amended into `61e4d40`, whose check is clean.
- **Assessment Gate 0:** `APPROVED GATE 0` was never logged; PR35-Q8 bound §D/§E/§H through the logged rulings.
- **Documents owed by Cowork (PR35-Q45):** POSITIONING v1_5, KEYS-Main-EN-ES v1_1 and SPEC-Copy-Main v1_1 (hero, bridge, capabilities, About heading, About CV links and Contact organism, head meta, footer); the LinkedIn spec and profile still say "industrial engineer with an MBA".
- **EVIDENCE:** the proposals in §7 await JD's decision; `EVIDENCE.json` was not edited.
- **Spanish first visit:** the language swap still shifts the layout once (≤ 0.033); repeat visits are 0.
- **Pre-existing:** the three site-wide 3.96:1 contrast items; Brief 03's Act 00 title wrap below 360 px; the favicon 404.
- **PR #36 (hygiene) and PR #37 (closure figures)**, per PR35-Q4.

## 7. Proposed EVIDENCE lines

Full text in `out/active/PRE-MAX/closing/PR35-run/EVIDENCE-AMENDMENT-PROPOSALS-PR35-v1_0.md`: B25 "scalable" and P06 the AI skill level, both withdrawn at the G5 iteration; B27 "seamless / impecables" (stated); B22 limits for ES "validadas" and "Desarrollos Validados"; Y02 limits for the About heading's six years; B26 "bulletproof / blindados" (stated).

## 8. Archive housekeeping

This report and the plan are indexed in `docs/v4/cc-completion-reports/README.md`, `docs/v4/cc-plans/README.md` and `docs/v4/README.md`. Every working record of this run sits together outside the repository in `out/active/PRE-MAX/closing/PR35-run/`: the gate-edits record, the EVIDENCE proposals, the decoration spec drafts, RESUME, the PR body, both plan files, the harness, the prototypes and the snapshots per gate. The dispatch's inputs stay in `closing/`. None of those records joins the repository: this plan and report carry what a reader of the repo needs, while the prototypes hold full site copies and font binaries, the snapshots show third-party credential logos, and the gate notes and EVIDENCE analysis are internal.

**Pull request URL:** recorded here after `APPROVED PR35 G5`.

## 9. Relay

```
PIPELINE RELAY — PR #35 Main closing closed
Landed:      PR#35 open for manual merge (URL in §8) · 46 commits · 6 gates (Plan, G1–G5; G4 in two parts, G5 iterated twice)
Open:        POSITIONING v1_5 + KEYS-Main-EN-ES v1_1 + SPEC-Copy-Main v1_1 owed (PR35-Q45) · EVIDENCE: B26, B27, Y02/B22 notes (B25, P06 withdrawn) · LinkedIn "industrial engineer" line · CV files per format and language · favicon 404 · Assessment Gate 0 unlogged
Next:        PR #36 — Brief 04 "Measured at closure" figures + the locked CVs in About's hero (PR35-Q60: scopes of #36 and #37 inverted); then PR #37 — repo hygiene
Go to:       COWORK  (new MD spec: sync after PR #35, then BRIEF-CC-PR36; trigger in closing/PR35-run/TRIGGER-CW-Sync-PR35-v1_0.md)
Run first:   /post-deploy-sync in a fresh Cowork session
```
