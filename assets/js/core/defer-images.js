/* core/defer-images.js — below-the-fold images that wait for the reader (PR #46 G5A).
   loading="lazy" still starts an image up to ~2,500 px away, so Main's posters and capability images were fetched
   with the first paint and counted against it. An image marked data-src / data-srcset gets its source only when it
   comes within 600 px of the viewport, with the rest of its section. Without IntersectionObserver every image loads at once. The ticker's logos
   follow the same rule in pages/home/ticker.js, which also has to measure them. */
function init() {
  const imgs = Array.prototype.slice.call(document.querySelectorAll('img[data-src]'));
  if (!imgs.length) return;
  const show = (img) => {
    if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    img.src = img.dataset.src;
  };
  if (!('IntersectionObserver' in window)) { imgs.forEach(show); return; }
  /* A carousel clips its off-screen slides, and a clipped image never intersects; so when one image in a section
     comes near, the whole section's images load, and a swipe never meets an empty slide. */
  const near = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const group = e.target.closest('section') || document;
    group.querySelectorAll('img[data-src]').forEach((img) => {
      if (img.getAttribute('src')) return;
      show(img);
      near.unobserve(img);
    });
  }), { rootMargin: '0px 0px 600px 0px' });
  imgs.forEach((img) => near.observe(img));
}

export { init };
