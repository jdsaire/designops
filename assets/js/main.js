/* assets/js/main.js — ES-module entry point.
   Imports every feature module and initializes them, in original
   execution order, inside one DOMContentLoaded handler. */
import { init as initI18n }      from './core/i18n.js';
import { init as initNav }       from './pages/home/nav.js';
import { init as initOverlay }   from './pages/home/overlay.js';
import { init as initHero }      from './pages/home/hero.js';
import { init as initWork }      from './pages/home/work.js';
import { init as initCarousel }  from './pages/home/carousel.js';
import { init as initEvolution } from './pages/home/evolution.js';
import { init as initContact }   from './pages/home/contact.js';
import { init as initTicker }    from './pages/home/ticker.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNav();
  initOverlay();
  initHero();
  initWork();
  initCarousel();
  initEvolution();
  initContact();
  initTicker();
});
