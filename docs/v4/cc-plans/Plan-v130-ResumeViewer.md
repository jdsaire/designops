# Plan · v1.3.0 · Résumé viewer, G1 re-opened: three prototypes, then rework

## Context
At G1 you rejected the native-frame viewer, as reviewed in Safari on desktop and mobile:
- The page jumps from the site's colours to solid white.
- Safari's controls (zoom, Preview, download) only appear at the very bottom inside the document, so a first-time visitor can't find them.
- Phones need horizontal scrolling.
- The sheet is shrunk, which makes the text smaller. Accessibility is critical on this site.

You asked for a cleaner container that shows how to interact with the CV, sits in harmony with the site's background, gives the sheet maximum width, and puts a label before the CV. You asked for three responsive prototypes before any rework, and for the v10 re-exports in `~/Downloads` to replace the served PDFs.

**Rulings** (this turn's `/ask`; written to PRE-MAX-CHANGELOG as the first execution step):
- **RV-Q7:** the site ships the Downloads re-exports, EN `CV_Juan_Diego_Saire_EN_v10.pdf` (76,110 B, sha256 2e122447…) and ES `…_ES_v10.pdf` (78,089 B, 4214c88c…), A4, one page each, byte for byte at the existing addresses. `governing-files/cv/current/` still holds bc8ec7bf… / d91bec06…, and the register lists those. That stays an open row for Cowork's governing-versions.
- **RV-Q8:** three prototypes. P3 uses PDF.js and needs an UltraSpec v7_7 §9 amendment ("the browser's own viewer") if you pick it.
- **RV-Q9:** the control bar includes **Download** for evaluation. It can't lock without a GR-Q157 reversal (changelog ruling plus §9 amendment).
- **RV-Q10:** new copy appears as EN + ES drafts and is locked after the pick.
- **RV-Q11:** pdfjs-dist 6.5.438 downloaded by a separate Sonnet chat into `out/active/PRE-MAX/closing/PR-resume-run/vendor/pdfjs-6.5.438/`. Re-measured here: pdf.min.mjs 474,284 B 3a884028…, pdf.worker.min.mjs 1,271,915 B 1e64c824…, LICENSE 10,174 B 0d542e0c…, all matching SOURCE.txt and jsDelivr's published hashes.

**State carried:** branch `site/resume-viewer` holds six unpushed commits (20abb59 … 257f822). Tip server 127.0.0.1:8030, base 127.0.0.1:8020. Floor for chrome 157.0.8103.78 built and ruled (RV-Q6).

## Step 1 · Three prototypes (outside the repo; ruled evidence: you asked for them)
**Where:** `out/active/PRE-MAX/closing/PR-resume-run/prototypes/p1|p2|p3/`.
- Each is a git-less copy of the tip tree (5.7 MB) with only `resume/`, `resume.css`, `cv.js` and the PDFs changed. Every copy carries the Downloads re-exports.
- Served at 127.0.0.1:8041 / 8042 / 8043. Ports were free when measured; I re-check them before starting.
- The site's own chrome, tokens and i18n engine are reused unchanged. Site style holds: square corners, no shadows, tokens only.

**Common to all three:**
1. **Label** before the CV, using the existing `.section__eyebrow` pattern (`assets/css/shared/section-extras.css`).
2. **Control bar** that sticks under the nav while the CV is in view (`position: sticky; top: var(--nav-height)`). Order: Zoom out · Zoom in (P3 only) · Full screen (only where `document.fullscreenEnabled`) · Open the PDF · Download.
3. **Light theme:** the section gets a faint tint plus a `--color-border-soft` edge around the sheet, so a white sheet never sits on white. Dark theme: the sheet stays white on black.
4. **Language:** EN/ES follows the existing `i18n:changed` pattern in `assets/js/pages/resume/cv.js` (frame or sheet, links, Download target).

**Draft copy** (DRAFT, not locked; ES in the usted register; "Open the PDF" / "Abrir el PDF" is already locked):

| Role | EN | ES |
|---|---|---|
| Label | CV · PDF · one page | CV · PDF · una página |
| Hint | Read it here, zoom, or open it full screen. | Léalo aquí, amplíelo o ábralo a pantalla completa. |
| Zoom out | Zoom out | Alejar |
| Zoom in | Zoom in | Acercar |
| Full screen | Full screen | Pantalla completa |
| Download | Download | Descargar |

**The three arrangements:**

| | P1 · Native, A4 card | P2 · Native, full width | P3 · PDF.js, max width |
|---|---|---|---|
| Desktop 1440 | Centred column ~900 px. The iframe is sized to the A4 ratio plus the viewer's toolbar, so the whole page and its controls are visible with no inner scroll | Iframe at full content width (up to 1440 minus gutters), `#view=FitH`, one screen tall under the sticky bar. Largest native text; scroll inside to read | Page drawn to a canvas at full content width × devicePixelRatio, on the site background with no viewer background. Text layer (selectable, readable by screen readers), link overlays for the CV's links, real zoom steps |
| 768 | As desktop, column = content width | As desktop | Fit to width; zoom buttons |
| 390 | **No iframe** (fixes iOS horizontal scroll): a CV card with label, meta line and buttons that open the browser's own viewer | Same card as P1 | Fit to width (358 px), pinch zoom and the zoom buttons; a zoomed sheet scrolls inside its own box, never the page |
| Ruling cost | Within GR-Q157 except Download | Same | §9 amendment + vendored library (pdf.min.mjs 474 KB + worker 1.27 MB, Apache-2.0 LICENSE) + CSP additions measured in the prototype (expected `worker-src 'self'`; any font or image source PDF.js needs, recorded from the console) |

**Measured per prototype** (headless Chrome, plus WebKit where it paints):
- Sheet width and estimated body-text size at 390, 768 and 1440.
- Horizontal overflow 0, console 0, CSP violations 0.
- Bar visible on first view of the CV.
- Keyboard order and focus rings; axe on the section in both themes.
- Bytes added, and when the PDF loads.

Results go into one table in the prototype report. P3 runs with `isEvalSupported: false`.

**STOP — prototype review.** You open 8041, 8042 and 8043 in the preview browser and in Safari (desktop and phone on the same network, or Safari's responsive mode) at 1440, 768 and 390, both themes, EN/ES. Then a single `/ask` with five decisions:
1. The pick.
2. Download: keep, which starts the GR-Q157 reversal, or drop.
3. Label and hint wording.
4. Whether the 390 card (P1/P2) or the inline sheet (P3) is right for phones.
5. Anything to carry over from the other prototypes.

## Step 2 · Rework on the branch (after the pick)
1. **Prompt v1_1:** `P-CC-ResumeViewer-v1_1.xml` beside v1_0, with corrected premises (re-exports, the chosen viewer, Download if kept, the new strings, the CSP), so the run's record matches what ships. v1_0 is kept.
2. **Copy lock:** your EN, then one designops-copy-es pass (Sonnet rule, or a GR-Q162-style exception you rule).
3. **Commits on top of the six, never rewritten:**
   - `site(resume): v10 re-exports at the CV addresses`
   - `site(resume): <pick> viewer` (markup, CSS, cv.js; P3 adds `assets/vendor/pdfjs/` with LICENSE and a README, plus the measured CSP directives)
   - `copy(resume): viewer label and controls` (keys at page order)
   - SR-4 doc updates (resume/README, assets/README, a vendor README if P3, DICTIONARIES counts)
   - CHANGELOG/README v1.3.0 cell re-drafted
4. **Re-present G1** with the same ten elements: 1440 and 390, plus 768, EN/ES, themes, Safari.

## Step 3 · G2 and close (as before)
- One regression matrix with `--webkit resume/` and the frame or sheet masked.
- Five checks, archive, PR (auto-merge off), relay and the Cowork paste block.
- **Merge hold**, stated in the PR body: a P3 pick needs the §9 amendment, and Download needs the GR-Q157 reversal, before you merge.

## Verification
- **Prototypes:** the measurement table above. Your eyes in Safari are the WebKit truth (Playwright WebKit paints native PDF frames blank; P3's canvas can be measured in WebKit).
- **Rework:** sha256 of the served PDFs = 2e122447… / 4214c88c…; the five `tools/` checks; inspect gate mode; header unchanged (844 / 1024 / 900); no horizontal overflow at 390; console and CSP 0; keyboard reaches and leaves the CV.

## Open
| Open | Resolve |
|---|---|
| Governing PDFs and register still the earlier export | Cowork governing-versions (RV-Q7) |
| P3 picked → UltraSpec §9 amendment | Cowork, before merge |
| Download kept → GR-Q157 reversal | Changelog ruling + §9 amendment, before merge |
| Android Chrome and LinkedIn in-app browser | Your phone on the live page after merge |
