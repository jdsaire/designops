/* core/carousel.js — the slide carousel (.dl, styled by shared/carousel.css), one source for the four briefs since
   PR #42 (PR42-Q1, Q5). Brief 03's Act 03 deliverables carousel, moved out of its page unchanged in behaviour:
   translate on desktop, native scroll-snap on phones (Main's capabilities carousel), arrows and the arrow keys,
   a swipe above 768, off-screen slides inert from 768, a live "01 / 0N" count, re-sync on resize and on crossing
   768, and a reload that keeps the slide.

   init({ store }) wires every [data-dl] on the page. `store` is the page's per-tab state ({ get, set }); Brief 03
   passes its own uiState so its saved slide carries over, and the other briefs pass sessionStore('<page>:ui').
   A page with two carousels names the second (data-dl="more") so each keeps its own slide under its own key
   ("dl:more"); an unnamed carousel keeps the key "dl" (PR #43).
   Every storage access is best effort: the carousel works the same without it. */
export function sessionStore(key) {
  let s = {};
  try { s = JSON.parse(sessionStorage.getItem(key)) || {}; } catch (e) { s = {}; }
  return {
    get: k => s[k],
    set: (k, v) => {
      if (v === null || v === undefined) delete s[k]; else s[k] = v;
      try { sessionStorage.setItem(key, JSON.stringify(s)); } catch (e) {}
    }
  };
}

export function init({ store } = {}) {
  const ui = store || { get: () => undefined, set: () => {} };
  document.querySelectorAll('[data-dl]').forEach(root => {
    const vp = root.querySelector('.dl__viewport'), track = root.querySelector('.dl__track'), slides = [...track.children];
    const count = root.querySelector('.dl__count'), n = slides.length, phone = window.matchMedia('(max-width:767px)');
    const pad = v => String(v).padStart(2, '0'); let i = 0; const key = root.dataset.dl ? 'dl:' + root.dataset.dl : 'dl';
    const step = () => slides[0].offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    function paint() {
      slides.forEach((s, k) => { const on = k === i; s.classList.toggle('is-on', on);
        if (phone.matches) { s.removeAttribute('aria-hidden'); s.inert = false; } else { s.setAttribute('aria-hidden', String(!on)); s.inert = !on; } });
      if (count) count.textContent = phone.matches ? (i + 1) + ' / ' + n : pad(i + 1) + ' / ' + pad(n);   // phones: Main's "1 / 3" (PR #42)
      root.dataset.index = i; ui.set(key, i || null);
    }
    function go(k, smooth) {
      i = (k + n) % n;
      if (phone.matches) { track.style.transform = ''; vp.scrollTo({ left: slides[i].offsetLeft, behavior: smooth === false ? 'auto' : 'smooth' }); }
      else { vp.scrollLeft = 0; track.style.transform = 'translateX(-' + (i * step()) + 'px)'; }   // a phone-width scroll must not survive into the desktop translate (PR #42 G3)
      paint();
    }
    root.querySelectorAll('.dl__nav').forEach(b => b.addEventListener('click', () => go(i + (+b.dataset.step))));
    vp.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); } if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); } });
    let x0 = 0, y0 = 0;
    vp.addEventListener('touchstart', e => { x0 = e.changedTouches[0].screenX; y0 = e.changedTouches[0].screenY; }, { passive: true });
    vp.addEventListener('touchend', e => { if (phone.matches) return; const dx = e.changedTouches[0].screenX - x0, dy = e.changedTouches[0].screenY - y0;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? i + 1 : i - 1); }, { passive: true });
    let tick = false;
    vp.addEventListener('scroll', () => { if (!phone.matches || tick) return; tick = true; requestAnimationFrame(() => { const k = Math.round(vp.scrollLeft / step());
      if (k !== i && k >= 0 && k < n) { i = k; paint(); } tick = false; }); }, { passive: true });
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => go(i, false), 120); });
    phone.addEventListener('change', () => go(i, false));
    go(Math.min(n - 1, Math.max(0, +ui.get(key) || 0)), false);   // a reload keeps the slide
  });
}
