'use strict';

(() => {
  const fieldElementsCollection = document.querySelectorAll(`.filter-personality-field`);

  for (const fieldElement of fieldElementsCollection) {
    const headerElement = fieldElement.querySelector(`.filter-personality-field__header`);

    fieldElement.classList.remove(`filter-personality-field--nojs`);
    fieldElement.classList.add(`filter-personality-field--closed`);

    const onClickDropdownFunction = () => {
      if (!fieldElement.classList.contains(`filter-personality-field--opened`)) {
        fieldElement.classList.remove(`filter-personality-field--closed`);
        fieldElement.classList.add(`filter-personality-field--opened`);
      } else {
        fieldElement.classList.remove(`filter-personality-field--opened`);
        fieldElement.classList.add(`filter-personality-field--closed`);
      }
    }

    headerElement.addEventListener(`click`, onClickDropdownFunction);
  }

})();
