# S7 — Assets · Completion Report

**Repo:** `jdsaire/designops` · **Author and committer of every commit:** Juan Diego S.
**Plan:** `docs/v4/cc-plans/Plan-S7-Assets.md`
**Branch:** `deploy/v11-s7-assets`
**Base at cut:** `main` @ `90a1afefd58967617eea1fd2b6574a4bc09d859a`, confirmed at preflight with
zero drift. **Merged mid-run** with `main` @ `caab00ca48bea1d5734a47e932361d0c19d585a2` (PR #24, S8).

## Outcome summary

Every oversized asset in `assets/img/` is disposed of except one, and that one is held out by an
explicit decision recorded below. The seven files this run touched were **23,777,518 B** of
raster-in-SVG envelopes; they are now **23,077 B** of genuine vector artwork — a **99.90%**
reduction. `assets/img/` as a whole falls from roughly 24 MB to **1.2 MB** across 19 files.

The run was **materially larger than the prompt scoped**, and deliberately so. The prompt described
a mechanical deletion of four orphaned files. Preflight found that premise false, and each
subsequent step was proposed at a localhost gate and approved before execution. Seven additions
landed beyond the original scope; all seven are enumerated in *Approved additions* below, with what
prompted each. Nothing was executed unapproved, and nothing was widened on this agent's own
judgement.

## A18 at the close of this run: **FALSE**

> One asset remains above 500 KB: `assets/img/bridge1_onboarding.svg`, 665,784 B. It is held out by
> the principal's explicit decision this session, because AMENDMENT-F5 requires it to be re-authored
> as abstract vector art while simultaneously forbidding any change to the alt text that names the
> person photographed in it or to the `og:image` tags that publish it. Those requirements cannot
> both hold. Resolving it needs an F6 amendment, not an improvisation in this run.

Down from **eight** files over the ceiling at preflight to **one**.

## Preflight: four contradictions in the governing set

Preflight ran read-only and contradicted the prompt's own premise. The prompt states A9 as *"delete
four orphaned `assets/img/work/*.svg` files"* and names a reference found where none was assumed as
a hard stop. Three of the four are live.

| File | Size at preflight | Reference found |
|---|---|---|
| `work/verify.svg` | 2,342,626 B | `index.html` — Work Card 2 background |
| `work/control.svg` | 2,315,066 B | `index.html` — Work Card 3 background |
| `work/build.svg` | 2,148,855 B | `index.html` — Work Card 4 background |
| `work/scale.svg` | 2,246,178 B | none — the only genuine orphan |

Three further contradictions, all put to the principal and resolved before the first commit:

1. **The XML restates A9 incorrectly.** `PATCH-F1-Precisions-v2_0.md` §A9 — which the trigger
   designates as governing on conflict — reads *"All four are removed and replaced by placeholder
   containers."* A9 is remove-and-contain, which is why it pairs removal with replacement. The
   prompt also names `build-in-progress.svg`, which has not existed under that name since Wave 5.
2. **AMENDMENT-F5 names a vector family that does not exist.** It directs replacement art to match
   `build`/`control`/`scale`/`verify`; those four are themselves raster-wrapped, were removed in this
   run, and F5's own §1 states that D8 mischaracterised them. Art was authored from
   `assets/css/base/tokens.css` instead.
3. **`bridge1_onboarding.svg` is a portrait of the principal**, alt-texted *"Juan Diego Saire — UX
   Engineer and DesignOps Specialist"* in both `en.json` and `es.json`, and published as the sitewide
   `og:image` on all four top-level pages. F5 requires abstract vector art **and** forbids touching
   the alt text or the `og:image` references. Both cannot hold. Held out; needs an F6.

The oversized sweep found **exactly eight** files and no ninth, so there is no out-of-scope finding
to report under the no-widening rule.

## Approved additions

Seven additions landed beyond the prompt's scope. Each was proposed at a gate, with its rationale
and its cost, and approved before execution.

| # | Addition | What prompted it |
|---|---|---|
| 1 | **Spotlight removal.** Card 1's `#21102F` container tint, its purple `.work-card__default` wash and its brand-purple edge and outer glow, all removed | Directed after review: the card was to render identically to the other three |
| 2 | **`scale.svg` promoted to Card 1.** The one genuinely orphaned file became Work Card 1's background rather than being deleted | Directed: the four files were kept in place for a separate disposition, reverting the first commit |
| 3 | **Art placement rebuilt.** The card image moved from full-bleed behind the type to seated below the three-line headline and bleeding off the base, driven by `--work-art-top` | Requested once the thematic art existed and full-bleed no longer suited it |
| 4 | **Card surface and elevation.** A gradient across the whole card resolving to the artwork's own ground at `--work-art-top`, plus a purple lift and brightened hairlines | Found at a gate: seating the art at the base left the upper card flat, and the section ground is `#000000`, so the card's black drop shadows separated nothing |
| 5 | **Two service illustrations redrawn** — adoption as a neuron, augmentation as an exponential cascade | Found at a gate: both had resolved as the same node-and-ray fan and stopped carrying distinct meaning |
| 6 | **Card 4 art resolved from four proposals** on a design canvas, rather than iterated in prose | Two prior attempts were rejected — the first as too flat beside cards 1–3, the second still off-register |
| 7 | **Type block locked** to a single `--work-type-gap` | Directed, to close the debt rather than park it. See *Type rhythm*, below |
| 8 | **Capability illustrations recomposed to 3:2** | Found in light mode: the slot's `object-fit: contain` letterboxed all three. See *The light-mode letterbox*, below |

## Art direction: thematic and mark-free

The work-card set was directed as thematic rather than abstract. Cards 2 and 3 were built as named —
a verified transfer between two handsets, and an aircraft climbing out past a control tower. Cards 1
and 4 were re-aimed off the marks originally named for them:

| Card | Originally proposed | Shipped | Why |
|---|---|---|---|
| 1 | FIFA World Cup Trophy | A stadium, and a credential | The trophy is a FIFA-protected design and mark, and `PATCH-F1` §A9 rejects third-party brand arrangements outright |
| 4 | Octocat and Clawd | A bug in an editor window, and a developer | Both are third-party mascots; GitHub's terms do not permit redrawing the Octocat |

The principal was shown the exposure before choosing, and directed the mark-free path. **A9's
rejection of third-party brand arrangements is therefore not engaged, and no licensing deviation is
recorded.**

## Type rhythm — a defect found while implementing a directed change

The instruction was to lock the vertical gaps between each card's label, heading and body.
Measurement showed **neither gap was set by this stylesheet at all**. `assets/css/base/reset.css`
touches only `body` and `a`, so the `<h3>` and `<p>` retained the user agent's `margin: 1em 0`:

| Gap | Was | Composed of |
|---|---|---|
| label → heading | ≈ 37 px | the label's declared `0.875rem` **plus** the heading's inherited `1em` top margin |
| heading → body | ≈ 39 px | two inherited `1em` margins meeting, nothing declared |

Because `1em` resolves against each element's own `clamp()` font-size, both gaps also drifted across
breakpoints. Both are now stated once, as `--work-type-gap: 0.875rem` — the figure the stylesheet
already declared on the label and the only value it ever asked for — with the inherited margins
zeroed on the label, both headings and the body. The heading block consequently ends higher, which
gives the card art **more** clearance, so `--work-art-top` needed no retuning.

## The light-mode letterbox

Reviewed in light mode, all three capability cards showed vertical strips either side of the
artwork. `.services__image-slot` is `aspect-ratio: 3 / 2` and the carousel renders the image with
`object-fit: contain`, but all three files were ≈ 1.32:1, so `contain` letterboxed them
horizontally. The strips took the slot's own `var(--surface-card)`: `#0A0A0A` in dark, invisible
against the artwork's ground, and `#F2F2F2` in light, where they were not. All three are recomposed
to **768×512**, the slot's own ratio; they now fill it under `contain` in the carousel and under
`cover` on Home, in either theme, with no crop on either surface.

**This is a recorded deviation** — see *Deviations*, below.

## Mid-run integration of PR #24

PR #24 (*S8 · Global mechanisms*) merged to `main` as `caab00c` after this branch was cut from
`90a1afe`, leaving `main` **9 commits** ahead and this branch **5** ahead. `main` was merged in
rather than rebased onto: nothing had been pushed, so no history needed rewriting, and the merge
commit is a legible, revertible record matching how every deploy branch in this repo has landed.

Overlap was checked file by file against PR #24's own patches before fetching. `index.html`
auto-merged — S8 worked in `<head>` and the nav, this branch in the work cards. One conflict, in
`assets/css/pages/home/work.css`: S8 tokenised a shadow literal *inside* `.work-card--spotlight`,
a rule this branch had removed by direction. Resolved in favour of the removal; every other hunk in
that file is S8's, taken unchanged, including the `html[data-theme="light"] .work-card` block that
pins the cards dark. One clause in that block's comment named card 01 as the one carried by
`#21102F` rather than by artwork; that had stopped being true and the colour appears nowhere in the
file, so the clause was corrected to describe the four cards as they are.

## Ordered commit list

| | Commit | What |
|---|---|---|
| 1 | `7db7b94` | `chore(assets)` — retire the four oversized work-card backgrounds |
| 2 | `2cb754b` | `chore(assets)` — re-author the three capability illustrations as vector art |
| 3 | `459f02d` | `revert(assets)` — restore the four work-card backgrounds |
| 4 | `a781672` | `feat(work)` — give the spotlight card the `scale.svg` background |
| 5 | `a84def3` | `style(work)` — drop the spotlight card's purple treatment |
| 6 | `acdd150` | `merge` — integrate `main` at `caab00c` (PR #24, S8) |
| 7 | `c4e0667` | `chore(assets)` — redraw the adoption and augmentation illustrations |
| 8 | `0ad7855` | `feat(work)` — replace the four card backgrounds with thematic vector art |
| 9 | `29540c2` | `style(work)` — fill the card surface and restore its elevation |
| 10 | `71979c2` | `chore(assets)` — revise the stadium, currency and robot illustrations |
| 11 | `d50e458` | `chore(assets)` — redraw card 4's two figures in the set's own language |
| 12 | `94ba34c` | `chore(assets)` — adopt the caught-in-the-code illustration for card 4 |
| 13 | `189e6ca` | `style(work)` — lock the card type block to one rhythm |
| 14 | `2f15682` | `chore(assets)` — compose the capability illustrations to the slot's 3:2 |
| 15 | *this commit* | `docs(handoff)` — plan and completion report |

Commits 1 and 3 are a change and its own revert, kept rather than squashed: the deletion was
executed under an approved plan and then withdrawn by a later decision, and both are part of the
record. Tree clean after every commit. Nothing was pushed until the branch was complete.

## What shipped

**Four work-card illustrations**, renamed onto their brief slugs. The old names described abstract
art; `scale.svg` describing a stadium would have misread at source level, which is the reasoning
`docs/parking-lot.md` already records for `build-in-progress.svg`.

| Card | Old file | New file | Subject | Size |
|---|---|---|---|---|
| 1 · AccreditaPass | `scale.svg` | `accreditapass.svg` | Stadium and credential | 3,436 B |
| 2 · Yape Trust-Verify | `verify.svg` | `yape-trust-verify.svg` | Verified transfer between two handsets | 2,973 B |
| 3 · Airport | `control.svg` | `airport.svg` | Aircraft climbing out past a control tower | 2,881 B |
| 4 · Front-End Evolution | `build.svg` | `front-end-evolution.svg` | A bug on the failing line; the developer reaching in | 5,551 B |

**Three capability illustrations**, at their existing paths, recomposed to 768×512.

| File | Subject | Size |
|---|---|---|
| `cap-production.svg` | Dispersed brief fragments consolidating into one shipped block | 2,248 B |
| `cap-adoption.svg` | A neuron — one signal adopted across a network | 3,103 B |
| `cap-augmentation.svg` | A 1→2→4→8 doubling cascade under an accelerating curve | 2,885 B |

## Verification, with figures

| Check | Result |
|---|---|
| Seven files, before | **23,777,518 B** |
| Seven files, after | **23,077 B** — a 99.90% reduction |
| `assets/img/` total | roughly 24 MB → **1.2 MB** across 19 files |
| Files above 500 KB | **8 → 1** (`bridge1_onboarding.svg`, 665,784 B) |
| Embedded raster in any new file | **zero** — `base64`, `xlink:href` and `<image>` all absent from all seven |
| XML well-formed | `xmllint --noout` clean on all seven |
| Every new asset served | **200** on all seven; the four retired paths **404** |
| References to a retired filename | **zero** in shipping HTML, CSS and JS |
| Top-level routes | Home, About, Capabilities, Contact all **200** |
| CSS integrity | braces balanced; no conflict markers anywhere in the tree |
| Hover blur | unchanged — still targets `.work-card__bg-img` |
| Attribution sweep | **zero** matches across every file this run touched |
| Conventional commits | 15 of 15 conform; tree clean after each |
| Commit identity | `Juan Diego S. <88201583+jdsaire@users.noreply.github.com>` on all 15, matching every prior commit in the repository |

**Contrast, both themes.** Moving the type off the artwork and onto the card's own pinned ground
improved the ratios rather than holding them: title `#FFFFFF` on `#1E1E1E` ≈ **15.3:1**, category
`rgba(255,255,255,0.65)` ≈ **8.0:1**, and both now independent of what the illustration does
underneath. S8's `html[data-theme="light"] .work-card` block pins the card dark in light mode, and
the card surface gradient is written as literals rather than tokens for that same reason.

## Deviations

**One.** Recomposing the three capability illustrations to 768×512 departs from `AMENDMENT-F5` §2,
which directs that each replacement preserve *"the same aspect ratios already declared in each
file's own `viewBox`."*

The clause exists so that no markup, `data-i18n-alt` key or `og:image` reference has to change — and
none did. The layout is governed by `.services__image-slot { aspect-ratio: 3 / 2 }`, not by the
files, and matching that ratio is precisely what makes the artwork fill its container. Holding the
raster's original ratio is what produced the light-mode letterbox. The deviation was raised before
execution and directed by the principal.

No other deviation. Every other departure from the source prompt is a **correction of the prompt
against the governing set**, or an addition proposed and approved at a gate, and each is recorded
above.

## D3 auto-merge evaluation

| Condition | Result | Note |
|---|---|---|
| (a) touches only files enumerated in freeze §2 | **TRUE** | `assets/img/`, plus `index.html` markup and `work.css`, both named by A9's placeholder-container remedy |
| (b) the principal reviewed the localhost gate this session | **TRUE** | Reviewed at seven gates; each addition approved before execution |
| (c) no merge conflict | **TRUE** | Branch is 0 behind `main` after the PR #24 merge |
| (d) the completion report lists zero deviations | **FALSE** | One deviation, recorded above |

**Auto-merge is therefore not permitted.** The PR is left for manual merge, on condition (d).

The deviation is from a signed amendment rather than from the approved plan, and it was directed by
the principal before execution — so a reading under which (d) holds is defensible. That reading is
not taken unilaterally here. The condition is reported false and the merge decision left with the
principal, which is what D3 exists to protect.

The D3 carve-out does not apply: `assets/js/core/paths.js`, `navchrome.js`, `i18n.js` and both i18n
dictionaries are untouched by this run.

## Findings for a future amendment

Reported, not fixed, per the no-widening rule.

1. **`assets/img/bridge1_onboarding.svg`** (665,784 B) needs an **F6** resolving the contradiction
   inside F5: abstract vector art cannot carry alt text naming the person photographed, and the file
   is the sitewide `og:image`. This is the single asset keeping A18 false.
2. **`og:image` points at an SVG** on all four top-level pages. LinkedIn, X, Facebook and Slack do
   not render SVG social cards, so the site currently has no working preview image anywhere.
   Pre-existing, named by no §2 exit condition.
3. **`P-CC-S7-Assets-v1_0.xml` should be corrected** before any future run reuses its text: A9 is
   remove-and-contain, not delete-orphans, and `build-in-progress.svg` has not existed under that
   name since Wave 5.
