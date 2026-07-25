/* core/navchrome.js — shared nav behaviour for all five pages.

   Consolidates the chrome that used to live in home/nav.js + home/overlay.js
   and in each brief's inline nav script:
     · cross-document href rewrite (data-nav-link # anchors, data-nav-work briefs)
     · hide-on-scroll bar (returns on upscroll AND on focus-within — P-6c)
     · language-panel disclosure (aria-expanded + Escape/focus-return — P-6b),
       resolving EITHER id pair (langBtn/… on Home, briefLangBtn/… on briefs)
     · Work dropdown disclosure (desktop) + nested Work disclosure (overlay)
     · mobile overlay open/close + in-overlay language control

   Every DOM lookup is guarded: the module runs unchanged on a page with no
   overlay, no hamburger, no #navbar, and no Work dropdown. The single behaviour
   that differs per page — the i18n engine — is injected via opts.swapLang, so
   this module imports neither Home's module engine nor a brief's inline one. */

function init(opts) {
  opts = opts || {};
  const swapLang = typeof opts.swapLang === 'function' ? opts.swapLang : null;
  const isBrief = document.documentElement.getAttribute('data-nav-context') === 'brief';

  /* ── Cross-document href rewrite (idempotent; derives from data-*). ── */
  const anchorPrefix = isBrief ? '../../' : '';
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    if (a.tagName === 'A') a.setAttribute('href', anchorPrefix + a.getAttribute('data-nav-link'));
  });
  const workPrefix = isBrief ? '../' : 'work/';
  document.querySelectorAll('[data-nav-work]').forEach(a => {
    if (a.tagName === 'A') a.setAttribute('href', workPrefix + a.getAttribute('data-nav-work'));
  });

  /* ── Hide-on-scroll bar (P-6c focus-within return). Needs #navbar. ── */
  const nav = document.getElementById('navbar');
  if (nav) {
    let lastScroll = 0, ticking = false;
    function onScroll() {
      const cur = window.scrollY;
      const keepVisible = nav.contains(document.activeElement);
      nav.classList.toggle('nav--hidden', !keepVisible && cur > lastScroll && cur > 80);
      lastScroll = cur; ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    nav.addEventListener('focusin', () => nav.classList.remove('nav--hidden'));
  }

  /* ── A small disclosure helper mirroring tagfilter.js's contract. ── */
  function wireDisclosure(trigger, menu, onOutside) {
    if (!trigger || !menu) return null;
    function setOpen(open) {
      trigger.setAttribute('aria-expanded', String(open));
      if (open) { menu.hidden = false; } else { menu.hidden = true; }
    }
    setOpen(false);
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = trigger.getAttribute('aria-expanded') === 'true';
      if (onOutside) onOutside();
      setOpen(!open);
    });
    menu.addEventListener('click', (e) => e.stopPropagation());
    return { setOpen, trigger, menu };
  }

  const disclosures = [];
  function closeAllExcept(keep) {
    disclosures.forEach(d => { if (d && d !== keep) d.setOpen(false); });
  }

  /* ── Language-panel disclosure (Home ids OR brief ids). ── */
  const langBtn   = document.getElementById('langBtn')   || document.getElementById('briefLangBtn');
  const langPanel = document.getElementById('langPanel') || document.getElementById('briefLangPanel');
  const langLabel = document.getElementById('langLabel') || document.getElementById('briefLangLabel');
  const langSel   = langBtn ? langBtn.closest('.nav__lang') : null;

  function setLangActive(root, lang) {
    if (!root) return;
    root.querySelectorAll('.nav__lang-option, .nav__overlay-lang-option').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('nav__lang-option--active', on && b.classList.contains('nav__lang-option'));
      b.classList.toggle('nav__overlay-lang-option--active', on && b.classList.contains('nav__overlay-lang-option'));
      b.setAttribute('aria-selected', String(on));
    });
  }

  let curLang = 'ES';
  try { curLang = localStorage.getItem('jds-lang') || 'ES'; } catch (e) {}

  if (langBtn && langPanel && langSel) {
    const langDisc = {
      setOpen(open) {
        langSel.classList.toggle('nav__lang--panel-open', open);
        langBtn.setAttribute('aria-expanded', String(open));
      }
    };
    disclosures.push(langDisc);
    if (langLabel) langLabel.textContent = curLang;
    setLangActive(langPanel, curLang);
    langBtn.setAttribute('aria-expanded', 'false');
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = langSel.classList.contains('nav__lang--panel-open');
      closeAllExcept(langDisc);
      langDisc.setOpen(!open);
    });
    langPanel.addEventListener('click', (e) => e.stopPropagation());
    langSel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') { langDisc.setOpen(false); langBtn.focus(); }
    });
    langPanel.querySelectorAll('.nav__lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.dataset.lang;
        setLang(lang);
        langDisc.setOpen(false);
      });
    });
  }

  /* One place to reflect a language change across every language control. */
  function setLang(lang) {
    curLang = lang;
    if (langLabel) langLabel.textContent = lang;
    if (langPanel) setLangActive(langPanel, lang);
    const overlayLang = document.getElementById('overlayLang');
    if (overlayLang) setLangActive(overlayLang, lang);
    if (swapLang) swapLang(lang);
  }

  /* ── Work dropdown (desktop). Button disclosure over the four briefs. ── */
  const workTrigger = document.getElementById('workTrigger');
  const workMenu = document.getElementById('workMenu');
  const workDisc = wireDisclosure(workTrigger, workMenu, () => closeAllExcept(workDiscRef));
  var workDiscRef = workDisc;
  if (workDisc) {
    disclosures.push(workDisc);
    workTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') { workDisc.setOpen(false); workTrigger.focus(); }
    });
    workMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => workDisc.setOpen(false)));
  }

  /* Outside-click closes every open disclosure. */
  document.addEventListener('click', () => closeAllExcept(null));

  /* ── Mobile overlay + in-overlay controls. ── */
  const hamburger    = document.getElementById('hamburger');
  const overlay      = document.getElementById('navOverlay');
  const overlayClose = document.getElementById('overlayClose');

  function closeOverlay() {
    if (!overlay) return;
    overlay.classList.remove('nav__overlay--open');
    if (hamburger) { hamburger.setAttribute('aria-expanded', 'false'); hamburger.classList.remove('nav__hamburger--open'); }
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function openOverlay() {
    if (!overlay) return;
    overlay.classList.add('nav__overlay--open');
    if (hamburger) { hamburger.setAttribute('aria-expanded', 'true'); hamburger.classList.add('nav__hamburger--open'); }
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  if (hamburger && overlay) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (overlay.classList.contains('nav__overlay--open')) closeOverlay(); else openOverlay();
    });
  }
  if (overlayClose) overlayClose.addEventListener('click', closeOverlay);
  if (overlay) {
    /* Nested Work disclosure inside the overlay. */
    const overlayWorkTrigger = document.getElementById('overlayWorkTrigger');
    const overlayWorkMenu = document.getElementById('overlayWorkMenu');
    const overlayWorkDisc = wireDisclosure(overlayWorkTrigger, overlayWorkMenu, null);
    /* Flat links close the overlay on navigation; Work items too. */
    overlay.querySelectorAll('.nav__overlay-link, .nav__overlay-subitem').forEach(el => {
      el.addEventListener('click', () => { if (el.tagName === 'A') closeOverlay(); });
    });
    if (overlayWorkTrigger) {
      overlayWorkTrigger.addEventListener('click', (e) => e.stopPropagation());
    }
    /* In-overlay language control. */
    const overlayLang = document.getElementById('overlayLang');
    if (overlayLang) {
      setLangActive(overlayLang, curLang);
      overlayLang.querySelectorAll('.nav__overlay-lang-option').forEach(opt => {
        opt.addEventListener('click', () => setLang(opt.dataset.lang));
      });
    }
  }
}

export { init };
