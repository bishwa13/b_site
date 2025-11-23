// Full navigation behavior: mobile toggle, dropdown handling, outside click, resize
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.bs-main-nav');
  if (nav) nav.classList.add('js-enabled');

  var mobileToggle = document.querySelector('.bs-mobile-toggle');
  var navMenu = document.querySelector('.bs-nav-menu');
  var dropdownItems = document.querySelectorAll('.bs-has-dropdown');

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
