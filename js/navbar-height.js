function updateNavbarHeight() {
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height', `${headerHeight}px`);
  }
}

window.addEventListener('load', updateNavbarHeight);

window.addEventListener('resize', updateNavbarHeight);