document.addEventListener('DOMContentLoaded', function() {
  var sloganElement = document.querySelector('#hero-slogan');

  if (!sloganElement) {
    return;
  }

  // Same question already asked correctly in hero-scroll-fade.js: is the
  // "no wiggly stuff" setting on? If so, this whole file should never start
  // its timer, leaving the word exactly as the page already shows it.
  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  var strings = sloganElement.dataset.strings ? sloganElement.dataset.strings.split(',') : ['share', 'serve', 'solve'];
  var counter = 0;

  var cycleTimer = null;
  var frameTimers = [];
  var running = false;
  var heroVisible = true;

  function clearFrameTimers() {
    for (var i = 0; i < frameTimers.length; i++) {
      clearTimeout(frameTimers[i]);
    }
    frameTimers.length = 0;
  }

  function animateWord() {
    var targetWord = strings[counter];

    // Move to next word for next iteration
    if (counter < strings.length - 1) {
      counter++;
    } else {
      counter = 0;
    }

    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";

    function generateRandomFrame(i, randomWord) {
      frameTimers.push(setTimeout(function() {
        sloganElement.classList.add('glitch-active');
        sloganElement.textContent = randomWord;
        sloganElement.dataset.text = randomWord;
      }, i * 80));
    }

    // Scramble animation - only affects the dynamic word
    for (var i = 0; i < targetWord.length + 1; i++) {
      var randomWord = targetWord.substr(0, i);
      for (var j = i; j < targetWord.length; j++) {
        randomWord += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      generateRandomFrame(i, randomWord);
    }

    // Remove glitch class after animation completes
    frameTimers.push(setTimeout(function() {
      sloganElement.classList.remove('glitch-active');
      clearFrameTimers();
    }, (targetWord.length + 1) * 80 + 400));
  }

  function start() {
    if (running) {
      return;
    }
    running = true;
    animateWord();
    // Longer dwell: the glitch is the effect, the finished word is the message.
    // 3500ms keeps a readable word on screen ~85% of the time instead of ~81%.
    cycleTimer = setInterval(animateWord, 3500);
  }

  function stop() {
    if (!running) {
      return;
    }
    running = false;
    clearInterval(cycleTimer);
    cycleTimer = null;
    clearFrameTimers();

    // Settle on the word that was last shown, so the hero is never left
    // holding a half-scrambled string.
    var settled = strings[(counter + strings.length - 1) % strings.length];
    sloganElement.classList.remove('glitch-active');
    sloganElement.textContent = settled;
    sloganElement.dataset.text = settled;
  }

  // Only run the cycle while the hero is actually on screen and the tab is
  // in front - it used to loop forever, including far below the fold.
  function sync() {
    if (prefersReducedMotion()) {
      // Never start: the element keeps whatever word is already in the
      // markup ("share"), and stays that way for as long as the page is open.
      return;
    }
    if (heroVisible && !document.hidden) {
      start();
    } else {
      stop();
    }
  }

  var hero = sloganElement.closest ? sloganElement.closest('.hero-banner') : null;

  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function(entries) {
      heroVisible = entries[entries.length - 1].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(hero);
  }

  document.addEventListener('visibilitychange', sync);

  sync();
});
