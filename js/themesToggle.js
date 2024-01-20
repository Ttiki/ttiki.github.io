// Toggle between light and dark themes when the theme toggle button is clicked
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
  const html = document.querySelector('html');
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

function setTheme(theme) {
  const html = document.querySelector('html');
  html.setAttribute('data-theme', theme);
}


//Credit: https://mostafawaleed.me/blog/creating-a-theme-toggle-using-sass