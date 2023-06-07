// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('visible');
});

// Close menu when pressing Esc key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.getElementById('mobile-menu').classList.remove('visible');
  }
});

// Close menu when clicking on close button
if (document.getElementById('close-menu')) {
  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('visible');
  });
}

// Dark mode theme toggle
var themeToggle = document.getElementById('theme-toggle');
var buttons = document.querySelectorAll('button');

themeToggle.addEventListener('change', function () {
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
    buttons.forEach(function (button) {
      button.classList.add('dark-theme');
    });
    console.log('User prefers dark theme');
  } else {
    document.body.classList.remove('dark-theme');
    buttons.forEach(function (button) {
      button.classList.remove('dark-theme');
    });
    console.log('User prefers light theme');
  }
});

// Check user's preferred color scheme
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeToggle.checked = true;
  document.body.classList.add('dark-theme');
  buttons.forEach(function (button) {
    button.classList.add('dark-theme');
  });
  console.log('User prefers dark theme');
} else {
  themeToggle.checked = false;
  document.body.classList.remove('dark-theme');
  buttons.forEach(function (button) {
    button.classList.remove('dark-theme');
  });
}
// Get the current page URL
  var currentPage = window.location.href;

  // Check if the current page matches each menu item
  var homeLink = document.getElementById('home');
  var catalogLink = document.getElementById('catalog');
  var myLibraryLink = document.getElementById('my-library');

  if (currentPage.includes('index.html')) {
    homeLink.classList.add('current-page');
  } else if (currentPage.includes('catalog.html')) {
    catalogLink.classList.add('current-page');
  } else if (currentPage.includes('my-library.html')) {
    myLibraryLink.classList.add('current-page');
}
  
var homeLink = document.getElementById('home1');
var catalogLink = document.getElementById('catalog1');
var myLibraryLink = document.getElementById('my-library1');

if (currentPage.includes('index.html')) {
  homeLink.classList.add('current-page');
} else if (currentPage.includes('catalog.html')) {
  catalogLink.classList.add('current-page');
} else if (currentPage.includes('my-library.html')) {
  myLibraryLink.classList.add('current-page');
}