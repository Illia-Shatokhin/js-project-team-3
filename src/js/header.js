const THEME_KEY = 'theme';
// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('visible');
});

// Close menu when pressing Esc key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.getElementById('mobile-menu').classList.remove('visible');
    closeMenu();
  }
});

// Close menu when clicking on close button
if (document.getElementById('close-menu')) {
  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('visible');
    closeMenu();
  });
}

// Close menu when clicking on backdrop
if (document.getElementById('close-menu')) {
  document.getElementById('backdrop').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('visible');
    closeMenu();
  });
}

// Get the current page URL
var currentPage = window.location.href;

// Get the navigation menu items
var homeLink = document.getElementById('home');
var catalogLink = document.getElementById('catalog');
var myLibraryLink = document.getElementById('my-library');

var homeLink1 = document.getElementById('home1');
var catalogLink1 = document.getElementById('catalog1');
var myLibraryLink1 = document.getElementById('my-library1');

// Remove the "current-page" class from all links
homeLink.classList.remove('current-page');
catalogLink.classList.remove('current-page');
myLibraryLink.classList.remove('current-page');

homeLink1.classList.remove('current-page');
catalogLink1.classList.remove('current-page');
myLibraryLink1.classList.remove('current-page');

// Check if the current page matches each menu item and add the "current-page" class
if (currentPage.includes('index.html')) {
  homeLink.classList.add('current-page');
} else if (currentPage.includes('catalog.html')) {
  catalogLink.classList.add('current-page');
} else if (currentPage.includes('my-library.html')) {
  myLibraryLink.classList.add('current-page');
} else {
  homeLink.classList.add('current-page');
}
if (currentPage.includes('index.html')) {
  homeLink1.classList.add('current-page');
} else if (currentPage.includes('catalog.html')) {
  catalogLink1.classList.add('current-page');
} else if (currentPage.includes('my-library.html')) {
  myLibraryLink1.classList.add('current-page');
} else {
  homeLink1.classList.add('current-page');
}
// Mobile menu toggle
var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');
var backdrop = document.getElementById('backdrop');
var closeMenuButton = document.getElementById('close-menu');

function openMenu() {
  mobileMenu.classList.add('visible');
  mobileMenu.classList.add('show-menu');
  backdrop.classList.add('show-backdrop');
}

function closeMenu() {
  mobileMenu.classList.remove('show-menu');
  backdrop.classList.remove('show-backdrop');
  mobileMenu.classList.remove('visible');
}

menuToggle.addEventListener('change', function () {
  if (this.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

closeMenuButton.addEventListener('click', function () {
  menuToggle.checked = false;
  closeMenu();
});

// Close button event listener
document.getElementById('close-menu').addEventListener('click', function () {
  var mobileMenu = document.getElementById('mobile-menu');
  var backdrop = document.getElementById('backdrop');
  mobileMenu.classList.remove('show-menu');
  backdrop.classList.remove('show-backdrop');
  setTimeout(function () {
    mobileMenu.classList.remove('visible');
  }, 300);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var themeToggle = document.getElementById('theme-toggle');

// ================================================================================================

export function themeSwitcher() {
  const theme = JSON.parse(loadThemeFromLocal(THEME_KEY));
  const switchTheme = document.querySelector('.switch');

  if (theme) switchTheme.classList.add('true');
  if (theme) document.body.classList.add('light');

  switchTheme.querySelector('span').addEventListener('click', () => {
    if (switchTheme.classList.contains('true')) {
      saveThemeToLocal(THEME_KEY, false);
      switchTheme.classList.remove('true');
      document.body.classList.remove('light');
    } else {
      saveThemeToLocal(THEME_KEY, true);
      switchTheme.classList.add('true');
      document.body.classList.add('light');
    }
  });
}

function loadThemeFromLocal(key) {
  return localStorage.getItem(key);
}

function saveThemeToLocal(key, value) {
  localStorage.setItem(key, value);
}
