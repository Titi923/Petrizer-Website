'use strict';

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);

const card__flipping = document.querySelectorAll('.the__flipping--card');
card__flipping.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('the__flipping--card-flip');
  })
);

const dark__mode = document.querySelectorAll('.night__mode');
card__flipping.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('night__mode--on');
  })
);