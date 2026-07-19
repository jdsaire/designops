/* home/work.js — WORK v5 touch interaction (mobile + tablet) + dot pagination. */
function init() {
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
      workCards.forEach(function (c, i) {
        if (i !== idx) c.classList.remove('is-active');
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
}

export { init };
