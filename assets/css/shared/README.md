# assets/css/shared/

Components that appear on more than one page. Each file says in its first comment what it styles and which pages link it.

| File | Who it's for |
|---|---|
| [`nav.css`](nav.css) | The navigation bar, the Work menu and the phone menu. Every page |
| [`footer.css`](footer.css) | The footer and its closing statement. Every page |
| [`legal.css`](legal.css) | The footer's legal row and the site's one overlay (terms, license, privacy policy, privacy choices), and links inside a sentence. Every page |
| [`switch.css`](switch.css) | The site's one on/off switch: a purple pill with a round white knob. Every page (the footer's privacy choices) |
| [`cta.css`](cta.css) | The site's one call to action: a bold label beside a purple arrow square. Main, About, Contact and the report page; the four briefs still carry their own copy |
| [`progress.css`](progress.css) | The scroll progress bar at the top. Every page |
| [`decoration.css`](decoration.css) | The decoration patterns, governed by [`../../../docs/v3/organisms/decoration-system.spec.md`](../../../docs/v3/organisms/decoration-system.spec.md). Every page |
| [`relay.css`](relay.css) | The relay organism: Brief 03's handoff tracks and one-row relays, and the phone schedule timeline of Briefs 01, 02 and 04. All four briefs |
| [`brief-charts.css`](brief-charts.css) | The briefs' charts, card scrollers and read-time switch. Briefs 01, 02 and 04 |
| [`dashboard.css`](dashboard.css) | The dashboard organism: "The figures", the figures, "What it means" and the insights, opening and closing with the same space. About and Briefs 01, 02 and 04 |
| [`editorial.css`](editorial.css) | The site's one editorial standard: eyebrow, heading (Main's headline) and lede, their spacing, and where they centre. Main, About, Contact and all four briefs |
| [`display.css`](display.css) | The display opening: pulsing label, display title in Main's hero grammar, purple subline. About's arcs and the Contact page |
| [`brief-index.css`](brief-index.css) | The sticky index under a brief's hero (buttons from 768, a select below) and the closing rule that ends a brief. All four briefs |
| [`brief-ending.css`](brief-ending.css) | How a brief ends: the Keep exploring carousel and the Contact organism. All four briefs |
| [`carousel.css`](carousel.css) | The slide carousel: Act 03 in all four briefs, Keep exploring at their end, and About's two manifestos, with its illustration tag and per-slide call to action from 768. The offset follows the layout through a resize. All four briefs and About |
| [`carousel-phone.css`](carousel-phone.css) | One phone carousel style below 768, for Main's capabilities carousel and the briefs' Act 03. Main and all four briefs |
| [`bridge.css`](bridge.css) | The portrait-and-heading bridge. Main and About |
| [`ticker.css`](ticker.css) | The credentials ticker. Main |
| [`channels.css`](channels.css) | A row of outbound links, each an icon and a label. About and Contact |
| [`page-hero.css`](page-hero.css) | The hero and section basics of the dedicated pages. About and Contact |
| [`section-extras.css`](section-extras.css) | Shared section details, including the illustration tag on Main's capability images. Main, About and Contact |
| [`designops-variant.css`](designops-variant.css) | The capabilities, evolution and track-record variants. Main, About and Contact |

Styles only one page uses go in [`../pages/`](../pages/README.md).
