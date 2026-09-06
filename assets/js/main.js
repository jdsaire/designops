/* assets/js/main.js — Home (Main) ES-module entry point.
   Imports the feature modules whose DOM lives on Main and initializes them,
   in original execution order, inside one DOMContentLoaded handler.
   W6.2.2: the scrollspy (nav.js), capabilities carousel, evolution timeline,
   and contact organism left Main — their modules are no longer imported here
   (carousel/evolution/contact now run from their dedicated page entries).
   S4: the work tag filter is removed from Main; its module is gone too. */
import { init as initI18n, swapLang } from './core/i18n.js';
import { init as initTheme }   from './core/theme.js';
import { init as initProgress }  from './core/progress.js';
import { init as initNavChrome } from './core/navchrome.js';
import { init as initHero }      from './pages/home/hero.js';
import { init as initWork }      from './pages/home/work.js';
import { init as initTicker }    from './pages/home/ticker.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initHero();
  initWork();
  initTicker();
});
