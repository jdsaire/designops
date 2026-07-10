/* home/carousel.js — CAPABILITIES carousel. */
function init() {
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
}

export { init };
