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
  
  // Freeze the page behind the open menu. Without this a swipe over the menu
  // scrolled the page and carried the menu's own scroll with it, so it reopened
  // (or stayed) scrolled down with the first link clipped under the nav bar.
  function setPageLock(locked) {
    document.documentElement.classList.toggle('mobile-menu-lock', locked);
    body.classList.toggle('mobile-menu-lock', locked);
  }

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    siteNav.classList.remove('mobile-menu-open');
    backdrop.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    setPageLock(false);
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = navToggle.classList.contains('active');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      // Open menu - always from the top, never mid-scroll
      navToggle.classList.add('active');
      siteNav.classList.add('mobile-menu-open');
      backdrop.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      siteNav.scrollTop = 0;
      setPageLock(true);
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
      closeMobileMenu();
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
