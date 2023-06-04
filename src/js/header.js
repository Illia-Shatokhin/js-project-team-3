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
