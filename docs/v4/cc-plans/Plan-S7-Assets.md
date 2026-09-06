# S7 — Assets · Approved Plan

**Repo:** `jdsaire/designops` · **Branch:** `deploy/v11-s7-assets`
**Base at cut:** `main` @ `90a1afe` · **Rebased onto:** `main` @ `caab00c` by merge, mid-run
**Source prompt:** `P-CC-S7-Assets-v1_0.xml`, executing patch item **A9** in service of exit
condition **A18** — *"`assets/img/` contains no asset above 500 KB."*

This plan was approved in stages. The first four sections were approved before any commit; the
remainder were proposed at localhost gates as the work was reviewed, and each was approved before
it was executed. Nothing here was carried out unapproved.

---

## 1 · Preflight, and four contradictions

The prompt frames A9 as *"delete four orphaned `assets/img/work/*.svg` files."* Read-only preflight
contradicted that premise and three further points. All four were put to the principal and resolved
before the first commit.

| # | Finding | Resolution |
|---|---|---|
| 1 | Three of the four "orphaned" files are **live** `<img>` backgrounds on Home (`verify`, `control`, `build`); only `scale.svg` is unreferenced | A9 as `PATCH-F1` actually writes it — *removed and replaced by placeholder containers* — not delete-orphans |
| 2 | The XML restates A9 incorrectly, and `build-in-progress.svg` has not existed under that name since Wave 5 | Corrected disposition drawn from `PATCH-F1-Precisions-v2_0.md`, which governs on conflict |
| 3 | `AMENDMENT-F5` directs the new art to match a vector family (`build`/`control`/`scale`/`verify`) that is itself raster-wrapped, and which F5's own §1 says D8 mischaracterised | Art authored from `assets/css/base/tokens.css` instead; no vector precedent existed to match |
| 4 | `bridge1_onboarding.svg` is a **portrait of the principal**, alt-texted with his name in both dictionaries and published as the sitewide `og:image`. F5 requires abstract vector art *and* forbids touching that alt text — incompatible | **Held out of this run** by the principal's decision; needs an F6 |

## 2 · Scope as approved

**In scope.** All seven remaining oversized assets in `assets/img/`: the four `work/*.svg` card
backgrounds and the three `services/cap-*.svg` capability illustrations. Every one was an SVG
envelope wrapping a single embedded base64 raster.

**Out of scope, by decision.** `assets/img/bridge1_onboarding.svg`, pending an F6 amendment.

**A18 at close: FALSE**, on that one file. Stated plainly here and in the completion report; not
softened, and not reported as closed.

## 3 · Disposition

| Asset | Disposition |
|---|---|
| `work/scale.svg`, `verify.svg`, `control.svg`, `build.svg` | Replaced by original vector art, renamed onto their brief slugs |
| `services/cap-production.svg`, `cap-adoption.svg`, `cap-augmentation.svg` | Re-authored as genuine vector art at the same paths |
| `bridge1_onboarding.svg` | Untouched |

Art direction: **thematic, mark-free**. Cards 2 and 3 as the principal named them; cards 1 and 4
re-aimed off the FIFA trophy and the Octocat/Clawd mascots onto generic forms, so `PATCH-F1` §A9's
rejection of third-party brand arrangements is not engaged.

## 4 · Mid-run integration of PR #24

PR #24 (S8 · Global mechanisms) merged to `main` as `caab00c` after this branch was cut. `main` was
merged in rather than rebased onto — nothing was pushed, so no history needed rewriting, and the
merge commit is a legible, revertible record matching the repo's own precedent. One conflict, in
`assets/css/pages/home/work.css`, resolved in favour of this branch's spotlight removal.

## 5 · Approved additions

Each was proposed at a gate and approved before execution. Full rationale in the completion report.

1. **Spotlight removal.** Card 1's `#21102F` container tint, purple default-face wash and
   brand-purple edge removed, equating all four cards.
2. **Art placement.** The card image moved from full-bleed behind the type to seated below the
   headline, bleeding off the base, driven by `--work-art-top`.
3. **Card surface and elevation.** A gradient filling the whole card and resolving to the artwork's
   ground at `--work-art-top`, plus a purple lift, because the section ground is `#000000` and the
   card's black drop shadows could not separate it.
4. **Two service illustrations redrawn** — adoption as a neuron, augmentation as an exponential
   cascade — after the pair read as the same node-and-ray fan.
5. **Card 4 art chosen from four proposals**, resolved on a design canvas rather than in prose.
6. **Type block locked** to a single `--work-type-gap`, replacing gaps that were coming from browser
   default margins and drifting with each element's `clamp()` font-size.
7. **Capability illustrations recomposed to 3:2**, the slot's own ratio, after light mode exposed
   letterboxing under `object-fit: contain`.

## 6 · Standing constraints

Commit identity `Juan Diego S.` with the account noreply address; zero AI attribution anywhere;
`gh` CLI only; conventional commits, clean tree after each; no subagents; single agent throughout.
