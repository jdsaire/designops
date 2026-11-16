/* pages/design-system/main.js — the design system page's entry (v1.2.0; SY51-Q7, V120-Q1).
   The site's chrome (i18n, theme, progress, nav, legal overlay, decoration, the display opening's fit) plus three small
   behaviours of its own:
   - each swatch and ladder step shows its token's value as the browser resolves it, rewritten when the theme changes,
     so no value is copied into the page;
   - the dropdown specimen opens and closes from its own trigger (Escape closes and returns focus), the way the navbar's
     menus do (core/navchrome.js);
   - the specimens send nothing: the CTA button does nothing, and Enter in the form specimen is stopped (there is no form
     element, no action and no submit control).
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initLegal }   from '../../core/legal.js';
import { init as initDecoration } from '../../core/decoration.js';
import { init as initSlogan } from '../about/slogan.js';

setPage('design-system/i18n/design-system');

/* Each value as tokens.css declares it for the theme in force: hex upper-cased, rgba() without spaces. */
function paintTokens() {
  const root = getComputedStyle(document.documentElement);
  document.querySelectorAll('[data-token]').forEach(el => {
    const name = el.getAttribute('data-token');
    const raw = root.getPropertyValue(name).trim();
    el.style.setProperty('--sw', 'var(' + name + ')');
    const out = el.querySelector('.ds-swatch__value');
    if (out) out.textContent = raw.startsWith('#') ? raw.toUpperCase() : raw.replace(/\s+/g, '');
  });
}

function initDropdown() {
  const trigger = document.getElementById('dsMenuTrigger');
  const menu = document.getElementById('dsMenu');
  if (!trigger || !menu) return;
  const set = open => { trigger.setAttribute('aria-expanded', String(open)); menu.hidden = !open; };
  trigger.addEventListener('click', () => set(trigger.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Esc') { set(false); trigger.focus(); } });
  trigger.addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Esc') set(false); });
}

function initSpecimens() {
  document.querySelectorAll('[data-ds-noop]').forEach(b => b.addEventListener('click', e => e.preventDefault()));
  const forms = document.querySelector('.ds-specimen--forms');
  if (forms) forms.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input')) e.preventDefault(); });
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initLegal({ swapLang });
  initSlogan();
  initDecoration();
  paintTokens();
  initDropdown();
  initSpecimens();
  document.addEventListener('theme:changed', () => requestAnimationFrame(paintTokens));
});
