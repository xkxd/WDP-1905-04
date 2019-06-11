'use strict';

let starsAll = function () {
  let stars = document.querySelectorAll('.stars');

  function counterStars (event) {
    let childStar = event.target;
    let parentStar = childStar.parentNode;
    let childrenStar = parentStar.children;
    let counterStar = 0;

    if (childStar.classList.contains('star')) {
      // Counting nr of stars
      while ((childStar = childStar.previousElementSibling) != null) {
        counterStar++;
        for (let x = 0; x <= counterStar; x++) {
          childrenStar[x].classList.add('rated-star');
          childrenStar[x].style.color = '#d58e32';
        }
      }
      if (event.target === parentStar.firstElementChild) {
        event.target.classList.add('rated-star');
        event.target.style.color = '#d58e32';
      }
    }
  }

  function clear (event) {
    let children = event.target.parentNode.children;
    if (event.target.classList.contains('star')) {
      for (let y = 0; y < children.length; y++) {
        children[y].classList.remove('rated-star', 'full', 'hoverOn');
      }
    }
  }

  function hoverOn (event) {
    let hStar = event.target;
    let hParent = hStar.parentNode;
    let hChildren = hParent.children;
    let hCounter = 0;

    if (hStar.classList.contains('star')) {
      while ((hStar = hStar.previousElementSibling) != null) {
        hCounter++;
        for (let z = 0; z <= hCounter; z++) {
          hChildren[z].classList.add('hoverOn');
          hChildren[z].style.color = '#d58e32';
        }
      }
      if (event.target === hParent.firstElementChild) {
        event.target.classList.add('hoverOn');
        event.target.style.color = '#d58e32';
      }
    }
  }

  function hoverOut (event) {
    let children = event.target.parentNode.children;
    if (event.target.classList.contains('star')) {
      for (let a = 0; a < children.length; a++) {
        children[a].classList.remove('hoverOn');
      }
    }
  }

  // Listening for events
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function (event) {
      clear(event);
      counterStars(event);
    });
    stars[i].addEventListener('mouseover', function (event) {
      clear(event);
      hoverOn(event);
    });
    stars[i].addEventListener('mouseout', hoverOut);
  }
};

starsAll();
