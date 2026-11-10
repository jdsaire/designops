# Completion report · PR pending · v1.1.3 · License and the offer without "advanced"

**Branch:** `copy/v113-license-d5` on `5c8f2a0` · **Author:** jdsaire · **Pull request:** pending · **Merge:** manual · **Plan:** [`../cc-plans/Plan-v113-LicenseD5.md`](../cc-plans/Plan-v113-LicenseD5.md)

## What a reader now sees

- **This repository:** a `LICENSE` file at the root, all rights reserved, with the same words as the site's License overlay. The README ends with a License section and lists `LICENSE` in its folder map. The repository stays public.
- **Main:** the line under the name reads "I build reliable websites and apps, translating business challenges into tested products using AI." / "Creo webs y apps confiables, traduciendo retos de negocio en productos validados con IA." Line count unchanged at 390, 768 and 1440 in both languages (EN 3/2/2, ES 3/2/2).
- **Main's link preview (og:description) and the README offer:** the same English line. The meta description is unchanged.
- **The release, v1.1.3,** beside the wordmark.

## Why

No line of evidence backs "advanced", so the offer ends on "AI" alone, as the headline and the professional profile already do. The license makes copying unlawful while the public history keeps proving authorship.

## Before and after (for the dictionary record)

| Surface | Before | After |
|---|---|---|
| `hero_sub` EN (`i18n/main.en.json`) | …tested products using advanced AI. (107) | …tested products using AI. (98) |
| `hero_sub` ES (`i18n/main.es.json`) | …productos validados con IA avanzada. (97) | …productos validados con IA. (88) |
| og:description (`index.html`) | = `hero_sub` EN before | = `hero_sub` EN after |

## Commits

`07ee049` LICENSE · `96a326f` README License section and map row · `e3e62c3` Main hero · `cbda6f8` og:description and README offer · `cdb5120` release label and changelog · plus this report's commit and the PR number commit.

## Results per gate

| Gate | Result |
|---|---|
| Plan | 5 shipped lines carried "advanced AI" / "IA avanzada", all inside the approved strings. The license_body text in the site and the legal copy lock match byte for byte. Chrome updated to 157.0.8103.50 after preflight, so a new noise floor was built in the background: 216 cells, 1 above 0 (About 768 · light · EN · WebKit, 1,522 px, timeline logo column), accepted as floor (JD) |
| G1 · License + D5 | 0 shipped hits; LICENSE = license_body EN byte for byte; label v1.1.3 on 9/9 pages; inspector gate mode 0 on every count; 6:00 of a 30-minute budget |
| G2 · Regression | 216 cells (9 pages × 12 × Chrome + WebKit) against `5c8f2a0`, floor key Chrome 157.0.8103.50: 127 identical, 89 differ. 88 sit in the label at 1440 (8 per page) and in the last line of Main's offer; 1 is About 768 · dark · EN · WebKit, 209 px in the timeline's logo column, the image-decode noise already ruled on the earlier floor. Console, parity, order, overflow, axe, failed requests and attribution 0; one links row was a code-span link in the archived plan, fixed before the commit (links 0). Matrix 19:28 |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 after every commit |
| Authorship | Sole author jdsaire |

## Documentation touched

`LICENSE` (new). `README.md` (folder-map row, License section, offer sentence, #48 dated 4 Nov 2026, v1.1.3 row). `CHANGELOG.md` (#48 dated, v1.1.3 row). `docs/v4/cc-plans/README.md` and `docs/v4/cc-completion-reports/README.md` (v1.1.3 rows). `DICTIONARIES.md` unchanged: no key added. Read time (SR-3) doesn't apply: no brief's copy changed.

## Third-party material and the license text

The license text is the site's locked wording, unchanged. The Archivo font files keep their own SIL Open Font License 1.1 (`assets/fonts/archivo/OFL.txt`). The institution logos and credential badges on Main and About belong to their owners, as the license's last sentence says of the case studies. Any exception wording is a later legal-copy decision, not part of this release.

## Limits

- GitHub's sidebar license link reads the default branch, so it shows only after the merge.
- Earlier plans and reports keep "advanced AI" as it stood when they were written.
