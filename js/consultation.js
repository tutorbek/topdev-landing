/* ============================================================
   CONSULTATION PAGE SCRIPTS — TOPDEV
   Smooth, Modern & Accessible Form Handling
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPillSelectors();
  initFormatSwitcher();
  initConsultationForm();
});

/* Topic Pills Selector */
function initPillSelectors() {
  const pills = document.querySelectorAll('.pill-choice');
  const hiddenInput = document.getElementById('consultTopic');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      if (hiddenInput) {
        hiddenInput.value = pill.getAttribute('data-value') || pill.textContent.trim();
      }
    });
  });
}

/* Format Switcher */
function initFormatSwitcher() {
  const formatBtns = document.querySelectorAll('.format-btn');
  const hiddenInput = document.getElementById('consultFormat');

  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formatBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      if (hiddenInput) {
        hiddenInput.value = btn.getAttribute('data-value') || btn.textContent.trim();
      }
    });
  });
}

/* Form Validation & Submission */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  const submitBtn = document.getElementById('consultSubmitBtn');
  const successCard = document.getElementById('consultSuccessCard');
  const successSummary = document.getElementById('successSummary');
  const resetBtn = document.getElementById('resetFormBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('consultName');
    const contactInput = document.getElementById('consultContact');
    const topic = document.getElementById('consultTopic')?.value || 'High-Load & Backend';
    const format = document.getElementById('consultFormat')?.value || 'Online (Google Meet)';

    const name = nameInput?.value.trim() || '';
    const contact = contactInput?.value.trim() || '';

    if (!name) {
      nameInput?.focus();
      return;
    }

    if (!contact) {
      contactInput?.focus();
      return;
    }

    if (submitBtn) {
      submitBtn.textContent = 'Yuborilmoqda...';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (successCard) {
        successCard.classList.add('is-visible');
        if (successSummary) {
          successSummary.innerHTML = `Rahmat, <b>${escapeHtml(name)}</b>! <b>${escapeHtml(topic)}</b> bo‘yicha konsultatsiya so‘rovingiz qabul qilindi. Format: <b>${escapeHtml(format)}</b>. Mutaxassisimiz 2 soat ichida (${escapeHtml(contact)}) orqali siz bilan bog‘lanadi.`;
        }
      }
    }, 450);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (submitBtn) {
        submitBtn.textContent = 'Konsultatsiyani band qilish';
        submitBtn.disabled = false;
      }
      if (successCard) {
        successCard.classList.remove('is-visible');
      }
      form.style.display = 'flex';
    });
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
