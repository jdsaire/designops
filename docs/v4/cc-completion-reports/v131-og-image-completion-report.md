# Completion report · PR pending · v1.3.1 · Each page shows its own card when shared

**Branch:** `site/og-image` on `8baa848` · **Author:** jdsaire · **Pull request:** pending · **Merge:** manual · **Plan:** [`../cc-plans/Plan-v131-OgImage.md`](../cc-plans/Plan-v131-OgImage.md)

## What a reader now sees

- **A link shared on LinkedIn** (or any site that reads Open Graph tags) shows that page's own card: a 1200 × 627 PNG per page, in place of an SVG that LinkedIn doesn't render.
- **On the site:** nothing changes except the release beside the wordmark, which reads v1.3.1.

## Why

LinkedIn reads `og:image` only as JPEG, PNG or GIF, so every link to the site was shared without its image. The nine cards were made and approved outside this repository (GR-Q191). This release puts them on the site and points each page at its own card.

## What changed in the head of each page

| Page | og:image (absolute, `https://jdsaire.com/…`) | Also added |
|---|---|---|
| `/` | `assets/img/og/og-01-main.png` | width 1200, height 627 |
| `about/` | `assets/img/og/og-02-about.png` | width, height |
| `resume/` | `assets/img/og/og-03-resume.png` | width, height |
| `work/accreditapass/` | `assets/img/og/og-04-accreditapass.png` | width, height, og:title, og:description |
| `work/trust-verify-brief/` | `assets/img/og/og-05-trust-verify.png` | width, height, og:title, og:description |
| `work/airport/` | `assets/img/og/og-06-airport.png` | width, height, og:title, og:description |
| `work/portfolio-evolution/` | `assets/img/og/og-07-portfolio-evolution.png` | width, height, og:title, og:description |
| `contact/` | `assets/img/og/og-08-contact.png` | width, height |
| `feedback/` | `assets/img/og/og-09-feedback.png` | width, height |

- The briefs' og:title and og:description copy each page's own `<title>` and meta description, character for character. No new text.
- The cards are byte-identical to the approved files (sha256 checked, 9 of 9); 285,341–526,309 B each, 3,524,142 B in all. No repository budget applies to them: `tools/imagery.py` and the manifest cover only the raster images in `assets/img/work/` and `assets/img/services/`.
- `assets/img/bridge1_onboarding.svg` is no longer named by any page. It stays, as the artwork `resume-portrait.webp` is rendered from.

## Commits

- `bc4c5b4` the nine cards · `b2349cf` og:image and its size on nine pages · `683ff67` og:title and og:description on the four briefs · `28691b1` release v1.3.1, #50 dated.
- Then this plan and report, and the PR number.

## Results per gate

| Gate | Result |
|---|---|
| Preflight | Base 8baa848; noise floor for Chrome 157.0.8103.78 present, 216 cells, all nine pages; checks 0 on the base |
| Plan | Release v1.3.1 with the badge bumped (OG-Q1); cards byte-identical (OG-Q2); og:title = the full `<title>` (OG-Q3); the bridge SVG kept (OG-Q4) |
| G1 | Each page: one og:image, its own card, 200 `image/png`, 1200 × 627; width and height tags; og:title = `<title>`. Head diff limited to the og and badge lines. Inspect gate mode 0 on nine pages |
| G2 · Regression | 108 cells against `8baa848` (9 pages × 12 Chrome; no CSS or JS changed, so no WebKit), floor 0/108. 72 identical, 36 differ: every page at 1440 in all four theme and language cells, 33 px inside the same 7 × 10 px box, the release badge's last digit (0 → 1). The badge doesn't show at 390 or 768. One layout-shift row on Contact 390 (p.ah-sub, 0.0492) re-ran twice: the base itself reads 0.0473 on the second run, so it's an intermittent shift already on the base, not this change |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 after every commit |
| Authorship | Sole author jdsaire; attribution 0 in commits, branch and PR text |

## Documentation touched

- `README.md` and `CHANGELOG.md`: #50 dated 15 Nov 2026; v1.3.1 row.
- `assets/img/README.md`: `og/` row; the bridge SVG's row says what it's for now. Image subfolders carry no README of their own; this file lists them.
- `docs/v4/cc-plans/README.md` and `docs/v4/cc-completion-reports/README.md` index rows.
- `DICTIONARIES.md`: none needed, no dictionary changed. SR-3 doesn't apply (no shown text changed).

## Not measured here

- **The live addresses:** the absolute card URLs resolve only after the merge deploys. The post-deploy sync checks each returns 200 as `image/png`.
- **LinkedIn's crawler:** read back link by link in LinkedIn Post Inspector after the merge. LinkedIn may serve a cached preview for a while; the inspector refreshes it.

## Recorded, not changed

- The briefs carry no `og:type` or `og:locale` (the other five pages do). Out of this release's scope.
- The #50 row's plan and report column reads `—`, though its plan and report are in `docs/v4/`.
