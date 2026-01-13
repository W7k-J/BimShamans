document.addEventListener('DOMContentLoaded', function() {
  var sloganElement = document.querySelector('#hero-slogan');

  if (!sloganElement) {
    return;
  }

  var strings = sloganElement.dataset.strings ? sloganElement.dataset.strings.split(',') : ['share', 'serve', 'solve'];
  var counter = 0;

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
      setTimeout(function() {
        sloganElement.classList.add('glitch-active');
        sloganElement.textContent = randomWord;
        sloganElement.dataset.text = randomWord;
      }, i * 80);
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
    setTimeout(function() {
      sloganElement.classList.remove('glitch-active');
    }, (targetWord.length + 1) * 80 + 400);
  }

  // Start animation cycle
  setInterval(animateWord, 2500);

  // Run first animation immediately
  animateWord();
});
