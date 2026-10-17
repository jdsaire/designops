# designops

The source of Juan Diego Saire's portfolio site, in English and Spanish: Main, About, Contact and four case-study briefs, written in plain HTML, CSS and JavaScript with no framework and no build step.

**Live:** https://jdsaire.github.io/designops/

## What you'll find on the site

| Page | Path | What it is |
|---|---|---|
| Main | [`index.html`](index.html) | The front page: the offer, the work, the capabilities, a way in to every brief |
| About | [`about/`](about/README.md) | The journey, the credentials and the CV downloads |
| Contact | [`contact/`](contact/README.md) | The contact form and the outbound links |
| Brief 01 · AccreditaPass · sports | [`work/accreditapass/`](work/accreditapass/README.md) | Never miss a match |
| Brief 02 · Trust & Verify · banking | [`work/yape-trust-verify-brief/`](work/yape-trust-verify-brief/README.md) | The screenshot says paid. My app asks the bank. |
| Brief 03 · TUUA Transfer · airport | [`work/airport/`](work/airport/README.md) | Paying what was never paid |
| Brief 04 · Portfolio · software | [`work/portfolio-evolution/`](work/portfolio-evolution/README.md) | A design system I built and govern end to end |

Every page switches between English and Spanish and between a dark and a light theme from its menu.

## Run it locally

The scripts load as ES modules, which browsers run only over `http://`, not from a `file://` path. Serve the repository root with any static server:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Where things live

| Path | What it is |
|---|---|
| [`index.html`](index.html) | Main. It stays at the root, where every path on the site is resolved from |
| [`about/`](about/README.md), [`contact/`](contact/README.md) | One folder per page: the page and its own dictionaries |
| [`work/`](work/README.md) | The four briefs, one folder each, plus two retired addresses that still answer |
| [`assets/`](assets/README.md) | Everything shared: styles, scripts, the site-wide dictionaries, images, fonts, the CVs |
| [`DICTIONARIES.md`](DICTIONARIES.md) | Every English/Spanish dictionary pair, by level, with its key counts |
| [`i18n/`](i18n/) | Main's own English and Spanish dictionaries |
| [`logos/`](logos/) | The site mark, in its states |
| [`docs/`](docs/README.md) | **The project's records, not the site:** every build's plan and report, the specs, the standing rules |
| [`tools/`](tools/README.md) | The checks anyone can run: dictionary parity, links, unused keys, key order. Python 3, nothing to install |
| [`.github/`](.github/) | A Pages workflow file and the pull-request template |
| `.nojekyll` | Tells GitHub Pages to serve every file as it is |
| `.gitignore` | Keeps system, editor and secret files out of the repository |

The folder layout follows one rule: what belongs to one page lives in that page's folder; what is shared stays in `assets/`. [`docs/v3/IA-CONVENTION.md`](docs/v3/IA-CONVENTION.md) sets it out, with the paths that can never move.

## Where the decisions live

- [`docs/README.md`](docs/README.md): every run's plan and completion report, the specs and the history, indexed by type.
- [`DICTIONARIES.md`](DICTIONARIES.md): where every word on the site lives, in both languages.
- [`docs/v4/STANDING-RULES.md`](docs/v4/STANDING-RULES.md): rules that outlive the run that introduced them, each with its reason.
- [`docs/v3/organisms/`](docs/v3/organisms/README.md): the decoration, motion and roadmap specs, each with a live specimen page.

## How a change ships

Each change starts as a written brief and becomes a plan, approved before any file changes. It is built in gates, each reviewed on a local server and released by an exact phrase, and it ends with a completion report archived under [`docs/`](docs/README.md). Every pull request follows [`.github/pull_request_template.md`](.github/pull_request_template.md), and its documentation travels with it (SR-4 in the standing rules): the READMEs, indexes and maps that list a file change in the same pull request as the file.

## Deployment

GitHub Pages serves this repository from the root of `main`, with no build step: what is merged is what is live. Pull requests are merged by hand.

## Author

Juan Diego Saire, AI Product & Experience Engineer. [LinkedIn](https://linkedin.com/in/jdsaire/)
