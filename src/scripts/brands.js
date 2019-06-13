var elem = document.querySelector('.carousel');
var nextButton = document.querySelector('.button-next');
var previousButton = document.querySelector('.button-previous');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false
});
function flktySlider () {
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
