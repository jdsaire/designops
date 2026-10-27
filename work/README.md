# work/

The four case-study briefs, one folder each, served at `/work/<folder>/`. Each brief is one self-contained page: its styles and scripts are inline, its copy is in its own `i18n/` folder, and it links only the shared chrome from [`../assets/`](../assets/README.md).

| Folder | Who it's for |
|---|---|
| [`accreditapass/`](accreditapass/README.md) | Brief 01 · AccreditaPass, a press-accreditation companion app · sports |
| [`trust-verify-brief/`](trust-verify-brief/README.md) | Brief 02 · Trust & Verify · banking |
| [`airport/`](airport/README.md) | Brief 03 · TUUA Transfer · airport |
| [`portfolio-evolution/`](portfolio-evolution/README.md) | Brief 04 · Portfolio · software |
| `.gitkeep` | Keeps the folder in the repository; it holds nothing |

## Retired addresses

GitHub Pages serves static files only, with no server-side redirect, so a brief that moves leaves a one-page stub at its old address. The stub forwards at once, so an old link still answers instead of returning 404. Stubs stay where they are: moving one would break the address it exists to keep.

| Old address | Forwards to | Since |
|---|---|---|
| [`designops-system/`](designops-system/index.html) | `portfolio-evolution/` (Brief 04) | PR #26 (amendment F6-a) |
| [`front-end-evolution/`](front-end-evolution/index.html) | `portfolio-evolution/` (Brief 04) | PR #26 (amendment F6-a) |
| [`yape-trust-verify-brief/`](yape-trust-verify-brief/index.html) | `trust-verify-brief/` (Brief 02) | PR #44 |

A brief sits two levels below the root on purpose: the shared paths resolve from that depth ([`../docs/v3/IA-CONVENTION.md`](../docs/v3/IA-CONVENTION.md)).
