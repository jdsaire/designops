/* home/hero.js — HERO (PR #35).
   The track-record stat count-up left with its organism for about/stats.js (S10C).

   Fit: the heading's two lines are sized from their own text, per language and viewport.
   Line 1 fills the stage's width; line 2 fills it too. Phones (≤767 px) follow JD's line
   commands (each line breaks before its post segment), so each half is fitted, then both
   lines shrink together if the stage would not end inside the first screen. The sizes go
   on .hero as --l1-size / --l2-size and .hero--fit switches the lines to nowrap; until
   then the hero's content waits unseen (hero.css). Positions are read from layout (offsets), never
   from boxes an entrance may be translating, so every mode gets the same layout.

   Entrance: the S3 sequence, transform + opacity only, played once after the first fit.
   The static end state is the resting hero, so with no JS or under reduced motion the
   hero simply renders. */
const SLACK = 0.985;          /* fitted lines stop just short of the stage edge */
const MIN_PHONE_SIZE = 36;    /* px: the phone cap never sets a line smaller */

function init() {
  const hero = document.querySelector('.hero');
  const stage = hero && hero.querySelector('.hero__stage');
  const h1 = stage && stage.querySelector('.hero__h1');
  if (!h1) return;
  const inner = hero.querySelector('.hero__inner');
  const phoneMQ = window.matchMedia('(max-width: 767px)');
  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  let fitted = false, entered = false;

  /* Width of a run of inline elements on one line: the union of their text rects. */
  function extent(els) {
    let L = Infinity, R = -Infinity;
    els.forEach(el => {
      if (!el) return;
      const r = document.createRange(); r.selectNodeContents(el);
      Array.prototype.forEach.call(r.getClientRects(), b => { if (b.width) { L = Math.min(L, b.left); R = Math.max(R, b.right); } });
    });
    return R > L ? R - L : 0;
  }

  /* Natural widths at 100 px, measured on an unseen clone of the heading. The clone is sized
     before it joins the page: a size changed on a live element would ease under reduced motion
     (hero.css gives every property a 0.01 ms transition there) and read back stale. */
  function measure(phone) {
    const host = document.createElement('div');
    host.className = 'hero__measure'; host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;left:-9999px;top:0;width:max-content;visibility:hidden;pointer-events:none';
    const c = h1.cloneNode(true);
    c.querySelectorAll('[data-i18n]').forEach(e => e.removeAttribute('data-i18n'));
    const lines = [c.querySelector('.hero__l1'), c.querySelector('.hero__l2')];
    lines.forEach(l => { l.style.fontSize = '100px'; l.style.whiteSpace = 'nowrap'; });
    host.appendChild(c); stage.appendChild(host);
    const widths = lines.map(l => {
      const pre = l.querySelector('.hero__seg--pre'), hook = l.querySelector('.hero__hook'), post = l.querySelector('.hero__seg--post');
      return phone ? Math.max(extent([pre, hook]), extent([post])) : extent([pre, hook, post]);
    });
    host.remove();
    return widths;
  }

  /* Document position of the stage's last in-flow element's bottom edge (transform-free). */
  function stageBottom() {
    const top = stage.getBoundingClientRect().top + window.scrollY;
    let bottom = 0;
    Array.prototype.forEach.call(stage.children, el => {
      if (getComputedStyle(el).position === 'absolute') return;
      bottom = Math.max(bottom, el.offsetTop + el.offsetHeight);
    });
    return top + bottom;
  }

  function fit() {
    hero.classList.add('hero--sizing');   /* new sizes apply at once, so they read back true */
    const cs = getComputedStyle(inner);
    const box = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const phone = phoneMQ.matches;
    const [w1, w2] = measure(phone);
    if (!w1 || !w2) { hero.classList.remove('hero--sizing'); return; }
    let s1 = SLACK * box * 100 / w1, s2 = SLACK * box * 100 / w2;
    const apply = () => {
      hero.style.setProperty('--l1-size', s1.toFixed(2) + 'px');
      hero.style.setProperty('--l2-size', s2.toFixed(2) + 'px');
    };
    apply();
    hero.classList.add('hero--fit');
    if (phone) {
      for (let i = 0; i < 3; i++) {
        const limit = window.innerHeight - 12, over = stageBottom() - limit;
        if (over <= 0.5) break;
        const hh = h1.offsetHeight;
        const f = Math.max((hh - over) / hh, MIN_PHONE_SIZE / Math.max(s1, s2));
        if (f >= 0.999) break;
        s1 *= f; s2 *= f; apply();
      }
    }
    void hero.offsetWidth;
    hero.classList.remove('hero--sizing');
    fitted = true;
  }

  /* ── S3 entrance: once, after the first fit; reduced motion keeps the resting hero ── */
  function entrance() {
    if (entered || reduceMQ.matches) return;
    entered = true;
    const seq = [stage.querySelector('.hero__attr'), h1, stage.querySelector('.hero__sub'), stage.querySelector('.hero__cta')].filter(Boolean);
    if (!seq.length || typeof seq[0].animate !== 'function') return;
    seq.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(1.125rem)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 700, delay: 120 + i * 120, easing: 'cubic-bezier(0, 0, 0.2, 1)', fill: 'backwards' }
      );
    });
  }

  /* ── Boot: the face and the first dictionary, then fit; refit on language and size changes ── */
  let fontsOK = false, i18nOK = false;
  function ready() {
    if (!fontsOK || !i18nOK) return;
    const first = !fitted;
    fit();
    if (first) entrance();
  }
  document.addEventListener('i18n:changed', () => { i18nOK = true; ready(); });
  setTimeout(() => { if (!i18nOK) { i18nOK = true; ready(); } }, 2500);
  const faces = document.fonts ? Promise.all([document.fonts.load('900 100px Archivo'), document.fonts.load('italic 900 100px Archivo')]) : Promise.resolve();
  faces.catch(() => {}).then(() => { fontsOK = true; ready(); });
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (fitted) fit(); }, 80); });
}

export { init };
