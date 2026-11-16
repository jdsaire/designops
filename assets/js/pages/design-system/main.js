/* pages/design-system/main.js — the design system page's entry (v1.2.0; SY51-Q7, V120-Q11…Q18).
   The site's chrome (i18n, theme, progress, nav, legal overlay, decoration, the display opening's fit) and the briefs'
   index (core/brief-index.js) and Brief 03's stakeholder network (core/net.js, its strings in assets/i18n/briefs/net),
   plus two behaviours of its own, so no token value is copied into the page:
   - each swatch and ladder step shows its token's value for the theme in force, rewritten when the theme changes;
   - the dark-vs-light table shows both themes' values side by side, read from tokens.css's own two rules (:root and
     html[data-theme="light"]); a row whose two values match carries is-same.
   paths.js arrives transitively via i18n.js + navchrome.js. */
import { init as initI18n, swapLang, setPage } from '../../core/i18n.js';
import { init as initTheme }   from '../../core/theme.js';
import { init as initProgress }  from '../../core/progress.js';
import { init as initNavChrome } from '../../core/navchrome.js';
import { init as initLegal }   from '../../core/legal.js';
import { init as initDecoration } from '../../core/decoration.js';
import { init as initIndex }   from '../../core/brief-index.js';
import { init as initNet }     from '../../core/net.js';
import { sessionStore }        from '../../core/carousel.js';
import { init as initSlogan } from '../about/slogan.js';

setPage(['assets/i18n/briefs/net', 'design-system/i18n/design-system']);

const tidy = v => (v.startsWith('#') ? v.toUpperCase() : v.replace(/\s+/g, ''));
/* A bare "r,g,b" channel (--ink, --ground) is painted as that colour. */
const paintable = v => (/^\d+\s*,\s*\d+\s*,\s*\d+$/.test(v) ? 'rgb(' + v + ')' : v);

function paintTokens() {
  const root = getComputedStyle(document.documentElement);
  document.querySelectorAll('[data-token]').forEach(el => {
    const name = el.getAttribute('data-token');
    el.style.setProperty('--sw', 'var(' + name + ')');
    const out = el.querySelector('.ds-v');
    if (out) out.textContent = tidy(root.getPropertyValue(name).trim());
  });
}

function paintThemes() {
  const dark = {}, light = {};
  for (const sheet of document.styleSheets) {
    if (!sheet.href || !sheet.href.includes('/base/tokens.css')) continue;
    let rules; try { rules = sheet.cssRules; } catch (e) { continue; }
    for (const r of rules) {
      const into = r.selectorText === ':root' ? dark : r.selectorText === 'html[data-theme="light"]' ? light : null;
      if (!into || !r.style) continue;
      for (const p of r.style) if (p.startsWith('--')) into[p] = r.style.getPropertyValue(p).trim();
    }
  }
  document.querySelectorAll('[data-pair]').forEach(row => {
    const n = row.getAttribute('data-pair');
    const d = dark[n] || '', l = light[n] || d;
    row.querySelector('.ds-d').textContent = tidy(d);
    row.querySelector('.ds-l').textContent = tidy(l);
    row.querySelector('.ds-sw-d').style.background = paintable(d);
    row.querySelector('.ds-sw-l').style.background = paintable(l);
    row.classList.toggle('is-same', d === l);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initProgress();
  initNavChrome({ swapLang });
  initLegal({ swapLang });
  initSlogan();
  initDecoration();
  initIndex();
  initNet({ store: sessionStore('ds:ui') });   // the organism: Brief 03's stakeholder network (core/net.js)
  paintTokens();
  paintThemes();
  document.addEventListener('theme:changed', () => requestAnimationFrame(paintTokens));
});
