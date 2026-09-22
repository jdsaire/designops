# Plan — W1 · Copy injection, Main and About, English and Spanish

Approved plan for deploy v17, on `deploy/v17-w1-copy-injection`, branched from `4267a65`.
Three scheduled stops were planned; two more were added during the run at the principal's
direction. The plan below is the version as approved, with those additions marked.

## Objective

Bring Main and the About page's opening bridge onto the positioning locked on 20 Sep 2026,
in both languages, in one pull request, so the site reads correctly for a visitor whose
browser holds no language preference and therefore sees Spanish.

## Ground rules

- Every string comes from the approved copy locks, byte for byte, or from the principal's
  own edits made on disk while a gate was open. The run writes no copy of its own.
- Spanish is never hand-written: it arrives from one pass of the Spanish copy skill over
  approved English, and English is gated before Spanish.
- Both dictionaries and two shared scripts change, so the pull request merges by hand.
- A gate is a scheduled stop, released only by its own literal phrase.

## Sequence

**Setup.** Bring the working copy to `origin/main`, install the headless harness in the
session scratchpad (never in the repository), capture a baseline of every surface at
390 / 768 / 1440 px in dark and light in both languages, then branch.

**English.** The approved English values for Main and the About bridge; the new keys; the
markup the new copy needs; Main's head metadata; the fourth work card's route and
accessible name.

**Gate 1 — English, both pages.** Review on a local server. The dictionaries are the
principal's to edit on disk while the gate is open; every edit is recorded and never
overwritten by a re-application of a lock.

**Spanish.** One skill pass over the English approved at Gate 1, for the keys whose
English changed or is new; the rest of the Spanish from the approved lock, under the
renamed keys.

**Gate 2 — Spanish, both pages.** The Spanish hero's wrap is checked first and alone.

**Gate 2B — the mobile navbar** *(added mid-run)*. The overlay is rebuilt as three
left-aligned groups — sitemap, theme, language — with a Home row, no chevrons, the
current page marked, and the hide-on-scroll bar fixed.

**Pre-merge.** Re-measure the key inventory, run the code review, open the pull request
and print its URL, archive the plan and this report.

**Gate 3 — pre-merge.** The principal merges by hand. The run never merges.

## Scope taken on during the run, at the principal's direction

Each of these overrides a line in the dispatch brief and is logged as a ruling in the
phase changelog: key renames and the dictionary reorder; removal of every unreferenced
key; the Contact page's reason dropdown; removal of the Innova ULima mark; the mobile
navbar rebuild; and the two chrome bugs — the editorial text that faded after interacting
with an organism, and the navigation bar that stayed hidden after scrolling up.

## What this run does not do

No new component, stylesheet or asset for the copy itself. No change to the form's
destination, fields or success behaviour. No English on the About page outside its opening
bridge. No merge.
