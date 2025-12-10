document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.jk-navbar-toggle');
  const menu = document.querySelector('.jk-navbar-menu');
  const overlay = document.querySelector('.jk-navbar-overlay');
  const dropdownItems = document.querySelectorAll('.jk-navbar-item.has-dropdown, .jk-dropdown-item.has-dropdown');

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('jk-active');
      toggle.classList.toggle('jk-active');
      toggle.setAttribute('aria-expanded', toggle.classList.contains('jk-active') ? 'true' : 'false');
      if (overlay) overlay.classList.toggle('jk-active');
    });
  }

  // Dropdown toggle with single vs double tap
  dropdownItems.forEach(function(item) {
    const link = item.querySelector('.jk-navbar-link, .jk-dropdown-link');
    if (!link) return;

    let lastTap = 0;

    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        const submenu = item.querySelector('.jk-dropdown-menu');
        if (submenu) {
          const currentTime = new Date().getTime();
          const tapLength = currentTime - lastTap;

          if (tapLength < 500 && tapLength > 0) {
            // Double tap → allow navigation
            return true;
          } else {
            // Single tap → toggle submenu
            e.preventDefault();

            const siblings = item.parentElement.querySelectorAll('.has-dropdown');
            siblings.forEach(function(sibling) {
              if (sibling !== item) sibling.classList.remove('jk-active');
            });

            item.classList.toggle('jk-active');
          }
          lastTap = currentTime;
        }
      }
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('.jk-navbar') && menu.classList.contains('jk-active')) {
        menu.classList.remove('jk-active');
        toggle.classList.remove('jk-active');
        toggle.setAttribute('aria-expanded', 'false');
        if (overlay) overlay.classList.remove('jk-active');
        dropdownItems.forEach(function(item) {
          item.classList.remove('jk-active');
        });
      }
    }
  });

  // Reset on resize back to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menu.classList.remove('jk-active');
      toggle.classList.remove('jk-active');
      toggle.setAttribute('aria-expanded', 'false');
      if (overlay) overlay.classList.remove('jk-active');
      dropdownItems.forEach(function(item) {
        item.classList.remove('jk-active');
      });
    }
  });
});
