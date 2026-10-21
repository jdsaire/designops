/* pages/about/slogan.js — fits each display title (.ah: About's arc slogans, Contact's opening since PR43-Q29) as Main's hero.js fits the hero (PR #43, PR43-Q18…Q20, Q24):
   both lines share one size, at most 6.5 rem, and that size is the smaller of two fits:
   - width: the widest line ends just short of the column;
   - height: the date label (.ah-label), the slogan and its subline (.ah-sub) stand inside the viewport under the nav, with 1.5 rem above and below,
     so a reader landing on the arc sees all of it at every breakpoint.
   Refits on resize, on a language swap and once the face has loaded; until then the CSS clamp applies. */
const SLACK = 0.985, TRIAL = 100;
function fit() {
  const root = getComputedStyle(document.documentElement), rem = parseFloat(root.fontSize);
  const nav = document.querySelector('.nav'), navH = nav ? nav.getBoundingClientRect().height : rem * 4;
  const avail = innerHeight - navH - 3 * rem;
  document.querySelectorAll('.ah').forEach(h => {
    const box = h.parentElement, cs = getComputedStyle(box);
    const w = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    h.classList.add('is-fit'); h.style.setProperty('--ah-size', TRIAL + 'px');
    const widest = Math.max(...[...h.querySelectorAll('.ah__line')].map(l => l.scrollWidth));
    const sub = h.nextElementSibling && h.nextElementSibling.classList.contains('ah-sub') ? h.nextElementSibling : null;
    const subH = sub ? sub.getBoundingClientRect().height + parseFloat(getComputedStyle(sub).marginTop) : 0;
    const lab = h.previousElementSibling && h.previousElementSibling.classList.contains('ah-label') ? h.previousElementSibling : null;
    const labH = lab ? lab.getBoundingClientRect().height + parseFloat(getComputedStyle(lab).marginBottom) : 0;
    const tall = h.getBoundingClientRect().height;   // the slogan's height at the trial size scales with the size
    const byWidth = TRIAL * w * SLACK / widest, byHeight = TRIAL * Math.max(0, avail - subH - labH) / tall;
    h.style.setProperty('--ah-size', Math.min(byWidth, byHeight, rem * 6.5).toFixed(1) + 'px');
  });
}
export function init() {
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(fit, 100); }, { passive: true });
  document.addEventListener('i18n:changed', () => requestAnimationFrame(fit));
}
