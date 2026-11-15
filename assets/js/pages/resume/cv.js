/* pages/resume/cv.js — the CV on the Résumé page (GR-Q157; RV-Q12…Q14).

   Computers with a mouse and an inline PDF viewer (navigator.pdfViewerEnabled, at least 768 px wide, not a
   touch-first screen) get the browser's own viewer in the frame, with its thumbnail pane hidden and the page
   fitted to the width. Everyone else, phones, landscape phones, tablets and browsers without an inline viewer,
   gets the sheet drawn by PDF.js (assets/vendor/pdfjs/, imported only then), fitted to the width, with a text
   layer, link overlays and one Download. The choice is made again when the width or the pointer changes.

   The page's dictionary holds each language's address under resume_cv_href; every i18n:changed (first load,
   repeat visit, live switch) points the frame, the sheet and the links at the reader's language, so one PDF
   loads per language. The listener is registered before the engine's init(), so the first event cannot be
   missed. Without script, the Open the PDF link in the markup stays. */
var FRAGMENT = '#navpanes=0&view=FitH';
var BASE = new URL('../../../vendor/pdfjs/', import.meta.url).href;
var wide = window.matchMedia('(min-width: 768px)');
var touch = window.matchMedia('(pointer: coarse) and (hover: none)');

function init() {
  var all = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var links = all('[data-cv-href]');
  var frame = document.querySelector('.rv-frame');
  var mobile = document.querySelector('.rv-mobile');
  var nojs = document.querySelector('[data-cv-fallback]');
  var sheet = document.querySelector('.rv-sheet');
  var pageEl = sheet.querySelector('.rv-page'), canvas = pageEl.querySelector('canvas');
  var textEl = pageEl.querySelector('.textLayer'), linkEl = pageEl.querySelector('.rv-links');
  var dict = null, lib = null, docs = {}, page = null, shown = null, token = 0, textTask = null, renderTask = null;

  function native() { return navigator.pdfViewerEnabled === true && wide.matches && !touch.matches; }
  function loadLib() {
    if (!lib) lib = import(BASE + 'pdf.min.mjs').then(function (m) { m.GlobalWorkerOptions.workerSrc = BASE + 'pdf.worker.min.mjs'; return m; });
    return lib;
  }
  function render() {
    if (!page || mobile.hidden) return;
    var my = ++token, base = page.getViewport({ scale: 1 });
    var scale = (sheet.clientWidth - 2) / base.width, vp = page.getViewport({ scale: scale }), dpr = window.devicePixelRatio || 1;
    pageEl.style.width = vp.width + 'px'; pageEl.style.height = vp.height + 'px';
    pageEl.style.setProperty('--total-scale-factor', scale);
    pageEl.style.setProperty('--scale-round-x', '1px'); pageEl.style.setProperty('--scale-round-y', '1px');
    var draw = function () {
      if (my !== token) return;
      canvas.width = Math.floor(vp.width * dpr); canvas.height = Math.floor(vp.height * dpr);
      renderTask = page.render({ canvasContext: canvas.getContext('2d'), viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null });
      renderTask.promise.catch(function () {});
    };
    if (renderTask) { renderTask.cancel(); renderTask.promise.then(draw, draw); } else { draw(); }
    loadLib().then(function (m) {
      if (my !== token) return;
      if (textTask && textTask.cancel) textTask.cancel();
      textEl.textContent = '';
      textTask = new m.TextLayer({ textContentSource: page.streamTextContent(), container: textEl, viewport: vp });
      textTask.render().catch(function () {});
      return page.getAnnotations();
    }).then(function (annots) {
      if (!annots || my !== token) return;
      linkEl.textContent = '';
      var t = vp.transform, pt = function (x, y) { return [t[0] * x + t[2] * y + t[4], t[1] * x + t[3] * y + t[5]]; };
      annots.filter(function (a) { return a.subtype === 'Link' && a.url; }).forEach(function (a) {
        var p1 = pt(a.rect[0], a.rect[1]), p2 = pt(a.rect[2], a.rect[3]), el = document.createElement('a');
        el.href = a.url; el.setAttribute('aria-label', a.url.replace(/^mailto:/, ''));
        el.style.left = Math.min(p1[0], p2[0]) + 'px'; el.style.top = Math.min(p1[1], p2[1]) + 'px';
        el.style.width = Math.abs(p2[0] - p1[0]) + 'px'; el.style.height = Math.abs(p2[1] - p1[1]) + 'px';
        linkEl.appendChild(el);
      });
    });
  }
  function apply() {
    if (!dict) return;
    var href = dict['resume_cv_href'];
    links.forEach(function (a) {
      a.setAttribute('href', href);
      if (a.hasAttribute('data-cv-download')) a.setAttribute('download', href.split('/').pop().split('?')[0]);
    });
    nojs.hidden = true;
    var n = native();
    frame.hidden = !n; mobile.hidden = n;
    if (n) {
      var src = href + FRAGMENT;
      if (frame.getAttribute('src') !== src) frame.setAttribute('src', src);
    } else if (shown !== href) {
      shown = href;
      loadLib().then(function (m) {
        if (!docs[href]) docs[href] = m.getDocument({ url: href, isEvalSupported: false }).promise;
        return docs[href];
      }).then(function (doc) { return doc.getPage(1); }).then(function (p) { if (shown === href) { page = p; render(); } });
    } else { render(); }
  }
  var t = null;
  window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(render, 150); });
  wide.addEventListener('change', apply); touch.addEventListener('change', apply);
  document.addEventListener('i18n:changed', function (e) { if (e.detail && e.detail.dict) { dict = e.detail.dict; apply(); } });
}

export { init };
