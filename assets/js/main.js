/* assets/js/main.js — ES-module entry point.
   Imports every feature module and initializes them, in original
   execution order, inside one DOMContentLoaded handler. */
import { init as initI18n }      from './core/i18n.js';
import { init as initNav }       from './home/nav.js';
import { init as initOverlay }   from './home/overlay.js';
import { init as initHero }      from './home/hero.js';
import { init as initWork }      from './home/work.js';
import { init as initCarousel }  from './home/carousel.js';
import { init as initEvolution } from './home/evolution.js';
import { init as initContact }   from './home/contact.js';
import { init as initTicker }    from './home/ticker.js';

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
