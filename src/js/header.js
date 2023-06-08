// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('visible');
});

// Close menu when pressing Esc key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // document.getElementById('mobile-menu').classList.remove('visible');
    closeMenu();
  }
});

// Close menu when clicking on close button
if (document.getElementById('close-menu')) {
  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('visible');
  });
}

// Dark mode theme toggle
/*var themeToggle = document.getElementById('theme-toggle');
// var buttons = document.querySelectorAll('button');

themeToggle.addEventListener('change', function () {
  if (themeToggle.checked) {
    document.body.classList.add('light');
    // buttons.forEach(function (button) {
    //   button.classList.add('light');
    // });
  } else {
    document.body.classList.remove('light');
    // buttons.forEach(function (button) {
    //   button.classList.remove('light');
    // });
  }
});

// Check user's preferred color scheme
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeToggle.checked = true;
  document.body.classList.add('light');
  // buttons.forEach(function (button) {
  //   button.classList.add('dark-theme');
  // });
} else {
  themeToggle.checked = false;
  document.body.classList.remove('light');
  // buttons.forEach(function (button) {
  //   button.classList.remove('dark-theme');
  // });
}*/

var themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function () {
  if (themeToggle.checked) {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
});

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeToggle.checked = false; // Set the toggle to unchecked for dark mode
  document.body.classList.remove('light');
} else {
  themeToggle.checked = true; // Set the toggle to checked for light mode
  document.body.classList.add('light');
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
// Function to set the preferred theme
function setPreferredTheme(theme) {
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
  const isDarkTheme = document.body.classList.contains('dark-theme');
  if (isDarkTheme) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
}

// Function to initialize the theme based on user preference
function initializeTheme() {
  const preferredTheme = localStorage.getItem('theme');
  if (preferredTheme === 'dark-theme') {
    setPreferredTheme('dark-theme');
  } else if (preferredTheme === 'light') {
    setPreferredTheme('light');
  } else {
    // Default theme if 'theme' item is null or empty
    setPreferredTheme('dark-theme');
  }
  
  // Update the theme toggle button state
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.checked = isDarkTheme;
}

// Check if the user has visited the site before
if (localStorage.getItem('visitedBefore') === null) {
  // First time visit, set dark theme and save the preference
  setPreferredTheme('dark-theme');
  localStorage.setItem('visitedBefore', true);
} else {
  // User has visited before, initialize theme based on preference
  initializeTheme();
}

// Event listener for theme toggle
document.getElementById('theme-toggle').addEventListener('change', function() {
  toggleTheme();
});