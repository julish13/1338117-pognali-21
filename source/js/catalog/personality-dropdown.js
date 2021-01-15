"use strict";

(() => {
  const EVENT_KEYS = {
    SPACE: 32,
  };

  if (document.querySelectorAll(`.filter-personality-field`)) {
    const fieldElementsCollection = document.querySelectorAll(
      `.filter-personality-field`
    );

    for (const fieldElement of fieldElementsCollection) {
      const headerElement = fieldElement.querySelector(
        `.filter-personality-field__header`
      );

      fieldElement.classList.remove(`filter-personality-field--nojs`);
      fieldElement.classList.add(`filter-personality-field--closed`);

      const onClickDropdownFunction = () => {
        if (
          !fieldElement.classList.contains(`filter-personality-field--opened`)
        ) {
          fieldElement.classList.remove(`filter-personality-field--closed`);
          fieldElement.classList.add(`filter-personality-field--opened`);
        } else {
          fieldElement.classList.remove(`filter-personality-field--opened`);
          fieldElement.classList.add(`filter-personality-field--closed`);
        }
      };

      headerElement.addEventListener(`click`, onClickDropdownFunction);
      headerElement.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === EVENT_KEYS.SPACE) {
          evt.preventDefault();
          onClickDropdownFunction();
        }
      });
    }
  }
})();
