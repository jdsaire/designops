# assets/img/

The site's shared images. Each subfolder holds one kind; the files are images only, so the table says where each kind appears.

| File | Who it's for |
|---|---|
| [`logos/`](logos/) | The institution logos in Main's ticker and About, plus the GitHub and Figma marks |
| [`badges/`](badges/) | The credential badges on About |
| [`bridge-positioning/`](bridge-positioning/) | The portrait on Main, in three sizes and two formats |
| [`work/`](work/) | Main's work-card posters (`work-0N-*-{480,800}.webp`, raster, from an image round) and the line art the briefs' Keep exploring slides use (`*.svg`) |
| [`services/`](services/) | Main's capability images (`cap-0N-*-{480,800}.webp`, raster, from an image round) |
| [`imagery-manifest.json`](imagery-manifest.json) | Every raster image above: its round, budget, label key and status |
| [`bridge1_onboarding.svg`](bridge1_onboarding.svg) | The bridge artwork on Main, About and Contact |
| [`jdigital-logo-mini2.svg`](jdigital-logo-mini2.svg) | The small mark on Contact |

The site mark in its states is in [`../../logos/`](../../logos/); a brief's own images are in its `work/<brief>/img/` folder.

## Raster images

A raster image in `work/` or `services/` is listed in [`imagery-manifest.json`](imagery-manifest.json) with its round, budget and label key. It's made with AI, art-directed and chosen by Juan Diego, and every page that shows it carries the label (`ui_ai_imagery_note`) in that section. It's never re-encoded, swapped for an SVG or replaced without a new round and a manifest update. [`../../tools/imagery.py`](../../tools/imagery.py) checks all of this.
