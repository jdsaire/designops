/* pages/resume/main.js — Résumé page entry (PR #46): the opening that was About's hero, with the CV links, until the
   full page is built. paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initLegal }   from '../../core/legal.js';
import { init as initCv }        from './cv.js';
import { init as initDecoration } from '../../core/decoration.js';

setPage('resume/i18n/resume');

document.addEventListener('DOMContentLoaded', () => {
  initCv();   // before the engine's first event, which it listens for
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initLegal({ swapLang });
  initDecoration();
});
