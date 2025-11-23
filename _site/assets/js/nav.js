// Full navigation behavior: mobile toggle, dropdown handling, outside click, resize
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.bs-main-nav');
  if (nav) nav.classList.add('js-enabled');

  var mobileToggle = document.querySelector('.bs-mobile-toggle');
  var navMenu = document.querySelector('.bs-nav-menu');
  var dropdownItems = document.querySelectorAll('.bs-has-dropdown');

  // Adjust dropdown alignment to prevent overflow
  function adjustDropdownAlignment() {
    if (!dropdownItems) return;
    dropdownItems.forEach(function(item) {
      var menu = item.querySelector('.bs-dropdown-menu');
      if (!menu) return;

      // measure menu width by temporarily showing it hidden (no visual flash)
      var prevDisplay = menu.style.display;
      var prevVisibility = menu.style.visibility;
      menu.style.visibility = 'hidden';
      menu.style.display = 'block';
      var menuWidth = menu.offsetWidth;
      // restore
      menu.style.display = prevDisplay || '';
      menu.style.visibility = prevVisibility || '';

      var rect = item.getBoundingClientRect();
      var availableRight = window.innerWidth - rect.left;

      if (menuWidth > availableRight - 12) { // a bit of margin
        menu.classList.add('bs-align-right');
      } else {
        menu.classList.remove('bs-align-right');
      }
    });
  }

  function resetHamburger() {
    if (!mobileToggle) return;
    var spans = mobileToggle.querySelectorAll('span');
    if (spans && spans.length >= 3) {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      var spans = this.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        if (spans.length >= 3) {
          spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        }
      } else {
        resetHamburger();
      }
    });
  }

  // Mobile dropdown toggle
  if (dropdownItems && dropdownItems.length && window.innerWidth <= 768) {
    dropdownItems.forEach(function(item) {
      var link = item.querySelector('.bs-nav-link');
      if (!link) return;
      link.addEventListener('click', function(e) {
        if (item.classList.contains('bs-has-dropdown')) {
          e.preventDefault();
          dropdownItems.forEach(function(otherItem) {
            if (otherItem !== item) otherItem.classList.remove('active');
          });
          item.classList.toggle('active');
        }
      });
    });
  }

  // Recalculate alignment on load and when resizing
  adjustDropdownAlignment();

  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      adjustDropdownAlignment();
    }, 160);
  });

  // When user hovers or focuses a dropdown parent on desktop, ensure alignment
  dropdownItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      adjustDropdownAlignment();
    });
    item.addEventListener('focusin', function() {
      adjustDropdownAlignment();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.bs-main-nav') && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      resetHamburger();
    }
  });

  // Handle window resize
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        dropdownItems.forEach(function(item) { item.classList.remove('active'); });
        resetHamburger();
      }
    }, 250);
  });
});
