# Completion report · PR pending · v1.3.0 · The Résumé shows the CV

**Branch:** `site/resume-viewer` on `5d6287c` · **Author:** jdsaire · **Pull request:** pending · **Merge:** manual, held (see below) · **Plan:** [`../cc-plans/Plan-v130-ResumeViewer.md`](../cc-plans/Plan-v130-ResumeViewer.md)

## What a reader now sees

- **Résumé, computers with a mouse:** below the unchanged opening, a label ("CV · PDF · one page" / "CV · PDF · una página") and a hint, then the CV in the browser's own viewer at the full content width, one screen tall, in the reader's language.
- **Résumé, phones and tablets:** the same label and hint, one purple Download button, and the CV drawn on the page, fitted to the screen, with selectable text and working links. No sideways scrolling.
- **Without script:** an "Open the PDF" / "Abrir el PDF" link.
- **The CV files:** the locked v10 pair, exported without a version number in their embedded title, at the same addresses. The Markdown copies and the download buttons are gone.
- **The release, v1.3.0,** beside the wordmark.

## Why

The recruiter's standard is reading the PDF, so the page now shows the CV instead of offering files (GR-Q157, GR-Q158). The first native-frame build failed review in Safari (a white jump, hidden controls, sideways scrolling on phones), so three prototypes were reviewed and a hybrid was ruled (RV-Q8…Q14).

## Merge hold

Two governing changes are owed before this merges, both in Cowork:
- **GR-Q157 reversal:** "no download links", now broken by the phone Download.
- **UltraSpec v7_7 §9 amendment:** the CV is no longer only "the browser's own viewer"; phones get PDF.js.

## Before and after (for the dictionary record)

| Key (`resume/i18n/resume.{en,es}.json`) | Before | After |
|---|---|---|
| `resume_cv_cta` | Download CV (PDF) / Descargar CV (PDF) | retired |
| `resume_cv_cta_md` | Download CV (MD) / Descargar CV (MD) | retired |
| `resume_cv_href_md` | ../assets/docs/CV_Juan_Diego_Saire_{EN,ES}.md | retired |
| `resume_cv_href` | ../assets/docs/CV_Juan_Diego_Saire_{EN,ES}.pdf | same + `?v=83c1e4cc` (EN) / `?v=6bbf0fa7` (ES) |
| `resume_cv_label` | — | CV · PDF · one page / CV · PDF · una página |
| `resume_cv_hint` | — | Read it here, or download it. / Léalo aquí o descárguelo. |
| `resume_cv_frame_title` | — | Juan Diego Saire — CV (PDF) (both) |
| `resume_cv_download` | — | Download / Descargar |
| `resume_cv_fallback` | — | Open the PDF / Abrir el PDF |

Résumé pair 7 → 9 keys; total 1,181 → 1,183 per language.

**Files:**

| File | Size | sha256 |
|---|---|---|
| `assets/docs/CV_Juan_Diego_Saire_EN.pdf` | 92,890 → 76,106 B | → `83c1e4cc…` |
| `assets/docs/CV_Juan_Diego_Saire_ES.pdf` | 97,397 → 78,085 B | → `6bbf0fa7…` |
| `assets/docs/*.md` | — | deleted |
| `assets/vendor/pdfjs/` | — | added: pdfjs-dist 6.5.438, Apache-2.0, checksums in its README |

## Commits

- First build: `20abb59` v10 PDFs · `d15f7c4` Markdown retired · `b1a3831` native viewer · `f236246` download keys retired · `b93b3ed` release label · `257f822` SR-4.
- After the G1 re-open: `03aea0c` title-fixed exports · `c7836e3` PDF.js · `d8d1c90` hybrid viewer · `b43d472` SR-4 · `f8290ea` release row.
- Then this report and the PR number.
- Keys travelled with their markup where a split would have broken parity or orphans (`b1a3831`, `d8d1c90`).

## Results per gate

| Gate | Result |
|---|---|
| Preflight | Base 5d6287c; noise floor for Chrome 157.0.8103.78 built in background, 216 cells, 1 above 0, ruled (RV-Q6); rulings RV-Q1…Q4 |
| Plan | Release v1.3.0 (RV-Q5) |
| G1, first | Native frame built; JD's Safari review re-opened the gate (RV-Q8) |
| Prototypes | P1–P3, then the unified P4 approved (RV-Q12…Q15) |
| G1, re-presented | Native 1440/768 with a mouse; sheet at 390, 844×390 and 1024×1366 touch. Page overflow 0, console 0, axe 0 on the CV section in both themes. Header unchanged (844/1024/900). Inspect gate mode 0 except 1 attribution hit, ruled info (RV-Q21: XFA "agent" in vendored PDF.js) |
| G2 · Regression | 120 cells against `5d6287c` (9 pages × 12 Chrome + resume/ × 12 WebKit, frame and sheet masked), floor 0/120 above 0. 64 identical, 56 differ: resume/ in all 24 of its cells (new section); the other 8 pages only at 1440, 4 cells each, 49 px inside the release label's box (x 251–284). 14:43 |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 after every commit |
| Authorship | Sole author jdsaire; attribution 0 in commits, branch and PR text |

## Documentation touched

- `README.md` and `CHANGELOG.md`: #49 dated 9 Nov 2026; v1.3.0 row.
- `DICTIONARIES.md`: Résumé 9/9, total 1,183.
- Folder notes: `resume/README.md` · `assets/README.md` (docs row, vendor row) · `assets/docs/README.md` · `assets/vendor/pdfjs/README.md` (new) · `assets/css/shared/README.md` · `assets/css/pages/resume/README.md` · `assets/js/pages/resume/README.md`.
- `docs/v4/cc-plans/README.md` and `docs/v4/cc-completion-reports/README.md` index rows.
- SR-3 doesn't apply (not a brief).

## Not measured here

- **Safari, iOS and Android:** native PDF frames paint blank in the headless WebKit build, so JD's Safari is the desktop check. iOS Safari, Android Chrome and LinkedIn's in-app browser are checked on the live page after the merge.
- **The CDN cache:** the old PDFs at the same addresses may sit in Cloudflare's cache for up to 4 h. A purge of the two URLs after the merge clears them; the page itself uses the hashed query.

## Recorded, not changed

- The root `LICENSE`'s third-party sentence doesn't name the vendored PDF.js (Apache-2.0, its own license in its folder). Backlog line; no exception clause (V113-Q1 precedent).
- The PDFs' embedded title reads `CV_Juan_Diego_Saire_EN` / `_ES`; "Juan Diego Saire — CV" (RV-Q16) needs a re-export.
