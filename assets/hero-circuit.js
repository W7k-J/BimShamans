'use strict';

(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  var moveEvent = window.PointerEvent ? 'pointermove' : 'mousemove';
  var enterEvent = window.PointerEvent ? 'pointerenter' : 'mouseenter';
  var leaveEvent = window.PointerEvent ? 'pointerleave' : 'mouseleave';

  function clamp(value) {
    if (value < 0) {
      return 0;
    }
    if (value > 1) {
      return 1;
    }
    return value;
  }

  function updatePosition(hero, clientX, clientY) {
    var rect = hero.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return;
    }
    var relX = clamp((clientX - rect.left) / rect.width);
    var relY = clamp((clientY - rect.top) / rect.height);
    hero.style.setProperty('--glow-x', (relX * 100).toFixed(2) + '%');
    hero.style.setProperty('--glow-y', (relY * 100).toFixed(2) + '%');
  }

  function attach(hero) {
    if (!hero) {
      return;
    }
    var glow = hero.querySelector('.hero-banner__circuit-glow');
    if (!glow) {
      return;
    }

    function handleEvent(event) {
      var clientX = event.clientX;
      var clientY = event.clientY;

      if ((event.touches || event.changedTouches) && event.changedTouches.length) {
        clientX = event.changedTouches[0].clientX;
        clientY = event.changedTouches[0].clientY;
      }

      if (typeof clientX !== 'number' || typeof clientY !== 'number') {
        return;
      }

      updatePosition(hero, clientX, clientY);
    }

    hero.addEventListener(enterEvent, handleEvent, { passive: true });
    hero.addEventListener(moveEvent, handleEvent, { passive: true });
    hero.addEventListener('touchmove', handleEvent, { passive: true });

    hero.addEventListener(leaveEvent, function () {
      hero.style.removeProperty('--glow-x');
      hero.style.removeProperty('--glow-y');
    }, { passive: true });
  }

  function init() {
    var heroes = document.querySelectorAll('.hero-banner');
    if (!heroes.length) {
      return;
    }
    heroes.forEach(attach);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
