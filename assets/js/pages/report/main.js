/* pages/report/main.js — the issue report page's entry (PR #45 G1b; AIE-Q60…Q63, Q71).
   Contact's entry with the report page's dictionary: the same form organism (pages/contact/contact.js, which finds
   the form and its success modal by their ids and validates every required field) and the display opening's fit.
   Two small behaviours of its own: ?reason=<value> preselects that reason (the privacy policy links
   ?reason=privacy), and the page select's options borrow the nav overlay's icons (PR45-Q12).
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initLegal }   from '../../core/legal.js';
import { init as initContact }   from '../contact/contact.js';
import { init as initDecoration } from '../../core/decoration.js';
import { init as initSlogan } from '../about/slogan.js';

setPage('report/i18n/report');

/* Each page option names, in data-icon, the nav overlay row it stands for; its icon is cloned from there, so the
   form shows the same drawing as the phone menu and no icon is drawn twice. */
function pageIcons() {
  const overlay = document.getElementById('navOverlay');
  if (!overlay) return;
  document.querySelectorAll('#reportPage option[data-icon]').forEach(opt => {
    const icon = overlay.querySelector(opt.getAttribute('data-icon') + ' .nav__ov-icon');
    const slot = opt.querySelector('.page-opt__icon');
    if (icon && slot) slot.appendChild(icon.cloneNode(true));
  });
}

function initReport() {
  const reason = document.getElementById('reportReason');
  const wanted = new URLSearchParams(location.search).get('reason');
  if (reason && wanted && reason.querySelector('option[value="' + CSS.escape(wanted) + '"]:not([disabled])')) reason.value = wanted;
  pageIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initLegal({ swapLang });
  initContact();
  initReport();
  initSlogan();
  initDecoration();
});
