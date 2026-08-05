/* =========================================
   Accountancy Chamber — Mobile Navigation
========================================= */
(function () {
  var sidebar = document.querySelector('.sidebar');
  var hamburger = document.querySelector('.hamburger');
  var overlay = document.querySelector('.overlay');

  if (!sidebar || !hamburger || !overlay) return;

  function isOpen() {
    return sidebar.classList.contains('open');
  }

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  /* Toggle with hamburger button */
  hamburger.addEventListener('click', function () {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* Close when tapping the dark overlay */
  overlay.addEventListener('click', closeMenu);

  /* Close with the Escape key (accessibility) */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  /* Close the menu after choosing a page (mobile) */
  var links = sidebar.querySelectorAll('.sidebar-nav a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      if (window.innerWidth <= 992) closeMenu();
    });
  }

  /* Reset cleanly when resizing back to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992 && isOpen()) closeMenu();
  });
})();
