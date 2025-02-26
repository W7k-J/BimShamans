document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('theme-switcher');
  const currentTheme = localStorage.getItem('theme') || 'light';
  const switchState = localStorage.getItem('switchState') || 'false';

  // Set initial theme and switch state
  if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      themeSwitcher.checked = true;
  } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      themeSwitcher.checked = false;
  }

  // Set switch position from localStorage
  themeSwitcher.checked = switchState === 'true';

  themeSwitcher.addEventListener('change', function() {
      if (themeSwitcher.checked) {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
          localStorage.setItem('theme', 'dark');
          localStorage.setItem('switchState', 'true');
      } else {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
          localStorage.setItem('switchState', 'false');
      }
  });
});