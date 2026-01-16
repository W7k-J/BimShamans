/**
 * Mobile Navigation Toggle
 * Hamburger menu functionality for responsive navigation with backdrop
 */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.querySelector('.site-nav');
  const body = document.body;
  
  if (!navToggle || !siteNav) {
    return;
  }
  
  // Create backdrop element
  let backdrop = document.querySelector('.mobile-menu-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = navToggle.classList.contains('active');
    
    if (isOpen) {
      // Close menu
      navToggle.classList.remove('active');
      siteNav.classList.remove('mobile-menu-open');
      backdrop.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      // Open menu
      navToggle.classList.add('active');
      siteNav.classList.add('mobile-menu-open');
      backdrop.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  }
  
  // Click handler for toggle button
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking backdrop
  backdrop.addEventListener('click', function() {
    if (navToggle.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
  
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
      backdrop.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
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
