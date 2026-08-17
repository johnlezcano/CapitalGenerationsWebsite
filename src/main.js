(() => {
  'use strict';

  const html = document.documentElement;
  const body = document.body;
  const header = document.querySelector('[data-site-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const siteNav = document.querySelector('[data-site-nav]');

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
    body.classList.remove('menu-open');
  };

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      siteNav.classList.toggle('is-open', !open);
      body.classList.toggle('menu-open', !open);
    });

    siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100) closeMenu();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      document.querySelectorAll('.nav-dropdown[open]').forEach((details) => details.removeAttribute('open'));
    }
  });

  document.addEventListener('click', (event) => {
    document.querySelectorAll('.nav-dropdown[open]').forEach((details) => {
      if (!details.contains(event.target)) details.removeAttribute('open');
    });
  });

  const revealNodes = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }

  const gaId = (html.dataset.gaId || '').trim();
  if (gaId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(script);
  }

  const trackEvent = (name, parameters = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, parameters);
    }
  };

  document.querySelectorAll('[data-track]').forEach((element) => {
    element.addEventListener('click', () => {
      trackEvent(element.dataset.track, {
        link_url: element.getAttribute('href') || '',
        page_path: window.location.pathname,
      });
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const status = contactForm.querySelector('[data-form-status]');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const endpoint = (contactForm.dataset.formspreeEndpoint || '').trim();
    const contactEmail = (contactForm.dataset.contactEmail || 'jlezcano@capitalgenerations.com').trim();
    const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    const emailLink = `<a href="mailto:${encodeURI(contactEmail)}">${escapeHtml(contactEmail)}</a>`;
    const defaultButtonHtml = submitButton ? submitButton.innerHTML : '';

    const showStatus = (message, type) => {
      if (!status) return;
      status.className = `form-status is-visible ${type === 'success' ? 'is-success' : 'is-error'}`;
      status.innerHTML = message;
    };

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      if (!endpoint) {
        showStatus(
          `The form is temporarily unavailable. Please email ${emailLink} or use the Calendly link.`,
          'error',
        );
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending…';
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) throw new Error('Form submission failed');

        contactForm.reset();
        showStatus('Thanks—your inquiry was sent. Capital Generations will follow up shortly.', 'success');
        trackEvent('form_submit_success', { form_name: 'contact', page_path: window.location.pathname });
      } catch (error) {
        showStatus(
          `The form could not be sent. Please try again or email ${emailLink}.`,
          'error',
        );
        trackEvent('form_submit_error', { form_name: 'contact', page_path: window.location.pathname });
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = defaultButtonHtml;
        }
      }
    });
  }
})();
