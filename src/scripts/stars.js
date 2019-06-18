'use strict';

let starsAll = function () {
  const stars = document.querySelectorAll('.stars');

  function counterStars (event) {
    let childStar = event.target;
    const parentStar = childStar.parentNode;
    const childrenStar = parentStar.children;
    let counterStar = 0;

    if (childStar.classList.contains('star')) {
      // Counting nr of stars
      while ((childStar = childStar.previousElementSibling) != null) {
        counterStar += 1;
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
        children[y].classList.remove('rated-star', 'full', 'hover-on');
      }
    }
  }

  function hoverOn (event) {
    let hStar = event.target;
    const hParent = hStar.parentNode;
    const hChildren = hParent.children;
    let hCounter = 0;

    if (hStar.classList.contains('star')) {
      while ((hStar = hStar.previousElementSibling) != null) {
        hCounter += 1;
        for (let z = 0; z <= hCounter; z++) {
          hChildren[z].classList.add('hover-on');
          hChildren[z].style.color = '#d58e32';
        }
      }
      if (event.target === hParent.firstElementChild) {
        event.target.classList.add('hover-on');
        event.target.style.color = '#d58e32';
      }
    }
  }

  function hoverOut (event) {
    const children = event.target.parentNode.children;
    if (event.target.classList.contains('star')) {
      for (let a = 0; a < children.length; a++) {
        children[a].classList.remove('hover-on');
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
