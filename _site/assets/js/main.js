// Load smaller JS modules (header, nav, footer) relative to this script
(function loadModules() {
  try {
    var currentScript = document.currentScript || (function() { var s = document.getElementsByTagName('script'); return s[s.length-1]; })();
    var base = (currentScript && currentScript.src) ? currentScript.src.replace(/\/[^\/]*$/, '/') : '/assets/js/';
    ['header.js', 'nav.js', 'footer.js'].forEach(function(name) {
      var s = document.createElement('script');
      s.src = base + name;
      s.defer = true;
      document.head.appendChild(s);
    });
  } catch (e) {
    console.warn('Module loader error:', e);
  }
})();
// main.js now only loads module scripts (header, nav, footer). All UI logic
// for navigation has been moved to `assets/js/nav.js`.