// Footer helpers
document.addEventListener('DOMContentLoaded', function() {
  var footer = document.querySelector('.bs-site-footer') || document.querySelector('.jk-footer-simple') || document.querySelector('.jk-footer');
  if (footer) footer.setAttribute('data-loaded', 'true');
});
