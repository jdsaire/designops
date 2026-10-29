# designops

**Juan Diego Saire — AI Product & Experience Engineer.** Lima, Peru.

I build high-performing websites and apps, translating business challenges into tested products using advanced AI.

This repository is the source of my portfolio site, in English and Spanish. The site is the front of **Product Lab**, an independent product lab: [the lab, on About](https://jdsaire.com/about/#lab).

**How I build.** I direct the AI on what to build and how, then I read the codebase it produced and change the exact lines that need changing. I don't write every line by hand, and I don't claim to build without touching code.

**Live:** https://jdsaire.com/ · [LinkedIn](https://linkedin.com/in/jdsaire/)

## The four briefs

Each brief is one case study, in English and Spanish. The line beside it is the brief's own opening.

| Brief | Open it | Its opening |
|---|---|---|
| Brief 01 · AccreditaPass · sports | [`work/accreditapass/`](work/accreditapass/README.md) | The World Cup like never before — My app guides press teams in their journey across the tournament. |
| Brief 02 · Trust & Verify · banking | [`work/trust-verify-brief/`](work/trust-verify-brief/README.md) | Fighting fraudulent payments — My app verifies that a Yape payment on a customer's screen is real. |
| Brief 03 · TUUA Transfer · airport | [`work/airport/`](work/airport/README.md) | Paying what was never paid — I designed the web prototype of new fee charged by Lima Airport. |
| Brief 04 · Portfolio · software | [`work/portfolio-evolution/`](work/portfolio-evolution/README.md) | This web. My web. — How I built and deployed this site with AI, end to end. |

Main ([`index.html`](index.html)), [About](about/README.md) and [Contact](contact/README.md) complete the site, with a page for reporting a problem with it ([`report/`](report/README.md)). Every page switches between English and Spanish, and between a dark and a light theme, and ends on the legal row: terms, license, the privacy policy and your privacy choices.

## Where everything lives

| Path | What it is |
|---|---|
| [`index.html`](index.html), [`i18n/`](i18n/) | Main and its own dictionaries. Main stays at the root, where every path on the site is resolved from |
| [`about/`](about/README.md), [`contact/`](contact/README.md), [`report/`](report/README.md) | One folder per page: the page and its own dictionaries |
| [`.well-known/`](.well-known/README.md) | Files other software looks for at a fixed address: `security.txt` |
| [`work/`](work/README.md) | The four briefs, one folder each, plus the retired addresses that still answer |
| [`assets/`](assets/README.md) | Everything shared: styles, scripts, the site-wide dictionaries, images, fonts, the CVs |
| [`logos/`](logos/) | The site mark, in its states |
| [`DICTIONARIES.md`](DICTIONARIES.md) | Every English/Spanish dictionary pair, with its key counts |
| [`tools/`](tools/README.md) | Checks anyone can run on a fresh clone: dictionary parity, links, unused keys, key order. Python 3, nothing to install |
| [`docs/`](docs/README.md) | The project's records, not the site: every run's plan and report, the specs, the standing rules, how a change ships |
| [`CHANGELOG.md`](CHANGELOG.md) | Every merged pull request, oldest first |

## Latest changes

| PR | Merged | What a reader sees | Plan · Report |
|---|---|---|---|
| [#45](https://github.com/jdsaire/designops/pull/45) | pending merge | A legal row on every page (terms, license, privacy policy, privacy choices) in one dark overlay; a page to report an issue; consent on both forms; the site's links, canonicals and a content policy on jdsaire.com | [plan](docs/v4/cc-plans/Plan-PR45-GoLive.md) · [report](docs/v4/cc-completion-reports/pr45-go-live-completion-report.md) |
| [#44](https://github.com/jdsaire/designops/pull/44) | 27 Oct 2026 | This repository opens on who built it, with this changelog; Brief 02 moves to `work/trust-verify-brief/` and gains three act ledes | [plan](docs/v4/cc-plans/Plan-PR44-RepoHygiene.md) · [report](docs/v4/cc-completion-reports/pr44-repo-hygiene-completion-report.md) |
| [#43](https://github.com/jdsaire/designops/pull/43) | 21 Oct 2026 | About rebuilt around the lab; an index on every brief; icons in the phone menu | [plan](docs/v4/cc-plans/Plan-PR43-AboutLab.md) · [report](docs/v4/cc-completion-reports/pr43-about-lab-completion-report.md) |
| [#42](https://github.com/jdsaire/designops/pull/42) | 19 Oct 2026 | Each brief explains its solution in three illustrated reasons; Brief 01 gains its context | [plan](docs/v4/cc-plans/Plan-PR42-SolutionAct.md) · [report](docs/v4/cc-completion-reports/pr42-solution-act-completion-report.md) |
| [#41](https://github.com/jdsaire/designops/pull/41) | 17 Oct 2026 | A README in every folder, a dictionary map and the checks in `tools/`; six invisible clean-ups | [plan](docs/v4/cc-plans/Plan-PR41-RepoHygiene.md) · [report](docs/v4/cc-completion-reports/pr41-repo-hygiene-completion-report.md) |

The full list, from the first pull request: [`CHANGELOG.md`](CHANGELOG.md).
