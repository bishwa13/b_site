// Header helpers
document.addEventListener('DOMContentLoaded', function() {
  // small helper — add `data-loaded` for progressive enhancement checks
  var header = document.querySelector('.bs-hero');
  if (header) header.setAttribute('data-loaded', 'true');
});
