"use strict";

(() => {
  if (document.querySelector(`.select-country--choose`)) {
    const countryElement = document.querySelector(`.select-country--choose`);
    const inputElement = countryElement.querySelector(`.select-country__input`);
    const toggleElement = countryElement.querySelector(
      `.select-country__toggle`
    );

    const onClickDropdownFunction = () => {
      if (!countryElement.classList.contains(`select-country--open`)) {
        countryElement.classList.add(`select-country--open`);
      } else {
        countryElement.classList.remove(`select-country--open`);
      }
    };

    inputElement.addEventListener(`click`, onClickDropdownFunction);
    toggleElement.addEventListener(`click`, onClickDropdownFunction);
  }
})();
