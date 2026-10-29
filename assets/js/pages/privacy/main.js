/* pages/privacy/main.js — the privacy policy's page entry (PR #45, AIE-Q26).
   The site's chrome only: language, theme, scroll progress, the nav, the footer's legal row and the decoration.
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initLegal }   from '../../core/legal.js';
import { init as initDecoration } from '../../core/decoration.js';

setPage('privacy/i18n/privacy');

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initLegal({ swapLang });
  initDecoration();
});
