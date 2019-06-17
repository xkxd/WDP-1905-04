'use strict'

function flktySlider () {
  const elem = document.querySelector('.carousel');
  const nextButton = document.querySelector('.button-next');
  const previousButton = document.querySelector('.button-previous');
  const flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });

  nextButton.addEventListener('click', function () {
    flkty.next();
  });

  previousButton.addEventListener('click', function () {
    flkty.previous();
  });
}

(function () {
  flktySlider();
})();
