// assets/js/navigation.js - Enhanced Multi-level Navigation with 3-level Dropdown Support

/**
 * Enhanced Navigation System
 * Supports 3-level dropdown menus with smooth animations
 * Mobile-responsive with slide-in menu and overlay
 */

function initNavigation() {
  'use strict';

  const navbar = document.querySelector('.jk-navbar');
  const toggle = document.querySelector('.jk-navbar-toggle');
  const menu = document.querySelector('.jk-navbar-menu');
  const dropdownItems = document.querySelectorAll('.jk-navbar-item');
  
  if (!navbar || !toggle || !menu) {
    console.warn('Navigation elements not found');
    return;
  }

  // Create overlay for mobile menu
  const overlay = document.createElement('div');
  overlay.className = 'jk-navbar-overlay';
  document.body.appendChild(overlay);

  // State management
  let isMenuOpen = false;
  let isMobile = window.innerWidth <= 768;

  /**
   * Toggle mobile menu
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    toggle.classList.toggle('jk-active');
    menu.classList.toggle('jk-active');
    overlay.classList.toggle('jk-active');
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      closeAllDropdowns();
    }
  }

  /**
   * Close mobile menu
   */
  function closeMenu() {
    if (!isMenuOpen) return;
    
    isMenuOpen = false;
    toggle.classList.remove('jk-active');
    menu.classList.remove('jk-active');
    overlay.classList.remove('jk-active');
    document.body.style.overflow = '';
    closeAllDropdowns();
  }

  /**
   * Close all dropdown menus
   */
  function closeAllDropdowns() {
    dropdownItems.forEach(item => {
      item.classList.remove('jk-active');
    });
  }

  /**
   * Close all sibling dropdowns
   */
  function closeSiblingDropdowns(currentItem) {
    const parent = currentItem.parentElement;
    const siblings = parent ? Array.from(parent.children) : [];
    
    siblings.forEach(sibling => {
      if (sibling !== currentItem && sibling.classList.contains('jk-navbar-item')) {
        sibling.classList.remove('jk-active');
        // Also close nested dropdowns
        const nestedItems = sibling.querySelectorAll('.jk-navbar-item');
        nestedItems.forEach(nested => nested.classList.remove('jk-active'));
      }
    });
  }

  /**
   * Handle dropdown click for mobile
   */
  function handleDropdownClick(e, item) {
    if (!isMobile) return;

    const link = item.querySelector('.jk-navbar-link');
    const dropdown = item.querySelector('.jk-dropdown-menu');
    
    if (!dropdown) return;

    // If clicking on the parent link of a dropdown
    if (e.target === link || link.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = item.classList.contains('jk-active');
      
      // Close siblings at the same level
      closeSiblingDropdowns(item);
      
      // Toggle current dropdown
      if (isActive) {
        item.classList.remove('jk-active');
      } else {
        item.classList.add('jk-active');
      }
    }
  }

  /**
   * Handle desktop hover behavior
   */
  function setupDesktopHover() {
    if (isMobile) return;

    dropdownItems.forEach(item => {
      const dropdown = item.querySelector('.jk-dropdown-menu');
      if (!dropdown) return;

      let hoverTimeout;

      item.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        item.classList.add('jk-active');
      });

      item.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => {
          item.classList.remove('jk-active');
        }, 200);
      });
    });
  }

  /**
   * Handle window resize
   */
  function handleResize() {
    const wasMobile = isMobile;
    isMobile = window.innerWidth <= 768;

    if (wasMobile !== isMobile) {
      closeMenu();
      
      if (!isMobile) {
        // Desktop mode
        menu.classList.remove('jk-active');
        overlay.classList.remove('jk-active');
        document.body.style.overflow = '';
        setupDesktopHover();
      }
    }
  }

  /**
   * Handle click outside menu
   */
  function handleClickOutside(e) {
    if (isMobile && isMenuOpen) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    }
  }

  /**
   * Handle escape key
   */
  function handleEscapeKey(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }

  /**
   * Set active navigation item based on current URL
   */
  function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.jk-navbar-link, .jk-dropdown-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href) && href !== '/') {
        link.classList.add('jk-active');
        
        // Also highlight parent if this is in a dropdown
        let parent = link.closest('.jk-dropdown-menu');
        while (parent) {
          const parentItem = parent.closest('.jk-navbar-item');
          if (parentItem) {
            const parentLink = parentItem.querySelector('.jk-navbar-link');
            if (parentLink) {
              parentLink.classList.add('jk-active');
            }
          }
          parent = parentItem ? parentItem.closest('.jk-dropdown-menu') : null;
        }
      }
    });
  }

  /**
   * Initialize keyboard navigation
   */
  function initKeyboardNav() {
    const navLinks = navbar.querySelectorAll('.jk-navbar-link, .jk-dropdown-link');
    
    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          link.click();
        } else if (e.key === 'ArrowDown' && index < navLinks.length - 1) {
          e.preventDefault();
          navLinks[index + 1].focus();
        } else if (e.key === 'ArrowUp' && index > 0) {
          e.preventDefault();
          navLinks[index - 1].focus();
        }
      });
    });
  }

  // Event Listeners
  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Mobile dropdown clicks
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => handleDropdownClick(e, item));
  });

  // Desktop hover
  setupDesktopHover();

  // Window events
  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(handleResize, 250);
  });

  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);

  // Initialize features
  setActiveNavItem();
  initKeyboardNav();

  console.log('✅ Navigation initialized');
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}