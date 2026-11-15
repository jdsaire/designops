/* pages/resume/cv.js — the CV on the Résumé page.

   The page's own dictionary holds the CV's address for each language under
   resume_cv_href. Two kinds of element name that key:
   - [data-cv-src]: the frame that shows the PDF on the page (GR-Q157). It has
     no src in the markup, so the first load fetches one PDF, in the reader's
     language. It shows only where the browser renders a PDF inline
     (navigator.pdfViewerEnabled === true); a browser that says false, or
     says nothing, gets the link instead (GR-Q158).
   - [data-cv-href]: the link that takes the frame's place there. The markup
     carries the English file as its default, which is also what a reader
     without script sees; [data-cv-fallback] wraps it and is hidden while the
     frame shows.

   Everything is decided again on every i18n:changed (first load, repeat
   visit, every live switch), so a language switch changes the PDF without a
   reload, and the frame's src is set only when it actually changes. A key
   missing from the active dictionary keeps the markup default rather than
   printing a key name.

   The listener is registered before the engine's init(), so the first
   event cannot be missed. The engine and the inline early scripts are not
   touched. */
var FRAGMENT = '#view=FitH';

function init() {
  var all = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var links = all('[data-cv-href]');
  var frames = all('[data-cv-src]');
  var fallbacks = all('[data-cv-fallback]');
  if (!links.length && !frames.length) return;
  var defaults = links.map(function (a) { return a.getAttribute('href'); });

  document.addEventListener('i18n:changed', function (e) {
    var dict = e.detail && e.detail.dict;
    if (!dict) return;
    links.forEach(function (a, i) {
      var href = dict[a.getAttribute('data-cv-href')];
      a.setAttribute('href', href !== undefined ? href : defaults[i]);
    });
    var inline = navigator.pdfViewerEnabled === true;
    var shown = false;
    frames.forEach(function (f) {
      var href = dict[f.getAttribute('data-cv-src')];
      if (inline && href !== undefined) {
        var src = href + FRAGMENT;
        if (f.getAttribute('src') !== src) f.setAttribute('src', src);
        f.hidden = false;
        shown = true;
      } else {
        f.hidden = true;
      }
    });
    fallbacks.forEach(function (p) { p.hidden = shown; });
  });
}

export { init };
