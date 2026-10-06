/* home/hero.js — HERO (PR #35).
   The track-record stat count-up left with its organism for about/stats.js (S10C).

   Fit: the heading's two lines are sized from their own text, per language and viewport.
   Line 1 fills the stage's width; line 2 fills it too, less the room its pause button keeps
   after the last word on desktop, measured on its widest typed word. Phones (≤767 px) follow
   JD's line commands (each line breaks before its post segment), so each half is fitted, the
   button's room is kept beside line 2's last word, and both lines shrink together if the stage
   would not end inside the first screen. The sizes go on .hero as --l1-size / --l2-size and
   .hero--fit switches the lines to nowrap; until then the hero's content waits unseen
   (hero.css). Positions are read from layout (offsets), never from boxes an entrance may be
   translating, so every mode gets the same layout.

   Typing (PR35-Q19, pace PR35-Q23): line 2 types its three words, left to right, in an endless
   loop. It starts once line 1 has had time to be read (a base delay plus a quarter second per
   word read before the slot), and stops while the hero is off screen or the tab is hidden.
   The button after line 2 pauses and resumes it (WCAG 2.2.2), and the hero's gradient with it.
   Reduced motion, screen readers and no JS get the static sentence (word 3: IMPACT / IMPACTO);
   the slot and the button's room are the same in every mode, so the layout never changes.
   While it types, nothing reflows: the slot keeps its widest word's width, and the trailing
   word, the button and the caret move with translate (--slot-shift, --caret-x on .hero).

   Entrance (G2(e) B): attribution, line 1, line 2 with its button, value proposition, call to
   action; transform + opacity, 500 ms, 80 ms apart, once, after the first fit. Typing waits for
   line 1 to settle. Reduced motion keeps the resting hero. */
const SLACK = 0.985;          /* fitted lines stop just short of the stage edge */
const MIN_PHONE_SIZE = 36;    /* px: the phone cap never sets a line smaller */
const RESERVE = 48;           /* px: the pause button's room after line 2 on desktop */
const PACE = 0.75;            /* every step of the timeline × 0.75 (PR35-Q23: loop 9.3 s) */
const T = { base: 400, perWord: 250, type: 130, jitter: 30, hold: 2600, erase: 55, gap: 550 };
const JIT = [0, 0.8, -0.6, 0.3, -0.9, 0.5, -0.2, 0.9, -0.4, -0.4];   /* an uneven, human hand */
const ENTRANCE = { dur: 500, stag: 80 };
const CARET_ROOM = 0.105;     /* em: the caret's width (0.055) plus its gap after the text (0.05) */

function init() {
  const hero = document.querySelector('.hero');
  const stage = hero && hero.querySelector('.hero__stage');
  const h1 = stage && stage.querySelector('.hero__h1');
  if (!h1) return;
  const inner = hero.querySelector('.hero__inner');
  const l2 = h1.querySelector('.hero__l2');
  const cycle = h1.querySelector('.hero__cycle'), typed = h1.querySelector('.hero__typed'), caret = h1.querySelector('.hero__caret');
  const post = l2.querySelector('.hero__seg--post'), btn = stage.querySelector('.hero__motion');
  const phoneMQ = window.matchMedia('(max-width: 767px)');
  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const labels = { pause: 'Pause animation', play: 'Play animation' };
  const E = { mode: 'init', word: 3, n: 0, timer: null, paused: false, suspended: false, inView: true, next: null, nextDelay: 0 };
  let fitted = false, entered = false, sizing = false;

  /* An unseen copy of the typed word, to read each word's width at the current size. */
  const sizer = document.createElement('em');
  sizer.className = 'hero__hook hero__sizer'; sizer.setAttribute('aria-hidden', 'true');
  if (cycle) cycle.appendChild(sizer);

  const words = () => [1, 2, 3].map(i => { const w = h1.querySelector('.hero__w[data-w="' + i + '"]'); return w ? w.textContent.normalize('NFC') : ''; });
  const chars = w => Array.from(words()[w - 1]);

  /* Width of a run of inline elements on one line: the union of their boxes. */
  function extent(els) {
    let L = Infinity, R = -Infinity;
    els.forEach(el => {
      if (!el) return;
      let rects;
      if (el.classList.contains('hero__caret') || el.classList.contains('hero__cycle')) rects = [el.getBoundingClientRect()];
      else { const r = document.createRange(); r.selectNodeContents(el); rects = Array.from(r.getClientRects()); }
      rects.forEach(b => { if (b.width) { L = Math.min(L, b.left); R = Math.max(R, b.right); } });
    });
    return R > L ? R - L : 0;
  }

  /* Natural widths at 100 px, measured on an unseen clone of the heading; line 2 on each of
     its three words. The clone is sized before it joins the page: a size changed on a live
     element would ease under reduced motion (hero.css gives every property a 0.01 ms
     transition there) and read back stale. */
  function measure(phone) {
    const host = document.createElement('div');
    host.className = 'hero__measure'; host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;left:-9999px;top:0;width:max-content;visibility:hidden;pointer-events:none';
    const c = h1.cloneNode(true);
    c.querySelectorAll('[data-i18n]').forEach(e => e.removeAttribute('data-i18n'));
    c.querySelectorAll('.hero__sizer').forEach(e => e.remove());
    const c1 = c.querySelector('.hero__l1'), c2 = c.querySelector('.hero__l2');
    [c1, c2].forEach(l => { l.style.fontSize = '100px'; l.style.whiteSpace = 'nowrap'; l.style.paddingInlineEnd = '0'; });
    const ccycle = c2.querySelector('.hero__cycle');
    if (ccycle) { ccycle.style.width = 'auto'; ccycle.style.paddingRight = CARET_ROOM + 'em'; }   /* the caret's room, as in the live slot */
    host.appendChild(c); stage.appendChild(host);
    const seg = (l, s) => l.querySelector('.hero__seg--' + s);
    const hook1 = c1.querySelector('.hero__hook');
    const w1 = phone ? Math.max(extent([seg(c1, 'pre'), hook1]), extent([seg(c1, 'post')])) : extent([seg(c1, 'pre'), hook1, seg(c1, 'post')]);
    const ctyped = c2.querySelector('.hero__typed'), slot = ccycle || c2.querySelector('.hero__hook');
    let w2 = 0, w2post = 0;
    words().forEach(word => {
      if (ctyped) ctyped.textContent = word;
      const tail = extent([seg(c2, 'post')]);
      w2 = Math.max(w2, phone ? Math.max(extent([seg(c2, 'pre'), slot]), tail) : extent([seg(c2, 'pre'), slot, seg(c2, 'post')]));
      w2post = Math.max(w2post, tail);
    });
    host.remove();
    return { w1, w2, w2post };
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
    sizing = true; hero.classList.add('hero--sizing');   /* new sizes apply at once, so they read back true */
    const cs = getComputedStyle(inner);
    const box = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const phone = phoneMQ.matches;
    const m = measure(phone);
    if (!m.w1 || !m.w2) { sizing = false; hero.classList.remove('hero--sizing'); return; }
    let s1 = SLACK * box * 100 / m.w1;
    let s2 = SLACK * (box - (phone || !btn ? 0 : RESERVE)) * 100 / m.w2;
    if (phone && btn && m.w2post) s2 = Math.min(s2, (box - 44 - 6) * 100 / m.w2post);   /* the button sits beside the last word */
    const apply = () => {
      hero.style.setProperty('--l1-size', s1.toFixed(2) + 'px');
      hero.style.setProperty('--l2-size', s2.toFixed(2) + 'px');
      hero.style.setProperty('--btn', Math.round(Math.max(24, Math.min(32, 0.55 * s2))) + 'px');   /* never under the 24 px target minimum */
      setSlot(E.word, true);
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
    placeButton();
    void hero.offsetWidth;
    sizing = false; hero.classList.remove('hero--sizing');
    fitted = true;
  }

  /* ── Typing engine ── */
  function render() {
    if (!typed) return;
    typed.textContent = chars(E.word).slice(0, E.n).join('');
    /* the caret follows the text by translate: no reflow while typing */
    const em = parseFloat(getComputedStyle(caret).fontSize) || 0;
    hero.style.setProperty('--caret-x', (typed.getBoundingClientRect().width + 0.05 * em).toFixed(2) + 'px');
  }
  function caretMode(m) { hero.setAttribute('data-caret', m); }
  function slotWidth(w) {
    sizer.textContent = words()[w - 1];
    /* the caret keeps its room in every mode, so the static sentence sits where the typed one does */
    return sizer.getBoundingClientRect().width + CARET_ROOM * (parseFloat(getComputedStyle(caret).fontSize) || 0);
  }
  /* The slot holds the widest word; the trailing word and the button close up on word w by
     --slot-shift (≤ 0), easing over 280 ms between words (hero.css), at once when instant. */
  function setSlot(w, instant) {
    if (!cycle) return;
    const widths = [1, 2, 3].map(slotWidth), max = Math.max.apply(null, widths);
    if (instant) hero.classList.add('hero--sizing');
    cycle.style.width = max.toFixed(2) + 'px';
    hero.style.setProperty('--slot-shift', (widths[w - 1] - max).toFixed(2) + 'px');
    if (instant) { placeButton(); void hero.offsetWidth; if (!sizing) hero.classList.remove('hero--sizing'); }
  }
  /* The button sits after line 2's last word, outside the h1 (it is not part of the heading).
     Its place is read with the trailing word unshifted and relative to line 2's own box (which
     an entrance translates together with the text), then set in the stage's layout
     coordinates; on desktop it then slides with the word by the same --slot-shift. */
  function placeButton() {
    if (!btn || !post) return;
    const shift = hero.style.getPropertyValue('--slot-shift'), held = hero.classList.contains('hero--sizing');
    hero.classList.add('hero--sizing'); hero.style.setProperty('--slot-shift', '0px');
    const r = document.createRange(); r.selectNodeContents(post);
    const rs = r.getClientRects();
    if (rs.length) {
      const last = rs[rs.length - 1], line = l2.getBoundingClientRect();
      const gap = phoneMQ.matches ? 12 : 16, size = parseFloat(getComputedStyle(btn).width) || 32;
      btn.style.left = (l2.offsetLeft + last.right - line.left + gap).toFixed(1) + 'px';
      btn.style.top = (l2.offsetTop + last.top - line.top + last.height / 2 - size / 2).toFixed(1) + 'px';
    }
    hero.style.setProperty('--slot-shift', shift || '0px');
    void hero.offsetWidth;
    if (!held) hero.classList.remove('hero--sizing');
  }
  function schedule(fn, ms) { clearTimeout(E.timer); E.next = fn; E.nextDelay = ms; E.timer = setTimeout(() => { E.timer = null; fn(); }, ms); }
  function startDelay() {
    const read = h1.querySelector('.hero__l1').textContent + ' ' + l2.querySelector('.hero__seg--pre').textContent;
    return (T.base + T.perWord * (read.match(/\S+/g) || []).length) * PACE;
  }
  function typeNext() {
    E.n++; render(); caretMode('solid');
    if (E.n < chars(E.word).length) schedule(typeNext, (T.type + JIT[E.n % JIT.length] * T.jitter) * PACE);
    else { caretMode('blink'); schedule(eraseNext, T.hold * PACE); }
  }
  function eraseNext() {
    E.n--; render(); caretMode('solid');
    if (E.n > 0) schedule(eraseNext, T.erase * PACE);
    else { E.word = E.word % 3 + 1; setSlot(E.word, false); caretMode('blink'); schedule(typeNext, T.gap * PACE); }
  }
  function label() { if (btn) btn.setAttribute('aria-label', E.paused ? labels.play : labels.pause); }
  function pause() {
    if (E.mode !== 'run' || E.paused) return;
    clearTimeout(E.timer); E.timer = null; E.paused = true;
    E.n = chars(E.word).length; setSlot(E.word, true); render();   /* rest on the whole word */
    hero.setAttribute('data-tw', 'paused'); label();
  }
  function play() {
    if (!E.paused) return;
    E.paused = false; hero.setAttribute('data-tw', 'run'); label();
    caretMode('blink');
    E.next = eraseNext; E.nextDelay = T.hold * PACE;
    if (!E.suspended) schedule(eraseNext, T.hold * PACE);
  }
  function updateSuspension() {
    const should = E.mode === 'run' && (document.hidden || !E.inView);
    if (should && !E.suspended) { E.suspended = true; clearTimeout(E.timer); E.timer = null; }
    else if (!should && E.suspended) { E.suspended = false; if (!E.paused && E.next) schedule(E.next, E.nextDelay); }
  }
  function startEngine(delay) {
    clearTimeout(E.timer); E.timer = null; E.paused = false; E.suspended = false; E.next = null;
    if (!cycle) return;
    E.mode = reduceMQ.matches ? 'static' : 'run';
    if (E.mode === 'static') {
      E.word = 3; E.n = chars(3).length; hero.setAttribute('data-tw', 'static'); caretMode('off'); setSlot(3, true); render(); return;
    }
    hero.setAttribute('data-tw', 'run'); E.word = 1; E.n = 0; setSlot(1, true); render(); caretMode('blink'); label();
    E.next = typeNext; E.nextDelay = startDelay() + delay;
    updateSuspension();
    if (!E.suspended) schedule(typeNext, E.nextDelay);
  }

  /* ── Entrance: once, after the first fit ── */
  function entrance() {
    if (entered || reduceMQ.matches || typeof h1.animate !== 'function') return;
    entered = true;
    const q = s => stage.querySelector(s);
    const seq = [q('.hero__attr'), h1.querySelector('.hero__l1'), [l2, btn], q('.hero__sub'), q('.hero__cta')];
    seq.forEach((els, i) => {
      [].concat(els).forEach(el => {
        if (el) el.animate(
          [{ opacity: 0, transform: 'translateY(1.125rem)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: ENTRANCE.dur, delay: i * ENTRANCE.stag, easing: 'cubic-bezier(0, 0, 0.2, 1)', fill: 'backwards' }
        );
      });
    });
  }

  /* ── Boot: the face and the first dictionary, then fit and type; refit on language and size ── */
  let fontsOK = false, i18nOK = false;
  function ready() {
    if (!fontsOK || !i18nOK) return;
    const first = !fitted;
    fit();
    /* typing waits for line 1 to settle: its entrance delay (one step) plus its duration */
    startEngine(first && !reduceMQ.matches ? ENTRANCE.stag + ENTRANCE.dur : 0);
    if (first) entrance();
  }
  document.addEventListener('i18n:changed', e => {
    const d = (e.detail && e.detail.dict) || {};
    if (d.hero_motion_pause) labels.pause = d.hero_motion_pause;
    if (d.hero_motion_play) labels.play = d.hero_motion_play;
    i18nOK = true; ready();
  });
  setTimeout(() => { if (!i18nOK) { i18nOK = true; ready(); } }, 2500);
  const faces = document.fonts ? Promise.all([document.fonts.load('900 100px Archivo'), document.fonts.load('italic 900 100px Archivo')]) : Promise.resolve();
  faces.catch(() => {}).then(() => { fontsOK = true; ready(); });

  if (btn) btn.addEventListener('click', () => { if (E.paused) play(); else pause(); });
  document.addEventListener('visibilitychange', updateSuspension);
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { E.inView = es[es.length - 1].isIntersecting; updateSuspension(); }, { threshold: 0 }).observe(hero);
  reduceMQ.addEventListener('change', () => { if (fitted) { fit(); startEngine(0); } });
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (fitted) fit(); }, 80); });
}

export { init };
