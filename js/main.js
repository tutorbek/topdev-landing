/* ============================================================
   TOPDEV — GLOBAL JAVASCRIPT (main.js)
   Navigation, Mobile Drawer, Scroll Reveals & Shared Helpers
   ============================================================ */

/**
 * TOPDEV — High-Load Software & IT Engineering
 * Master Client-Side Application Script
 * Clean Code Architecture (Modular, Defensive & High-Performance)
 */

'use strict';

// Immediately signal that JS is active (remove .no-js fallback)
document.documentElement.classList.remove('no-js');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   1. RUNTIME & ANIMATION ENGINE FALLBACKS
   ============================================================ */
// Prevent automatic browser scroll jumping on page reload/navigation
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
} else {
  window.gsap = {
    ticker: { add: () => {}, lagSmoothing: () => {} },
    to: (target, opts) => { if (opts?.onComplete) opts.onComplete(); },
    from: () => {},
    fromTo: (target, fromVars, toVars) => { if (toVars?.onComplete) toVars.onComplete(); },
    set: (el, props) => {
      if (!el) return;
      const elements = el.length !== undefined ? Array.from(el) : [el];
      elements.forEach(node => {
        if (props.clearProps) {
          props.clearProps.split(',').forEach(p => { node.style[p.trim()] = ''; });
        }
      });
    },
    utils: { toArray: (sel) => Array.from(document.querySelectorAll(sel)) }
  };

  window.ScrollTrigger = {
    create: (opts) => { if (opts?.onEnter) opts.onEnter(); return { kill: () => {} }; },
    update: () => {},
    refresh: () => {}
  };
}

/* ============================================================
   2. NATIVE SMOOTH SCROLL & NAVIGATION HELPER
   ============================================================ */
/**
 * Smoothly scrolls to target element respecting fixed navbar height.
 * Uses native GPU-accelerated window.scrollTo.
 * @param {HTMLElement} target
 */
function scrollToElement(target) {
  if (!target) return;
  const navbarWrap = document.getElementById('navbarWrapper');
  const navOffset = navbarWrap ? navbarWrap.offsetHeight + 16 : 0;
  const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: targetY, behavior: 'smooth' });
}

/* ============================================================
   3. GLOBAL NAVIGATION & MOBILE DRAWER
   ============================================================ */
function initGlobalNavigation() {
  const navbarWrapper = document.getElementById('navbarWrapper');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  // Permanent fixed navbar (auto-hide removed as requested)

  // Mobile Menu Controls
  const openMobileMenu = () => {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    mobileClose?.focus();
  };

  const closeMobileMenu = () => {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    burgerBtn.focus();
  };

  burgerBtn?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Smooth in-page anchor navigation
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const pagePart = href.slice(0, hashIndex);
      const targetId = href.slice(hashIndex + 1);
      if (!targetId) return;

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const isSamePage = !pagePart || pagePart === currentPage ||
        ((pagePart === 'index.html' || pagePart === './index.html') && (currentPage === 'index.html' || currentPage === ''));

      if (isSamePage) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          scrollToElement(targetElement);
          if (mobileMenu?.classList.contains('open')) {
            closeMobileMenu();
          }
        }
      }
    });
  });
}

/* ============================================================
   4. SCROLL REVEALS (INSTANT DISPLAY WITHOUT ANIMATIONS)
   ============================================================ */
function initScrollReveals() {
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.add('is-revealed');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}



/* ============================================================
   5. UZBEKISTAN PHONE NUMBER MASK (+998)
   ============================================================ */
function initPhoneMasks() {
  const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"]');
  phoneInputs.forEach(input => {
    if (!input.placeholder || input.placeholder === '') {
      input.placeholder = '+998 (__) ___-__-__';
    }

    input.addEventListener('input', () => {
      let val = input.value.replace(/\D/g, '');
      if (val.startsWith('998')) {
        val = val.substring(3);
      }
      val = val.substring(0, 9); // max 9 digits after 998

      let formatted = '+998';
      if (val.length > 0) {
        formatted += ' (' + val.substring(0, 2);
      }
      if (val.length >= 2) {
        formatted += ') ' + val.substring(2, 5);
      }
      if (val.length >= 5) {
        formatted += '-' + val.substring(5, 7);
      }
      if (val.length >= 7) {
        formatted += '-' + val.substring(7, 9);
      }
      input.value = formatted;
    });

    input.addEventListener('focus', () => {
      if (!input.value || input.value.trim() === '') {
        input.value = '+998 ';
      }
    });

    input.addEventListener('blur', () => {
      if (input.value === '+998 ' || input.value === '+998') {
        input.value = '';
      }
    });
  });
}

/* ============================================================
   6. UNIVERSAL FORM SUBMIT FEEDBACK
   ============================================================ */
function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], .contact-submit-btn, .form-submit-btn, .submit-btn');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      const successBox = form.querySelector('.contact-success-msg, .modal-success-state, #contactSuccess') || document.getElementById('contactSuccess');

      if (!form.getAttribute('action') || form.getAttribute('action') === '#' || form.id === 'contactForm' || form.id === 'consultForm' || form.id === 'applyForm') {
        e.preventDefault();

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Yuborilmoqda...</span>';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
          if (successBox) {
            successBox.style.display = 'block';
            successBox.classList.add('is-visible');
          }
          form.reset();
        }, 800);
      }
    });
  });
}

/* ============================================================
   BOOTSTRAP ON DOM READY
   ============================================================ */
function initMain() {
  initGlobalNavigation();
  initScrollReveals();
  initPhoneMasks();
  initForms();

  // Enable CSS transitions only after all JS init has settled.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.add('js-ready');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMain);
} else {
  initMain();
}

window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
    ScrollTrigger.refresh();
  }
});

