/**
 * Mobile Navigation Toggle
 * Hamburger menu functionality for responsive navigation
 */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.querySelector('.site-nav');
  const controls = document.querySelector('.controls');
  const body = document.body;
  
  if (!navToggle || !siteNav) {
    return;
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = navToggle.classList.contains('active');
    
    if (isOpen) {
      // Close menu
      navToggle.classList.remove('active');
      siteNav.classList.remove('mobile-menu-open');
      if (controls) {
        controls.classList.remove('visible');
      }
      navToggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = ''; // Re-enable scrolling
    } else {
      // Open menu
      navToggle.classList.add('active');
      siteNav.classList.add('mobile-menu-open');
      if (controls) {
        // Delay showing controls for smooth transition
        setTimeout(function() {
          controls.classList.add('visible');
        }, 200);
      }
      navToggle.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }
  
  // Click handler for toggle button
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking nav links
  const navLinks = siteNav.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 1180 && navToggle.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });
  
  // Force close menu immediately on window resize to prevent flashing
  window.addEventListener('resize', function() {
    // Close immediately if above mobile breakpoint
    if (window.innerWidth > 1180 && navToggle.classList.contains('active')) {
      navToggle.classList.remove('active');
      siteNav.classList.remove('mobile-menu-open');
      if (controls) {
        controls.classList.remove('visible');
      }
      navToggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navToggle.classList.contains('active')) {
      toggleMobileMenu();
      navToggle.focus(); // Return focus to toggle button
    }
  });
});
