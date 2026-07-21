/* home/nav.js — NAV scroll hide/show + scrollspy + language selector.

   P-6 smart navbar v2:
   (a) scrollspy — one IntersectionObserver gives the nav link whose section
       holds the viewport centre aria-current + a held underline.
   (b) the language panel gains explicit aria-expanded on its trigger plus
       Escape-to-close with focus return.
   (c) the hide-on-scroll bar returns on upscroll AND on focus-within, so a
       keyboard user tabbing into a hidden bar never loses it. */
import { swapLang } from '../../core/i18n.js';

function init() {
  /* Nav context — resolve cross-document hrefs from a base hash. On home the
     prefix is "" (no-op; hrefs unchanged); a brief page prepends "../../".
     Idempotent (derives from data-nav-link, not the current href). */
  const navPrefix = document.documentElement.getAttribute('data-nav-context') === 'brief' ? '../../' : '';
  document.querySelectorAll('[data-nav-link]').forEach(a => a.setAttribute('href', navPrefix + a.getAttribute('data-nav-link')));

  const nav = document.getElementById('navbar');
  let lastScroll = 0, ticking = false;
  function onScroll() {
    const cur = window.scrollY;
    /* Never hide while focus is inside the bar (P-6c). */
    const keepVisible = nav.contains(document.activeElement);
    nav.classList.toggle('nav--hidden', !keepVisible && cur > lastScroll && cur > 80);
    lastScroll = cur; ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  /* Focus entering the bar always brings it back. */
  nav.addEventListener('focusin', () => nav.classList.remove('nav--hidden'));

  /* ── Scrollspy (P-6a) — active-section indication on the nav links. ── */
  const navLinks = Array.prototype.slice.call(nav.querySelectorAll('.nav__link[data-nav-link]'));
  const linkFor = {};
  navLinks.forEach(l => { linkFor[l.getAttribute('data-nav-link')] = l; });
  const sections = navLinks
    .map(l => document.querySelector(l.getAttribute('data-nav-link')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const link = linkFor['#' + entry.target.id];
        if (!link) return;
        navLinks.forEach(l => { l.classList.remove('nav__link--current'); l.removeAttribute('aria-current'); });
        link.classList.add('nav__link--current');
        link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ── Language selector (P-6b) — aria-expanded + Escape/focus-return. ── */
  const langSelector = document.getElementById('langSelector');
  const langPanel = document.getElementById('langPanel');
  const langLabel = document.getElementById('langLabel');
  const langBtn = document.getElementById('langBtn');

  function setPanel(open) {
    langSelector.classList.toggle('nav__lang--panel-open', open);
    if (langBtn) langBtn.setAttribute('aria-expanded', String(open));
  }
  if (langBtn) langBtn.setAttribute('aria-expanded', 'false');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setPanel(!langSelector.classList.contains('nav__lang--panel-open'));
  });
  document.addEventListener('click', () => setPanel(false));
  langPanel.addEventListener('click', e => e.stopPropagation());
  langSelector.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') { setPanel(false); if (langBtn) langBtn.focus(); }
  });

  langPanel.querySelectorAll('.nav__lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      /* Update active state in panel */
      langPanel.querySelectorAll('.nav__lang-option').forEach(b => {
        b.classList.toggle('nav__lang-option--active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });
      langLabel.textContent = lang;
      setPanel(false);
      /* Fire i18n swap */
      swapLang(lang);
    });
  });
}

export { init };
