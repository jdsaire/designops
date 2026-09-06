/* core/theme.js — light/dark theme engine.
   Structural peer to core/i18n.js: the same persistence approach
   (localStorage under its own key, every access in a try/catch), the
   same root-element data attribute, and the same "one swap function
   the chrome calls" shape. Deliberately independent of i18n.js and
   navchrome.js so neither has to change to carry a theme control.

   Dark is the default and carries NO attribute. Light sets
   data-theme="light" on <html>. An absent or unreadable stored
   preference therefore resolves to dark, which is the required
   first-load state at every breakpoint.

   The no-flash inline script in each page's <head> applies the stored
   attribute before first paint; this module re-reads the same key on
   DOMContentLoaded to wire the controls and keep them in sync. */

const STORAGE_KEY = 'jds-theme';

function stored() {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
}

/* Every lookup is guarded: this module runs unchanged on a page with no
   theme control at all, matching navchrome.js's contract. */
function controls() {
  return [
    document.getElementById('themeBtn'),
    document.getElementById('overlayThemeBtn')
  ].filter(Boolean);
}

function reflect(light) {
  controls().forEach(btn => {
    btn.setAttribute('aria-pressed', String(light));
    const icon = btn.querySelector('.nav__theme-icon');
    if (icon) icon.textContent = light ? '◐' : '◑';
  });
}

function swapTheme(theme) {
  const light = theme === 'light';
  try { localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark'); } catch (e) {}
  if (light) document.documentElement.setAttribute('data-theme', 'light');
  else       document.documentElement.removeAttribute('data-theme');
  reflect(light);
  document.dispatchEvent(new CustomEvent('theme:changed', { detail: { theme: light ? 'light' : 'dark' } }));
}

function init() {
  const light = stored() === 'light';
  /* Re-assert rather than assume: the head script may not have run if a
     page was served without it, and the attribute is the source of truth. */
  if (light) document.documentElement.setAttribute('data-theme', 'light');
  else       document.documentElement.removeAttribute('data-theme');
  reflect(light);

  controls().forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      swapTheme(isLight ? 'dark' : 'light');
    });
  });
}

export { swapTheme, init };
