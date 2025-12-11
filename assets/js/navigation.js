document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".jk-navbar-toggle");
  const menu = document.querySelector(".jk-navbar-menu");
  const overlay = document.querySelector(".jk-navbar-overlay");
  const body = document.body;
  
  // Define the time window (in milliseconds) for a double-tap to be recognized
  const DOUBLE_TAP_TIME_WINDOW = 300; 
  const MOBILE_BREAKPOINT = 993; // Matches your CSS media query

  // --- 1. Mobile Menu Open/Close Logic (Unchanged from previous fix) ---

  function toggleMenu() {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    
    // If opening, ensure body scroll is hidden
    if (!isExpanded) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    toggleBtn.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  toggleBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // --- 2. Single-Tap/Double-Tap Logic (The Core Fix) ---

  const dropdownLinks = document.querySelectorAll("[data-dropdown-toggle]");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // 1. Only apply this special logic on mobile screens
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        
        const parentItem = this.closest(".jk-navbar-item") || this.closest(".jk-dropdown-item");
        
        // Check if a timer already exists from the previous click (i.e., this is the second tap)
        const timerId = parseInt(this.getAttribute('data-tap-timer'));
        
        if (timerId > 0) {
          // --- DOUBLE TAP DETECTED (Second Tap) ---
          
          // Clear the timer and attribute
          clearTimeout(timerId);
          this.removeAttribute('data-tap-timer');
          
          // Allow default navigation (let the browser follow the href)
          return true; 

        } else {
          // --- SINGLE TAP DETECTED (First Tap) ---
          
          // 1. Prevent navigation immediately
          e.preventDefault(); 
          
          // 2. Open/Close the Dropdown (The primary single-tap action)
          const isOpen = parentItem.classList.contains("open");

          // Close all other open siblings before opening the current one
          parentItem.parentElement.querySelectorAll('.has-dropdown.open').forEach(sibling => {
             if (sibling !== parentItem) {
                 sibling.classList.remove('open');
                 sibling.querySelector('[aria-expanded]').setAttribute('aria-expanded', 'false');
             }
          });

          // Toggle the current item
          parentItem.classList.toggle("open", !isOpen);
          this.setAttribute('aria-expanded', String(!isOpen));
          
          // 3. Set a timer for the next tap
          // If the timer expires before a second click, the next click will be treated as a *new* single click.
          const newTimerId = setTimeout(() => {
            this.removeAttribute('data-tap-timer');
          }, DOUBLE_TAP_TIME_WINDOW);
          
          this.setAttribute('data-tap-timer', newTimerId);
        }
      } 
      // Note: On desktop (>= 993px), the default link behavior is allowed,
      // and the dropdowns are handled purely by CSS hover/focus rules.
    });
  });

  // --- 3. Reset on Resize (Unchanged) ---
  window.addEventListener("resize", () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT && menu.classList.contains("active")) {
      // Clean up mobile state when switching to desktop view
      menu.classList.remove("active");
      overlay.classList.remove("active");
      toggleBtn.classList.remove("active");
      body.style.overflow = "";
      
      // Ensure all mobile dropdowns are visually closed
      document.querySelectorAll(".jk-navbar-item.open, .jk-dropdown-item.open").forEach(item => {
        item.classList.remove("open");
      });
    }
  });
});