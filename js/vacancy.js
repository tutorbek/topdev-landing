/* ============================================================
   TOPDEV — VACANCIES PAGE JAVASCRIPT (vacancy.js)
   Vacancy Filters, Resume Handling & Application Modal
   ============================================================ */

/* ============================================================
   9. VACANCY PAGE LOGIC
   ============================================================ */
function initVacancyPage() {
  const cards = document.querySelectorAll('.vacancy-card');
  if (!cards.length) return;

  const filterChips = document.querySelectorAll('.vacancy-filter-chip');
  const searchInput = document.getElementById('vacancySearchInput');
  const countNum = document.getElementById('vacanciesCount');
  const emptyState = document.getElementById('vacanciesEmptyState');

  let activeFilter = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.vacancy-card-title')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('.vacancy-card-desc')?.textContent || '').toLowerCase();
      const cardTech = (card.querySelector('.vacancy-tech-row')?.textContent || '').toLowerCase();

      const matchesCategory = (activeFilter === 'all') || cardCategory.split(' ').includes(activeFilter);
      const searchableText = `${cardTitle} ${cardDesc} ${cardTech}`;
      const matchesSearch = !searchQuery || searchableText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('is-hidden');
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
      }
    });

    if (countNum) countNum.textContent = visibleCount;
    if (emptyState) {
      if (visibleCount === 0) emptyState.classList.add('is-visible');
      else emptyState.classList.remove('is-visible');
    }

    ScrollTrigger.refresh?.();
  };

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  // Accordion drawer toggle
  const toggleButtons = document.querySelectorAll('.vacancy-details-toggle');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.vacancy-card');
      if (!card) return;

      const isExpanded = card.classList.contains('is-expanded');
      const textSpan = btn.querySelector('.toggle-text');

      if (isExpanded) {
        card.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        if (textSpan) textSpan.textContent = 'Batafsil talablar';
      } else {
        card.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        if (textSpan) textSpan.textContent = 'Yopish';
      }

      ScrollTrigger.refresh?.();
    });
  });

  // Application Modal
  const modal = document.getElementById('applyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openButtons = document.querySelectorAll('[data-apply-role]');
  const roleSelect = document.getElementById('applyRole');
  const applyForm = document.getElementById('applyForm');
  const successState = document.getElementById('modalSuccessState');
  const submitBtn = document.getElementById('modalSubmitBtn');

  if (modal) {
    const openModal = (roleName) => {
      if (roleSelect && roleName) {
        let found = false;
        for (let i = 0; i < roleSelect.options.length; i++) {
          if (roleSelect.options[i].value.toLowerCase() === roleName.toLowerCase()) {
            roleSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) roleSelect.value = roleName;
      }

      if (applyForm) applyForm.style.display = 'flex';
      if (successState) successState.classList.remove('is-visible');

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';

      const firstInput = modal.querySelector('input');
      setTimeout(() => firstInput?.focus(), 100);
    };

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
    };

    openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(btn.getAttribute('data-apply-role') || '');
      });
    });

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });

    applyForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Yuborilmoqda...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Arizani yuborish</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H3M10 2V9" stroke="currentColor" stroke-width="1.5" />
            </svg>`;
        }
        applyForm.reset();
        applyForm.style.display = 'none';
        successState?.classList.add('is-visible');
      }, 700);
    });
  }
}



if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVacancyPage);
} else {
  initVacancyPage();
}
