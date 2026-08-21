/* ============================================================
   TOPDEV — HOME PAGE JAVASCRIPT (home.js)
   Interactive Tech Stacks & Home Specific Features
   ============================================================ */

/* ============================================================
   5. HOME PAGE: TECH STACKS & CONTACT FORM
   ============================================================ */
function initHomePage() {
  // Interactive Tech Stack Tabs
  const stackTabBtns = document.querySelectorAll('.stack-tab-btn');
  const stackPanels = document.querySelectorAll('.stack-panel');

  if (stackTabBtns.length && stackPanels.length) {
    stackTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        stackTabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        stackPanels.forEach(panel => {
          if (panel.id === `tab-${targetTab}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });

        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
          ScrollTrigger.refresh();
        }
      });
    });
  }

  // Legacy stack filter fallback (if any)
  const stackFilterBtns = document.querySelectorAll('.stack-filter-btn');
  const stackCards = document.querySelectorAll('.stack-card');

  if (stackFilterBtns.length && stackCards.length) {
    stackFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        stackFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        stackCards.forEach(card => {
          const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
          if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('hidden-stack');
          } else {
            card.classList.add('hidden-stack');
          }
        });

        ScrollTrigger.refresh?.();
      });
    });
  }

  // Service chip selectors
  const serviceChips = document.querySelectorAll('.contact-chip');
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.innerHTML = '<span>Yuborilmoqda...</span>';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';
      }

      setTimeout(() => {
        if (submitBtn) submitBtn.style.display = 'none';
        if (contactSuccess) contactSuccess.style.display = 'block';
        contactForm.reset();
      }, 600);
    });
  }
}



if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}
