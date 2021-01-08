'use strict';

(() => {
  const EVENT_KEYS = {
    ESC: `Escape`,
    ENTER: `Enter`
  };

  const fieldElementsCollection = document.querySelectorAll(`.filter-personality-field`);

  for (const fieldElement of fieldElementsCollection) {
    const headerElement = fieldElement.querySelector(`.filter-personality-field__header`);

    fieldElement.classList.remove(`filter-personality-field--nojs`);
    fieldElement.classList.add(`filter-personality-field--closed`);

    const openDropdown = () => {
      fieldElement.classList.remove(`filter-personality-field--closed`);
      fieldElement.classList.add(`filter-personality-field--opened`);
    };

    const closeDropdown = () => {
      fieldElement.classList.remove(`filter-personality-field--opened`);
      fieldElement.classList.add(`filter-personality-field--closed`);
    };

    const onClickDropdownFunction = () => {
      if (!fieldElement.classList.contains(`filter-personality-field--opened`)) {
        openDropdown();
      } else {
        closeDropdown();
      }
    }

    headerElement.addEventListener(`click`, onClickDropdownFunction);
    headerElement.addEventListener(`keydown`, (evt) => {
      if (evt.key === EVENT_KEYS.ENTER) {
        evt.preventDefault();
        openDropdown();
      }
    });
    headerElement.addEventListener(`keydown`, (evt) => {
      if (evt.key === EVENT_KEYS.ESC) {
        evt.preventDefault();
        closeDropdown();
      }
    });
  }

})();
