/* home/contact.js — CONTACT single-path form validation + success modal.
   Name / Email / Message → Formspree. One success state. */
function init() {
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

  /* The submit handler used to preventDefault and open the success modal
     without sending anything, so every visitor was shown a confirmation for
     a message that went nowhere. It now posts to the form's real action and
     confirms only on a genuine success.

     On a network or endpoint failure it falls back to a native submit rather
     than reporting an error inline: the page has no failure-state markup and
     authoring one is a copy decision, not this run's. The native post lands
     on the handler's own response page, so the visitor still learns what
     happened and their message still reaches its destination. */
  let sending = false;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (sending) return;
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let valid = true;
    fields.forEach((f) => { if (!validateField(f)) valid = false; });
    if (!valid) {
      const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if (firstError) firstError.focus();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    sending = true;
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        openModal();
        form.reset();
      })
      .catch(() => {
        /* Let the browser post the form the ordinary way. */
        HTMLFormElement.prototype.submit.call(form);
      })
      .finally(() => {
        sending = false;
        if (submitBtn) submitBtn.disabled = false;
      });
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
}

export { init };
