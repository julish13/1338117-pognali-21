'use strict';

(() => {
  const slidesCollection = document.querySelectorAll(`.slider__slide`);
  const indicatorsElement = document.querySelector(`.planning-states--no-text`);
  const indicatorsCollection = indicatorsElement.querySelectorAll(`.planning-states__state`);

  for (let i = 0; i < slidesCollection.length; i++) {
    const slideElement = slidesCollection[i];

    slideElement.classList.remove(`slider__slide--nojs`);

    const nextButton = slideElement.querySelector(`.planning__button--next`);
    const previousButton = slideElement.querySelector(`.planning__button--previous`);

    if (nextButton) {
      nextButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        slideElement.classList.remove(`slider__slide--active`);
        indicatorsCollection[i].classList.remove(`planning-states__state--active`);
        slidesCollection[i+1].classList.add(`slider__slide--active`);
        indicatorsCollection[i+1].classList.add(`planning-states__state--active`);
      })
    }

    if (previousButton) {
      previousButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        slideElement.classList.remove(`slider__slide--active`);
        indicatorsCollection[i].classList.remove(`planning-states__state--active`);
        slidesCollection[i-1].classList.add(`slider__slide--active`);
        indicatorsCollection[i-1].classList.add(`planning-states__state--active`);
      })
    }
  };
})();
