'use strict';

(() => {
  const countryElement = document.querySelector(`.select-country--choose`);
  const inputElement = countryElement.querySelector(`.select-country__input`);

  inputElement.addEventListener(`click`, () => {
    if (!countryElement.classList.contains(`select-country--open`)) {
      countryElement.classList.add(`select-country--open`);
    } else {
      countryElement.classList.remove(`select-country--open`);
    }
  });
})();
