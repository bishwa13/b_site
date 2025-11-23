// assets/js/main.js - Main JavaScript Entry Point

/**
 * Main application initialization
 * Loads and initializes all modules
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    navbarScrollThreshold: 50,
    smoothScrollDuration: 800,
    lazyLoadThreshold: 200
  };

  // Utility Functions
  const utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Smooth scroll to element
    smoothScrollTo: function(target, duration = config.smoothScrollDuration) {
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
      if (!targetElement) return;

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  // Initialize all modules when DOM is ready
  function init() {
    console.log('🚀 Initializing application...');

    // Initialize navigation
    if (typeof initNavigation === 'function') {
      initNavigation();
    }

    // Initialize scroll effects
    initScrollEffects();

    // Initialize animations
    initAnimations();

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize lazy loading
    initLazyLoad();

    console.log('✅ Application initialized successfully');
  }

  // Scroll Effects
  function initScrollEffects() {
    const navbar = document.querySelector('.jk-navbar');
    if (!navbar) return;

    const handleScroll = utils.throttle(() => {
      if (window.pageYOffset > config.navbarScrollThreshold) {
        navbar.classList.add('jk-navbar-scrolled');
      } else {
        navbar.classList.remove('jk-navbar-scrolled');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
  }

  // Animation on Scroll
  function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target.dataset.animate;
          entry.target.classList.add(animation);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(element => observer.observe(element));
  }

  // Smooth Scroll for Anchor Links
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          utils.smoothScrollTo(targetElement);
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

  // Lazy Load Images
  function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('jk-fade-in');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: `${config.lazyLoadThreshold}px`
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Expose utilities globally
  window.JekyllKit = {
    utils: utils,
    config: config
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();