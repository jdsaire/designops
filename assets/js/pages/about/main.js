/* pages/about/main.js — About page entry.
   Imports only the chrome this page needs plus the migrated evolution timeline
   (the track record's count-up moved to core/decoration.js, PR #35) and the
   CV links, which follow the reader's language (cv.js, PR #36). PR #43: the two arcs' carousels (core/carousel.js),
   their milestones (evolution.js) and their slogans (slogan.js); About carries no index (PR43-Q24).
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initEvolution } from './evolution.js';
import { init as initCv }        from './cv.js';
import { init as initDecoration } from '../../core/decoration.js';
import { init as initSlides, sessionStore } from '../../core/carousel.js';
import { init as initSlogan } from './slogan.js';

setPage('about/i18n/about');

document.addEventListener('DOMContentLoaded', () => {
  initCv();
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initEvolution();
  initSlides({ store: sessionStore('about:ui') });   // the two manifesto carousels (PR #43)
  initSlogan();  // the arc slogans fit their column (PR #43)
  initDecoration();
});
