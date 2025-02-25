document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('theme-switcher');
  const currentTheme = localStorage.getItem('theme') || 'light';

  console.log('Current theme:', currentTheme);

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    themeSwitcher.checked = true;
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  themeSwitcher.addEventListener('change', function() {
    if (themeSwitcher.checked) {
      console.log('Switching to dark theme');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('Switching to light theme');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});