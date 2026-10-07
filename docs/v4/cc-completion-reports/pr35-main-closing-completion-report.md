# Completion report — PR #35 · Main closing build

**Branch:** `deploy/v22-main-closing`, from `1cdecb1` (origin/main after PR #34); origin/main unchanged through the run, so no merge was needed
**Pull request:** #35, opened after `APPROVED PR35 G5`. Manual merge only. Auto-merge off.
**Dispatch:** `BRIEF-CC-PR35-Main-v1_1.md` → `P-CC-PR35-Main-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository
**Plan:** `docs/v4/cc-plans/Plan-PR35-MainClosing.md` (the plan as approved, followed by rulings PR35-Q1 to PR35-Q46)

---

## 1. Commits

The 33 commits on the branch, from 6 to 7 Oct 2026, were written under the GitHub account jdsaire (`88201583+jdsaire@users.noreply.github.com`) as author and committer, display name "Juan Diego S.". The archive commit follows them. History was never rewritten.

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

## 2. Outcome

Main opens on the new positioning, every page renders in Archivo, the footer is back, and a reload keeps the reader's place in Safari.

- **Typeface:** Archivo (normal and italic) self-hosted for all 7 pages, with a metric-matched Arial fallback; first paint loads two files.
- **Main hero:** "DESIGN ATE CODE." with line 2 typing METHOD / MINDSET / IMPACT in an endless loop with a pause button (which also pauses the gradient); name and title line; the value proposition in About's purple highlight; a call to see the work; entrance B. Under reduced motion the hero is static on its final sentence.
- **Positioning bridge after Work:** the portrait with its halo, AVIF and WebP at 600/900/1200, the heading "Judge. Verify. Anticipate. The real work when AI writes the code." and a caption shared with About.
- **Capabilities:** "Validated Builds." · "Scalable Workflows." · "Unified Execution." with JD's bodies; card 04 retitled and its Spanish in usted.
- **About:** the heading "Engineer. MBA. Six years in tech and design. …", its head meta to match, and each disclosure chevron 12–14 px after its title, flipping when the item opens.
- **Footer on every page:** "Tested concepts. / Protected budgets." with italic last words and the second line in purple, its bar drawn once; LinkedIn and GitHub (→ jdsaire/designops) from 1024 px; Contact shows the statement and © only, with the two buttons under its heading.
- **Decoration system:** every eyebrow bar draws once; a purple edge passes through the briefs' ordered steps; roadmap bars grow and Brief 02's dependency lines follow; Brief 02's meters fill; brief figures are static and About's four figures count over the real ones; text sits in place from the first frame; Brief 03's canvases run only on screen; a ticker lane holds still while hovered. Specified in `docs/v3/organisms/decoration-system.spec.md` with a live specimen.
- **Safari reload:** Spanish is applied before the first layout on repeat visits, so the restored position lands on the same lines.

## 3. Results against the success criteria

| # | Criterion | Result on the tip |
|---|---|---|
| 1 | Gates and effort checkpoints released only on their phrases | Plan, G1, G2 (per item), G3, G4a, G4 released by their phrases; each checkpoint answered by JD (two inside a release message); re-presentations listed in the plan's §3 |
| 2 | Hero in the chosen face, EN/ES, 320–1440, both themes, no orphan | G1 final prototype and G3: 0 orphans in every cell; font applied 28/28 cells |
| 3 | No fallback font when Archivo is available; CLS 0; 5 `--font-primary` | 5 of 5 declarations name Archivo (tokens.css + 4 briefs); CLS 0 on every page with the font cached; with the font held back 600 ms, CLS ≤ 0.0002 on every page at 1440 and 390 (see §4) |
| 4 | CTA → `#work`; bridge after Work, image budget, `shared/bridge.css` | CTA href `#work`; bridge between `#work` and `#capabilities`; largest file 56,672 B (≤ 64 KB), all six 210,197 B (≤ 250 KB) |
| 5 | Footer visible everywhere: sign-off · LinkedIn · GitHub · © | on 7 pages; Contact carries the statement and © only, its two buttons under the heading (PR35-Q33) |
| 6 | Reload keeps the position in Safari; WebKit and Chrome on every Main anchor | 264 of 264 cells at 0 px drift: 7 pages × WebKit and Chrome × EN/ES × 390/1440 (Main: its 5 anchors and 4 depths; other pages: 4 depths); root cause PR35-Q41; JD's Safari check at G4 |
| 7 | About chevron after the heading, target ≥ 44 px, row clickable | 25 rows, EN and ES, in WebKit: gap 12–14 px at 1440, 768 and 390; toggle 44–64 px tall (49 at 1440); the whole row is the button |
| 8 | Approved motion as approved; reduced motion = final state, same layout | 74 of 74 decorated components identical to their reduced-motion frame at 1440 and 390; text hidden or fading while scrolling: 0 of 6,573 samples at 1440, 6 of 6,374 at 390 (Brief 02's disabled arrow); 28 smoke cells (7 pages × WebKit 1440/390, Chrome 768/320) end on the final frame with 0 errors |
| 9 | Matrix 84/84, parity, fallbacks = EN, no new contrast failure | 84/84: 0 errors, 0 overflow, 0 clipped, 0 unresolved, 0 unapplied, 0 missing keys; parity 0; fallbacks equal EN (0 new, 32 resolved); contrast 8,272 checked, 0 new failures |
| 10 | No "MVP", "agents", "full-stack", "Tech Lead", "led" for JD, *tú* | 0 · 0 · 0 · 0 · "led" 2 (LAP Finance, Yape) · *tú* 0. AI product names: none added by this run (see §4) |
| 11 | Zero AI attribution; sole author jdsaire | 33 commits: one author and committer identity; 0 attribution lines; branch, PR title and body checked |
| 12 | Pushed only after `APPROVED PR35 G5`; PR unmerged, auto-merge off | see §8 |
| 13 | Plan and report archived under docs/v4 with index lines; link count | indexed in three READMEs; internal markdown links under docs/v4: 0 before, 0 after (the indexes use code spans, as before) |
| 14 | Every deviation listed; ends with the relay | §4 and §9 |

## 4. Authorized deviations

- **Hero copy (PR35-Q10, Q18, Q22):** JD's own hero keys replace the key sheet's; the method (and the name "Claude Code") leaves the hero, so criterion 10's "Claude Code only in `hero_sub`" no longer applies. The AI product names on the site predate this run: About's Claude Academy credentials (C07) and Brief 02's Act 6 tools.
- **Typing loop (PR35-Q19, Q23):** an endless loop with a pause button instead of the one-pass cycle (PR35-Q14).
- **Footer (PR35-Q31, Q32, Q33, Q40):** new closing copy in Sentence case; Contact's footer is the statement and © only.
- **Ticker kept (PR35-Q28):** a decorative pause at every width, exception X-1 in the decoration spec.
- **Decoration instead of retirement (PR35-Q29, Q30, Q36, Q37):** the motion review became a decoration system with its own spec; About's count-ups kept as exception X-3.
- **Tablet bridge (PR35-Q39):** the shared bridge uses its phone layout from 768 to 1023 px.
- **JD's copy at the G4 release (PR35-Q42…Q45):** the bridge heading, the three capability pillars and the About heading as JD wrote them, with "A decade" replaced by the ruled six years; About's meta follows.
- **Typo scan (PR35-Q46):** two ES spaces, two ES "multi-" words and ten EN words set to US spelling across the briefs.
- **Fallback font per weight (found at G5, fixed in `1d26fe7`):** the metric fallback added at G3 was tuned on weight 400 only. Before Archivo arrived, the briefs' 900-weight act verdicts set on one line instead of two, and a reload could restore mid-swap (Brief 02, Chrome, −59 px). Each weight band now has its own fallback face: 149 of 9,308 text elements wrapped differently before, 22 after.
- **Pre-existing fixes in passing:** markup fallbacks matched to EN on Main, About, Brief 01 and Brief 02 (32 resolved); Brief 03's canvas labels moved off Graphik; Contact's CSP opened to self-hosted fonts.

## 5. Decisions resolved autonomously

- The About chevron is painted as a background SVG, because WebKit does not apply a mask to an inline pseudo-element.
- Both i18n engines cache each page's merged dictionary under `jds-i18n:<path>:<lang>`; one identical inline script applies it before the first layout.
- Brief 03's canvas change is recorded as `perf(work)`.
- Main's "One decade of career milestones" stays: the career since May 2015 supports it; the ruled six years apply to tech and design only.

## 6. Open items carried forward

- **Assessment Gate 0:** `APPROVED GATE 0` was never logged; PR35-Q8 bound §D/§E/§H through the logged rulings.
- **Documents owed by Cowork (PR35-Q45):** POSITIONING v1_5, KEYS-Main-EN-ES v1_1 and SPEC-Copy-Main v1_1 (hero, bridge, capabilities, About heading, head meta, footer); the LinkedIn spec and profile still say "industrial engineer with an MBA".
- **EVIDENCE:** the proposals in §7 await JD's decision; `EVIDENCE.json` was not edited.
- **Spanish first visit:** the language swap still shifts the layout once (≤ 0.033); repeat visits are 0.
- **Pre-existing:** the three site-wide 3.96:1 contrast items; Brief 03's Act 00 title wrap below 360 px; the favicon 404.
- **PR #36 (hygiene) and PR #37 (closure figures)**, per PR35-Q4.

## 7. Proposed EVIDENCE lines

Full text in `out/active/PRE-MAX/closing/EVIDENCE-AMENDMENT-PROPOSALS-PR35-v1_0.md`: B25 "scalable" (stated); P06 the AI skill level (stated); B22 limits for ES "validadas" and "Desarrollos Validados"; Y02 limits for the About heading's six years; B26 "bulletproof / blindados" (stated).

## 8. Archive housekeeping

This report and the plan are indexed in `docs/v4/cc-completion-reports/README.md`, `docs/v4/cc-plans/README.md` and `docs/v4/README.md`. Records outside the repository: the gate-edits record, the decoration spec drafts, prototypes and snapshots per gate, and the harness, all under `out/active/PRE-MAX/closing/`.

**Pull request URL:** recorded here after `APPROVED PR35 G5`.

## 9. Relay

```
PIPELINE RELAY — PR #35 Main closing closed
Landed:      PR#35 open for manual merge (URL in §8) · 34 commits · 6 gates (Plan, G1–G5; G4 in two parts)
Open:        POSITIONING v1_5 + KEYS-Main-EN-ES v1_1 + SPEC-Copy-Main v1_1 owed (PR35-Q45) · EVIDENCE proposals B25, P06, B26, B22/Y02 notes · LinkedIn "industrial engineer" line · favicon 404 · Assessment Gate 0 unlogged
Next:        PR #36 — repo hygiene (PR35-Q4), then PR #37 closure figures
Go to:       COWORK  (new MD spec: BRIEF-CC-PR36 repo hygiene, after the owed POSITIONING / key sheet / SPEC-Copy-Main versions)
Run first:   /post-deploy-sync in a fresh Cowork session
```
