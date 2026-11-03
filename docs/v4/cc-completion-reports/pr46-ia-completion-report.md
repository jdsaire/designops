# Completion report · PR #46 · Information architecture (v1.1.0)

**Branch:** `deploy/v33-pr46-design-system` on `26dc94a` · **Author:** jdsaire · **Merge:** manual · **Plan:** [`../cc-plans/Plan-PR46-IA.md`](../cc-plans/Plan-PR46-IA.md) (v1_1 and v1_2 as accepted; v1_0's Design System scope moved to #47 by PR46-Q11)

## What a reader now sees

- **Navigation bar:** BRIEFS and LAB as menus with large icons, a name and a tag; ABOUT (HISTORIA in Spanish) and RÉSUMÉ (CV); theme and language as single controls, each opening a small panel; the CONTACT call at the right; the release, v1.1.0, beside the wordmark from 1024. One menu open at a time.
- **Phone menu:** the same pages with an icon each, one group open at a time, and Send Feedback with the two controls pinned at the foot.
- **Footer, every page:** the closing statement, the call to start a conversation (not on Contact or Feedback), jd@jdsaire.com, LinkedIn and GitHub; a sitemap in four clusters (Briefs, Profile, Forms, Lab); one compact legal row.
- **New pages:** `/resume/` (the portrait, the summary and the CV downloads) and `/feedback/` (the former report page; `/report/` forwards). About opens on the lab; Contact opens on its hero and form.
- **Main:** a scroll cue in place of the hero's call; studio images on the four work cards and the three capabilities, labelled once per section; the ticker no longer stops under the pointer.
- **Briefs and About:** the figure panels are tighter; the Keep exploring head is centred from 768.

## Commits

`8a2870f` hero heading gate · `0f699b8` lazy images · `604a2ed` navbar and phone menu · `80a4a7d` ticker · `4bb3dd0` footer and Feedback · `44d0cce` Contact organism into the footer · `570dd89` Feedback opening, Sobre mí, Contact eyebrow · `db12c22` Keep exploring head · `d674980` figure panels, Historia · `e575f9e` Résumé page · `af13af7` Spanish for the new keys · `035a9af` Feedback and About head · `b510680` Main imagery · `4644c69` imagery check · `4eaa9ee` deferred images · `808b9ab` imagery Spanish · plus this report's documentation commit.

## Results per gate

| Gate | Result |
|---|---|
| G1 · Performance | Main's phone LCP 4.88 → 4.13 s locally (preview, not the bar); the two-cluster first paint on the domain traced to headless Chrome (default 4/5 slow runs, `--disable-gpu` 1/6). Records: `LAB-CHECK-PR46-G1` |
| G2 · Prototypes | Four rounds on 127.0.0.1:8012 to the picks in PR46-Q20…Q41 |
| G3 · Navbar | 8 pages; one dropdown stylesheet (`shared/dropdown.css`) shared with the Feedback page's picker; `data-i18n-title` in both engines; og:image absolute on every page |
| G4 · Footer + pages | Three tiers on every page; `/feedback/` with a stub at `/report/`; the Contact organism joined the footer; `/resume/` created |
| G5 · Injection | 14 Spanish values (copy-es drafts, JD's edits); Feedback and About head copy |
| G5A · Main imagery | 7 images, 14 files sha256-identical to the round's; contrast ≥ 19.8:1 on every card headline; images deferred until near, after the first build regressed Main's LCP (3.54 → 4.74 s); deferred: base 4.14 vs tip 4.21 s, total bytes 947 → 765 KB. Records: `LAB-CHECK-PR46-G5A` |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 at the tip; DICTIONARIES.md 12 pairs, 1,181 keys per language |
| Authorship | Sole author jdsaire. The attribution grep reads 2 on the imagery manifest's labelling lines, ruled an exception (PR46-Q62) |

## Rulings in the run

PR46-Q6…Q47, Q48-ES, Q49-G5, Q50-FB, Q57…Q62 in `PRE-MAX-CHANGELOG.md`; Cowork's imagery rulings PR46-Q48…Q56.

## Deviations

- **New keys before the lock:** they carried their locked EN, with ES holding the EN until G5, instead of key-name placeholders (G3).
- **Commits:** the navbar, the footer and the page moves landed as whole commits, since every page changes together.
- **Imagery:** the deferral (`core/defer-images.js`) was added inside G5A by ruling (PR46-Q60). Without JavaScript the posters show their gradient ground and the capability slots stay empty.
- **Ticker:** the mouse no longer pauses it (PR46-Q38); keyboard focus does. The narrowing of exception X-1 is owed to the decoration spec.

## Documentation touched (SR-4)

Root README (page list, folder map, latest changes with a Version column), CHANGELOG.md (#45 merge date, Version column, the #46 row), DICTIONARIES.md, `docs/v3/IA-CONVENTION.md`, `about/`, `contact/`, `feedback/`, `resume/` READMEs, `assets/`, `assets/img/` (the raster rule), `assets/css/shared/`, `assets/css/pages/`, `assets/js/`, `assets/js/core/`, `assets/js/pages/` and `tools/` READMEs, both `docs/v4` indexes.

## Out of scope, carried

- **#47 Design System:** `closing/PR46-run/proposals/DESIGN-SYSTEM-DEFERRED-v1_0.md`, with the CTA migration to `shared/cta.css`.
- **Bar of record:** 9 live pages, 18 cells, read with B35's method and a GPU-off reading (PR46-Q19); `/resume/` and `/feedback/` join it.
- **Before merging:** JD confirms jd@jdsaire.com receives mail and Cloudflare Email Obfuscation is off (PR46-Q16).
- **Governing documents, for Cowork:** POSITIONING §4 (About and Feedback head), the COPY-PR45 locks (`/feedback/`, Submit Feedback), STRATEGY §4 and §7 (release line), SR-5 and the SR-2 note (proposals).
