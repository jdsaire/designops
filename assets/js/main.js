/* ============================================================
   i18n ENGINE — swapLang(lang)
   Dictionaries are loaded asynchronously from assets/i18n/{lang}.json
   on first use of each language; subsequent calls hit the cache.
   swapLang(lang)'s public signature is unchanged — callers
   fire-and-forget. The HTML's default English markup is the
   render fallback during the brief async fetch window.
   ============================================================ */
const i18nDicts   = { EN: null, ES: null };
const i18nLoading = { EN: null, ES: null };
let   i18nCurrent = 'EN';

function loadDict(lang) {
  if (i18nDicts[lang])   return Promise.resolve(i18nDicts[lang]);
  if (i18nLoading[lang]) return i18nLoading[lang];
  const file = lang === 'ES' ? 'es.json' : 'en.json';
  i18nLoading[lang] = fetch('assets/i18n/' + file)
    .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
    .then(dict => { i18nDicts[lang] = dict; return dict; })
    .catch(err => { console.warn('i18n fetch failed for ' + lang + ':', err); return null; });
  return i18nLoading[lang];
}

function swapLang(lang) {
  i18nCurrent = lang;
  loadDict(lang).then(dict => {
    if (!dict || i18nCurrent !== lang) return;
    document.documentElement.setAttribute('lang', lang === 'ES' ? 'es' : 'en');
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* aria-label swap for CTA anchor */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    /* placeholder swap for form inputs/textarea */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    /* alt swap for images */
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      if (dict[key] !== undefined) el.alt = dict[key];
    });

    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang, dict } }));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const initialLang = 'EN';
  swapLang(initialLang);
  if (langLabel) langLabel.textContent = initialLang;
  langPanel.querySelectorAll('.nav__lang-option').forEach(b => {
    b.classList.toggle('nav__lang-option--active', b.dataset.lang === initialLang);
    b.setAttribute('aria-selected', String(b.dataset.lang === initialLang));
  });
});

/* ============================================================
   NAV scroll hide/show
   ============================================================ */
const nav = document.getElementById('navbar');
let lastScroll = 0, ticking = false;
function onScroll() {
  const cur = window.scrollY;
  nav.classList.toggle('nav--hidden', cur > lastScroll && cur > 80);
  lastScroll = cur; ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

/* ============================================================
   Mobile overlay — open/close + CHG-21 lang↔X swap
   ============================================================ */
const hamburger    = document.getElementById('hamburger');
const overlay      = document.getElementById('navOverlay');
const langSelector = document.getElementById('langSelector');
const mobileClose  = document.getElementById('mobileClose');

function isMobile() { return window.innerWidth <= 768; }

function openOverlay() {
  overlay.classList.add('nav__overlay--open');
  hamburger.setAttribute('aria-expanded', 'true');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (isMobile()) { langSelector.style.display = 'none'; mobileClose.style.display = 'flex'; }
}
function closeOverlay() {
  overlay.classList.remove('nav__overlay--open');
  hamburger.setAttribute('aria-expanded', 'false');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (isMobile()) { mobileClose.style.display = 'none'; langSelector.style.display = ''; }
}

hamburger.addEventListener('click', openOverlay);
mobileClose.addEventListener('click', closeOverlay);
document.getElementById('overlayClose').addEventListener('click', closeOverlay);
overlay.querySelectorAll('.nav__overlay-link').forEach(el => el.addEventListener('click', closeOverlay));

/* ============================================================
   Language selector — globe + panel + i18n trigger
   ============================================================ */
const langPanel = document.getElementById('langPanel');
const langLabel = document.getElementById('langLabel');

document.getElementById('langBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('nav__lang--panel-open');
});
document.addEventListener('click', () => langSelector.classList.remove('nav__lang--panel-open'));
langPanel.addEventListener('click', e => e.stopPropagation());

langPanel.querySelectorAll('.nav__lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    /* Update active state in panel */
    langPanel.querySelectorAll('.nav__lang-option').forEach(b => {
      b.classList.toggle('nav__lang-option--active', b === btn);
      b.setAttribute('aria-selected', String(b === btn));
    });
    langLabel.textContent = lang;
    langSelector.classList.remove('nav__lang--panel-open');
    /* Fire i18n swap */
    swapLang(lang);
  });
});

/* ============================================================
   HERO stat count-up
   ============================================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters = document.querySelectorAll('.stat__number[data-target]');
function renderFinal(el) {
  el.textContent = parseInt(el.dataset.target,10).toLocaleString() + (el.dataset.suffix||'');
}
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  counters.forEach(renderFinal);
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target,10);
      const suffix = el.dataset.suffix || '';
      const steps = 40, interval = 1200 / steps;
      let step = 0;
      const t = setInterval(() => {
        step++;
        el.textContent = Math.round(target*(step/steps)).toLocaleString() + suffix;
        if (step >= steps) { clearInterval(t); renderFinal(el); }
      }, interval);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(el => io.observe(el));
}

/* ============================================================
   WORK v5 — Touch interaction (mobile + tablet)
   ============================================================ */
(function () {
  var workCards = document.querySelectorAll('.work-card');
  var workTrack = document.querySelector('.work__track');
  var workDots  = document.querySelectorAll('.work__dot');
  var isTouch   = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (isTouch) {
    workCards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.work-card__close')) {
          card.classList.remove('is-active');
          return;
        }
        if (e.target.closest('.work-card__cta')) return;
        workCards.forEach(function (c) {
          if (c !== card) c.classList.remove('is-active');
        });
        card.classList.toggle('is-active');
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('is-active');
        }
        if (e.key === 'Escape') {
          card.classList.remove('is-active');
        }
      });
    });
  }

  /* Dot pagination */
  if (workTrack && workDots.length) {
    function updateDots () {
      var first = workTrack.firstElementChild;
      if (!first) return;
      var cardWidth = first.getBoundingClientRect().width;
      var gap = parseFloat(getComputedStyle(workTrack).gap) || 12;
      var idx = Math.round(workTrack.scrollLeft / (cardWidth + gap));
      workDots.forEach(function (d, i) {
        d.classList.toggle('work__dot--active', i === idx);
      });
    }

    var ticking = false;
    workTrack.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () { updateDots(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    workDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(dot.dataset.cardIndex, 10);
        var first = workTrack.firstElementChild;
        if (!first) return;
        var cardWidth = first.getBoundingClientRect().width;
        var gap = parseFloat(getComputedStyle(workTrack).gap) || 12;
        workTrack.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
      });
    });
  }
})();

/* ============================================================
   CAPABILITIES — Carousel IIFE
   ============================================================ */
(function () {
  'use strict';

  const track        = document.getElementById('servicesTrack');
  if (!track) return;
  const slides       = document.querySelectorAll('.services__slide');
  const prevBtn      = document.querySelector('.services__controls .services__nav--prev');
  const nextBtn      = document.querySelector('.services__controls .services__nav--next');
  const servicesDots = document.querySelectorAll('.services__dot');
  const desktopCounter = document.querySelector('.services__counter');
  const total        = slides.length;
  let   index        = 0;

  function isMobile() { return window.innerWidth <= 767; }

  function getSlideStep() {
    if (!slides[0]) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return slides[0].offsetWidth + gap;
  }

  function goTo(newIndex) {
    if (newIndex < 0)      newIndex = total - 1;
    if (newIndex >= total) newIndex = 0;
    index = newIndex;

    if (!isMobile()) {
      track.style.transform = 'translateX(-' + (index * getSlideStep()) + 'px)';
      slides.forEach(function (s, i) {
        s.classList.toggle('services__slide--active', i === index);
        s.setAttribute('aria-hidden', i !== index ? 'true' : 'false');
      });
    } else {
      track.style.transform = '';
      slides.forEach(function (s, i) {
        s.classList.toggle('services__slide--active', i === index);
        s.removeAttribute('aria-hidden');
      });
      var targetSlide = slides[index];
      if (targetSlide && carousel) {
        var paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        carousel.scrollTo({ left: targetSlide.offsetLeft - paddingLeft, behavior: 'smooth' });
      }
    }

    servicesDots.forEach(function (d, i) {
      d.classList.toggle('services__dot--active', i === index);
    });

    if (desktopCounter) desktopCounter.textContent = (index + 1) + ' / ' + total;
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1); });

  track.addEventListener('click', function (e) {
    var btn = e.target.closest('.services__nav--mobile');
    if (!btn) return;
    if (btn.classList.contains('services__nav--prev')) goTo(index - 1);
    if (btn.classList.contains('services__nav--next')) goTo(index + 1);
  });

  servicesDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(dot.dataset.slideIndex, 10));
    });
  });

  var carousel = document.querySelector('.services__carousel');
  if (carousel) {
    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    });

    var touchStartX = 0, touchStartY = 0;
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].screenX - touchStartX;
      var dy = e.changedTouches[0].screenY - touchStartY;
      if (!isMobile() && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        goTo(dx < 0 ? index + 1 : index - 1);
      }
    }, { passive: true });

    carousel.addEventListener('scroll', function () {
      if (!isMobile()) return;
      var step = getSlideStep();
      if (step === 0) return;
      var nearest = Math.round(carousel.scrollLeft / step);
      if (nearest !== index && nearest >= 0 && nearest < total) {
        index = nearest;
        slides.forEach(function (s, i) { s.classList.toggle('services__slide--active', i === index); });
        servicesDots.forEach(function (d, i) { d.classList.toggle('services__dot--active', i === index); });
        if (desktopCounter) desktopCounter.textContent = (index + 1) + ' / ' + total;
      }
    }, { passive: true });
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { goTo(index); }, 120);
  });

  goTo(0);
})();

/* ============================================================
   EVOLUTION — Timeline tap-to-expand accordion
   One open at a time. Keyboard accessible. All breakpoints.
   Respects prefers-reduced-motion (instant open/close).
   ============================================================ */
(function () {
  var items = document.querySelectorAll('.timeline__item');
  if (!items.length) return;

  var toggles = [];

  function setOpen(item, open) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel  = item.querySelector('.timeline__panel');
    item.classList.toggle('is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    if (panel) {
      if (open) {
        panel.hidden = false;
        panel.style.maxHeight = prefersReducedMotion ? 'none' : panel.scrollHeight + 'px';
      } else {
        if (prefersReducedMotion) {
          panel.style.maxHeight = '';
          panel.hidden = true;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          requestAnimationFrame(function () { panel.style.maxHeight = '0px'; });
        }
      }
    }
  }

  items.forEach(function (item) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel  = item.querySelector('.timeline__panel');
    if (!toggle || !panel) return;
    toggles.push(item);

    panel.hidden = true;
    panel.style.maxHeight = '0px';
    toggle.setAttribute('aria-expanded', 'false');

    if (!prefersReducedMotion) {
      panel.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'max-height' && !item.classList.contains('is-open')) {
          panel.hidden = true;
        }
      });
    }

    toggle.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      toggles.forEach(function (other) { if (other !== item) setOpen(other, false); });
      setOpen(item, willOpen);
    });
  });
})();

/* ============================================================
   CONTACT — single-path form validation + success modal
   Name / Email / Message → Formspree. One success state.
   ============================================================ */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const modalOverlay  = document.getElementById('successModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    let lastFocusedElement = null;

    const validateField = (el) => {
      const group = el.closest('.form-group');
      if (!group) return true;
      let ok = true;
      if (el.required && !el.value.trim()) {
        ok = false;
      } else if (el.type === 'email' && el.value.trim()) {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
      }
      group.classList.toggle('has-error', !ok);
      return ok;
    };

    const openModal = () => {
      lastFocusedElement = document.activeElement;
      modalOverlay.classList.add('is-active');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      if (modalCloseBtn) modalCloseBtn.focus();
    };

    const closeModal = () => {
      modalOverlay.classList.remove('is-active');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
      let valid = true;
      fields.forEach((f) => { if (!validateField(f)) valid = false; });
      if (valid) {
        openModal();
        form.reset();
      } else {
        const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
      }
    });

    form.addEventListener('change', (e) => {
      if (e.target.tagName === 'SELECT') {
        const group = e.target.closest('.form-group');
        if (group && group.classList.contains('has-error')) validateField(e.target);
      }
    });

    form.addEventListener('input', (e) => {
      const group = e.target.closest('.form-group');
      if (group && group.classList.contains('has-error')) validateField(e.target);
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) closeModal();
    });
  });
})();
/* ===== END CONTACT ===== */

/* ===== TICKER MARQUEE ===========================================
   Clone-to-fill seamless marquee for the standalone #ticker organism.
   Per lane: clone the single base .ticker__group enough times that
   the track always exceeds its container + one group, then shift by
   exactly one base-group width (integer px) so the loop seam is
   invisible at every breakpoint. translate3d keeps it on the GPU.
================================================================= */
(function tickerMarquee() {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
  const lanes = document.querySelectorAll('.ticker__band');
  if (!lanes.length) return;

  function buildLane(band) {
    const track = band.querySelector('.ticker__track');
    const base = track && track.querySelector('.ticker__group');
    if (!track || !base) return;

    // Idempotent: strip any clones from a previous build (e.g. resize).
    track.querySelectorAll('.ticker__group:not(:first-child)').forEach((n) => n.remove());

    const baseW = base.getBoundingClientRect().width;
    const contW = band.getBoundingClientRect().width;
    if (baseW === 0) return;

    // Enough copies that the track always exceeds container + one group.
    const copies = Math.max(2, Math.ceil(contW / baseW) + 1);
    for (let i = 1; i < copies; i++) {
      const clone = base.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('img').forEach((img) => img.setAttribute('alt', ''));
      track.appendChild(clone);
    }

    // Shift by exactly one base-group width — integer px = invisible loop.
    const shift = Math.round(baseW);
    track.style.setProperty('--ticker-shift', shift + 'px');

    // Constant px/sec across breakpoints.
    const SPEED = 60; // pixels per second
    track.style.setProperty('--ticker-duration', (shift / SPEED).toFixed(2) + 's');
  }

  function buildAll() {
    if (REDUCED.matches) return;
    lanes.forEach(buildLane);
  }

  // Measure only once logos have intrinsic width, else baseW reads 0.
  const imgs = Array.prototype.slice.call(document.querySelectorAll('.ticker__logo'));
  let pending = imgs.filter((i) => !i.complete).length;
  if (pending === 0) {
    buildAll();
  } else {
    imgs.forEach((i) => {
      if (i.complete) return;
      const done = () => { if (--pending === 0) buildAll(); };
      i.addEventListener('load', done, { once: true });
      i.addEventListener('error', done, { once: true });
    });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildAll, 200);
  });

  if (REDUCED.addEventListener) {
    REDUCED.addEventListener('change', buildAll);
  }
})();
/* ===== END TICKER MARQUEE ===== */
