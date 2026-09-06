/* pages/capabilities/main.js — Capabilities page entry.
   Imports only the chrome this page needs plus the migrated carousel.
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initCarousel }  from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initCarousel();
});
