/* pages/about/main.js — About page entry.
   Imports only the chrome this page needs plus the migrated evolution timeline.
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initEvolution } from './evolution.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initEvolution();
});
