/* pages/contact/main.js — Contact page entry.
   Imports only the chrome this page needs plus the migrated contact organism and the display opening's fit.
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initContact }   from './contact.js';
import { init as initDecoration } from '../../core/decoration.js';
import { init as initSlogan } from '../about/slogan.js';   // the display opening's title fit, shared with About (PR43-Q29)

setPage('contact/i18n/contact');

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initContact();
  initSlogan();
  initDecoration();
});
