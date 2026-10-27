# docs/

The project's records: how the site was built and decided, run by run. The site never loads these files. They stay in the folder of the iteration that wrote them (`v1/` to `v4/`): hundreds of other records cite those paths, so the paths never move, and this page indexes them by type instead.

## Build runs

Every run's plan and completion report is linked from the pull request that shipped it in [`../CHANGELOG.md`](../CHANGELOG.md), oldest first. Runs from S5 on are archived in [`v4/`](v4/README.md); Waves 5 and 6 in [`v3/`](v3/README.md); Wave 4 in [`v2/`](v2/README.md) and [`v1/`](v1/README.md).

## How a change ships

Each change starts as a written brief and becomes a plan, approved before any file changes. It is built in gates, each reviewed on a local server and released by an exact phrase, and it ends with a completion report archived here. Every pull request follows [`../.github/pull_request_template.md`](../.github/pull_request_template.md), and its documentation travels with it ([SR-4](v4/STANDING-RULES.md)): the READMEs, indexes and maps that list a file change in the same pull request as the file.

## Specs and live specimens

| Spec | Who it's for |
|---|---|
| [`decoration-system.spec.md`](v3/organisms/decoration-system.spec.md) | Anyone adding or changing motion or ornament: the floor, budget, patterns and exceptions. Specimen: [`decoration-system.html`](v3/organisms/decoration-system.html) |
| [`motion-system.spec.md`](v3/organisms/motion-system.spec.md) | Anyone changing state motion. Specimen: [`motion-system.html`](v3/organisms/motion-system.html) |
| [`gantt-organism.spec.md`](v3/organisms/gantt-organism.spec.md) | Anyone building a roadmap chart. Specimen: [`gantt-organism.html`](v3/organisms/gantt-organism.html) |
| [`IA-CONVENTION.md`](v3/IA-CONVENTION.md) | Anyone adding a page or a file: where things go, and the paths that never move |

## Standing rules

| File | Who it's for |
|---|---|
| [`STANDING-RULES.md`](v4/STANDING-RULES.md) | Anyone making a change: rules that outlive the run that introduced them, SR-1 to SR-4, each with its reason |

## History

| Folder | Who it's for |
|---|---|
| [`v1/`](v1/README.md) | The first roadmap and the repository reorganisation |
| [`v2/`](v2/README.md) | The second roadmap, the pivot and Trust & Verify's first build |
| [`v3/`](v3/README.md) | The third roadmap, the multi-page site and the information architecture |
| [`v4/`](v4/README.md) | Every run from S5 to the latest, and the standing rules |
| [`briefs-v0/`](briefs-v0/README.md) | The Gate 1 drafts of the first three briefs |
| [`parking-lot.md`](parking-lot.md) | Ideas set aside, one line each. Frozen since S1; kept where 24 records cite it |

Looking for the site's own files instead? Start at the root [`README.md`](../README.md).
