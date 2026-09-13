# S10-C · Main Organism Hygiene — Completion Report

**Repo:** `jdsaire/designops` · **Branch:** `deploy/v14-s10c-main-organism-hygiene`, created from `origin/main` `63813c9`
**Pull request:** https://github.com/jdsaire/designops/pull/27 — open, unmerged; the principal merges
**Authority:** `AMENDMENT-F7-ContentHygiene-v1_0` §1 (signed 12-SEP-2026) · **Source list:** `P-raw-10C.txt`
**Source prompt:** `P-CC-S10C-MainOrganismHygiene-v1_0.xml`, corrected before execution as `-v1_1` (both kept outside the repo)
**Approved plan:** `docs/v4/cc-plans/Plan-S10C-MainOrganismHygiene.md`
**Run:** 13 Sep 2026 · 23 commits plus this archive · a plan gate and seven localhost gates, each halted and released by hand

---

## 1. Outcome

Main now reads hero → Work → Capabilities → About → Contact, and the About child page opens on the portrait bridge.

**Main**
- The hero headline is centred. Below it sits the attribution, retitled "Juan Diego Saire — Frontend Engineer" in the headline's colour, with the location badge beneath it.
- The onboarding bridge left Main for the top of `about/`.
- Track Record left Main. Its editorial and four visible figures, with their count-up, follow the bridge on `about/`.
- The credential tickers stayed on Main, under the About editorial.
- About leads with "My orchestration journey." and its CTA; Contact leads with its CTA. Neither has a lede now.
- **Stale copy:** six stale inline fallbacks inside `<main>` now carry their dictionary values, and five hard-coded CTA aria-labels are bound to their keys.
- **Work** (principal-directed extras): the carousel cards keep the desktop tile's proportion, so their art is never clipped, and "Access Brief" takes the Contact CTA's form.
- **Capabilities** (principal-directed extras): on phones the three pillars are the legacy slide carousel instead of a vertical stack.

**Invariants**
- *Content relocated, never authored.* It held. Every new visible string was supplied by the principal: the About headline and both attribution strings.
- *SwapLang and SwapTheme work after every change.* It held. The headless toggle audit ran after every item, and the principal toggled at each gate.

| Exit condition | State |
|---|---|
| F7 §1 — content cuts in named Main organisms, component migration to `about/` | **Met.** All P-raw-10C items executed as re-read against live HEAD (§4). Items 5 and 7 and the general-codebase item, which v1_0 had declared not applicable, were done. |

## 2. Gates — which phrase released which, and what was re-presented

| Gate | Scope | Rounds | Released by |
|---|---|---|---|
| Plan | Corrected plan (seven v1_0 premises fixed) | 1 | Plan approval |
| 1 | i18n hygiene | 1 | `APPROVED GATE 1` |
| 2 | Hero | 3: attribution retitle and badge stacking; attribution colour | `APPROVED GATE 2`, sent in the same message as the final correction, after it was applied |
| 3 | Bridge to `about/` | 1, plus a mid-gate question on the light-theme attribution, answered by measurement | `APPROVED GATE 3` |
| 4 | Track Record split | 2: item-6 middle-align reverted | `APPROVED GATE 4`, sent in the same message as the regression, after it was applied |
| 5 | About and Contact editorials | 2: About-to-ticker gap cut by a third; hero gap doubled (a Gate 2 scope item) | `APPROVED GATE 5` |
| 5A | Work (added mid-run) | 1 | `APPROVED GATE 5A`, with Gate 5 |
| 5B | Capabilities mobile carousel (added mid-run) | 2: slide image bands removed; Work cards' purple glow dropped on light mobile | `APPROVED GATE 5B` |
| 6 | Verification sweep | 1 | `APPROVED GATE 6` |

## 3. Commits

In order, on `deploy/v14-s10c-main-organism-hygiene`, after `63813c9`, bundled in PR #27:

- `ed26389` — fix(home): align stale inline fallbacks with the live dictionaries
- `7719a8a` — fix(i18n): bind hard-coded CTA aria-labels to their existing keys
- `fc79f0d` — feat(hero): move the attribution and badge below the headline, centred
- `e060349` — fix(hero): stack the badge under the attribution
- `34a5b94` — feat(i18n): retitle the hero attribution to Frontend Engineer
- `3b791d0` — style(hero): set the attribution in solid white
- `4b3d391` — refactor(about): move the onboarding bridge from Main to the top of About
- `0919e0c` — feat(about): retire the page-hero editorial; the bridge opens the page
- `b85180c` — style(about): middle-align the bridge heading and portrait
- `3903b03` — feat(home): move the credential tickers into the About organism
- `6cd9a0a` — refactor(about): move Track Record's editorial and figures below the bridge
- `4b1ca6e` — docs(home): correct the About section's banner comment
- `49ec8d8` — revert(about): restore the bridge's original alignment
- `26bb75e` — feat(home): About leads with the journey headline and its CTA
- `b81b744` — feat(home): Contact goes CTA-forward
- `9e455cb` — style(hero): double the gap between the headline and the meta stack
- `f63cc23` — style(home): cut the About editorial-to-ticker gap by a third
- `09132d9` — fix(work): keep the card's desktop proportion in both carousels
- `3950d2c` — feat(work): Access Brief takes the Contact CTA's form
- `bb4efd5` — feat(capabilities): the legacy slide carousel carries Main's three pillars on mobile
- `3f48189` — fix(capabilities): keep the mobile slides inside the gutters
- `09ff0c5` — fix(capabilities): drop the blank bands around the mobile slide art
- `23be6e4` — style(work): drop the cards' purple glow on light mobile
- (this commit) — docs: archive S10C main organism hygiene plan and completion report

23 commits before this one, one per item. Each gate correction is its own commit. `b85180c` stays in history, followed by its revert `49ec8d8`, rather than being rewritten away. No item was split; the Gate 2 correction was split into a layout commit and a copy commit.

## 4. Per-item results (P-raw-10C, read against live HEAD)

| Item | Result |
|---|---|
| General codebase: orphaned copy | Done (`ed26389`, `7719a8a`). The "orphaned copy" was stale inline fallback text, which i18n.js paints during the dictionary fetch and wherever a key is missing. |
| 1: attribution to the hero | Done (`fc79f0d`). Later retitled by the principal (`34a5b94`). |
| 2: badge below the headline | Done (`fc79f0d`). Stacked under the attribution by the principal (`e060349`). |
| 3: centre the headline and its companions | Done (`fc79f0d`, `9e455cb`) |
| 4: bridge to the top of `about/` | Done (`4b3d391`) |
| 5: delete `about/`'s editorial | Done (`0919e0c`). The pagehero was live, so the bridge heading was promoted to the page's single h1. |
| 6: middle-align heading and image | Done (`b85180c`), then **reverted by the principal** (`49ec8d8`): it trimmed the portrait. |
| 7: swapped descriptions | Done (`4b1ca6e`). The section *banner comments* were swapped; the markup was not. |
| 8a: About headline, lede hidden, CTA in its place | Done (`26bb75e`), through `home_about_head` |
| 8b: tickers inside the About organism | Done (`3903b03`, `f63cc23`) |
| 8c: Track Record remainder to the About child | Done (`6cd9a0a`) |
| Contact: lede hidden, CTA in its place | Done (`b81b744`) |

## 5. Verification (Gate 6)

| # | Criterion | Result |
|---|---|---|
| 1 | Every gate halted and released only on its phrase | PASS: §2 |
| 2 | Main fallbacks match the dictionaries | PASS: 0 substantive mismatches in `<main>`; `capabilities_lede` differs by a dictionary leading space only |
| 3 | Hero: attribution then badge below a centred headline, EN and ES | PASS: headline-to-stack gap 50.4 / 30 / 30px at 1440 / 768 / 375 |
| 4 | Bridge and Track Record absent from Main; `about/` opens with the bridge (one h1), then Track Record (four figures), then the timeline | PASS: 0 links to either anchor anywhere; one visible h1 on `about/` |
| 5 | Tickers in Main About, below its editorial | PASS: CTA-to-lane gap 61.1 / 45 / 45px, two thirds of the previous stacked gap |
| 6 | About headline via `home_about_head`; `evolution_*` untouched | PASS |
| 7 | No lede in Main About or Contact; CTAs forward | PASS |
| 8 | Every key on the touched pages resolves in en.json; no new ES gap | PASS: 71 + 56 keys; 0 new ES gaps |
| 9 | Sole author; zero attribution; PR open, unmerged, URL printed | PASS: 23/23 commits authored and committed as `Juan Diego S. <88201583+jdsaire@users.noreply.github.com>`; commit messages, added lines, branch name and PR body scanned; PR URL above |
| 10 | Archive committed; indexes updated; internal markdown links unchanged | PASS: 0/0 relative links before and after (the repo cites paths in backticks) |
| — | Language and theme toggles through the real controls | PASS: index, `about/` and `contact/`, ES-first → EN → light → ES/dark; 0 mismatches, 0 console errors |
| — | Served references | PASS: 78/78 (src, href and module imports) |
| — | Duplicate ids | PASS: none on either page |
| — | Work art clipping | PASS: 0px at 320 / 375 / 414 / 768 / 1024 / 1440, down from up to 96px |
| — | Mobile capabilities carousel | PASS: next, wrap, previous-wrap and swipe each resync the active slide; slide image band 14.5px → 0px |
| — | Local `main` untouched | PASS: still `737d7f6`, and `origin/main` still `63813c9` at push |

## 6. Deviations, decisions, and what stays open

### Corrections to the source prompt, made before execution

v1_0 was re-verified against `63813c9` and corrected in v1_1, outside the repo:

1. It declared the general-codebase item not applicable. Sixteen stale fallbacks existed.
2. It read item 7 as a content swap and barred it. The item names swapped banner comments.
3. It sent the tickers to `about/`. Item 8b names the About *organism*; only 8c names the About *child*.
4. It declared item 5 superseded. It had confused `about/`'s live pagehero with Main's About.
5. It would have overwritten `evolution_heading`. That key is also bound on `about/`, so the About child page would have changed too.
6. It annotated a parking-lot line that exists only in an unpushed local commit.
7. Its scope ceiling omitted the CSS and JS the moves depend on.

### Authorized deviations (principal-directed)

- **Attribution retitled in both dictionaries** (`34a5b94`). EN "Juan Diego Saire — Frontend Engineer" and ES "Juan Diego Saire — Ingeniero Frontend." are both principal-supplied. es.json changed only here, a named exception to the no-Spanish rule.
- **Badge stacked under the attribution** (`e060349`). **Attribution in the headline's colour token** (`3b791d0`): white on dark, the theme's `#0A0A0A` ink on light.
- **Headline-to-stack gap doubled** (`9e455cb`), as a trial value.
- **Item 6 reverted** (`49ec8d8`).
- **About-to-ticker gap cut to two thirds** (`f63cc23`).
- **Work and Capabilities extras**, outside P-raw-10C and F7 §1, authorised by principal direction and recorded here for the closure audit:
  - card proportion in both carousels (`09132d9`), including tablet, which also clipped;
  - Access Brief in the Contact CTA form at every breakpoint (`3950d2c`);
  - the mobile slide carousel (`bb4efd5`);
  - slide image bands removed (`09ff0c5`);
  - the Work cards' purple glow dropped on light mobile (`23be6e4`). "Card containers" was read as the Work tiles, the only purple container glow in either organism; this reading was presented at the gate and approved.
- **The parking-lot annotation was dropped** by ruling. See Open.

### Decisions made during execution, each presented at its gate

- **`bridge.css` stays linked on Main.** The plan said to unlink it. The `.img-alt-host` hover captions of Main's capability images live in that file.
- **Bridge portrait loads eagerly.** It now sits above the fold.
- **Bridge heading promoted to h1.** `about/` keeps a single h1.
- **Track Record overrides scoped to `#track-record`.** On `about/`, `designops-variant.css` loads after `evolution.css`, so a verbatim move would have lost to the shared five-column rule.
- **The count-up moved to a new `pages/about/stats.js`.**
- **Contact CTA gap = About's.** `clamp(2rem, 3.5vw, 3.5rem)`, the shared header margin plus the About CTA margin.
- **The capabilities carousel was imported from this repo.** It came from `capabilities/index.html`, whose chassis is identical to `jdsaire/legacy-desops`, not copied across repositories. `carousel.js` is imported from its page folder. The three stale slide fallbacks were set to Main's current copy.
- **The chassis's right-gutter bleed was cancelled on mobile** (`3f48189`). It ran each slide to the screen edge, the same clip visible on the legacy site.
- **F3.6 and F3.4 hold.** F3.6's hidden per-vertical CTAs stay hidden in the carousel, through the chassis's own mobile rules. F3.4 is untouched: `capabilities/` stays hidden.

### Open, carried forward

**S9 inputs**
- `home_about_head` ES is stale: it still reads "El estratega que aprendió a construir."
- `bridge1_onboarding_image_alt`, the meta description and `og:description` still say "UX Engineer and DesignOps Specialist" and "from feasible to shipped". None has a key.
- EN-only aria-labels: work-card links, "Close summary", "Card N of 4", section and ticker-lane labels, and the carousel's "Previous", "Next", "Previous capability", "Slide N of 3" and "Capabilities".
- The portrait's hover caption (`span.img-alt-host[alt]`), which i18n.js cannot reach.
- Pre-existing ES gaps: `work_card1/3/4_*`, `work_card2_label`, `evo_m3/4/6/7_rv_*`.

**Residuals**
- Nav Work-menu fallbacks (8) and the footer dash still drift from the dictionaries. The nav is already parked, and both repeat on four pages.
- The 10C and 10D parking-lot entries exist only in unpushed local commit `737d7f6`, on local `main`, and are not in this PR.
- Keys now unbound on the site: `home_contact_lede`, `home_about_lede`, `about_hero_head`, `about_hero_lede`. They're candidates for the closure audit.
- The Work card 4 CTA points to `work/front-end-evolution/`, while the nav points to `work/portfolio-evolution/`. Both resolve.
- At 768px, the bridge's 50/50 split wraps its heading into a narrow column. This is pre-existing, noted for 10B.

## 7. Auto-merge criteria

**Not eligible.** The run edits both i18n dictionaries, which are barred from auto-merge under every condition. The principal merges PR #27 by hand.
