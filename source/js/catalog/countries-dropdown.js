"use strict";

(() => {
  if (document.querySelector(`.filter-countries`)) {
    const filterCountriesElement = document.querySelector(`.filter-countries`);
    const toggleElement = filterCountriesElement.querySelector(
      `.filter-countries__toggle`
    );
    const closeButtonElement = filterCountriesElement.querySelector(
      `.filter-countries__button`
    );

    filterCountriesElement.classList.remove(`filter-countries--nojs`);
    filterCountriesElement.classList.add(`filter-countries--closed`);

    const onClickDropdownFunction = () => {
      if (
        !filterCountriesElement.classList.contains(`filter-countries--opened`)
      ) {
        filterCountriesElement.classList.remove(`filter-countries--closed`);
        filterCountriesElement.classList.add(`filter-countries--opened`);
        toggleElement.textContent = `Свернуть`;
      } else {
        filterCountriesElement.classList.remove(`filter-countries--opened`);
        filterCountriesElement.classList.add(`filter-countries--closed`);
        toggleElement.textContent = `Показать все`;
      }
    };

    toggleElement.addEventListener(`click`, onClickDropdownFunction);
    closeButtonElement.addEventListener(`click`, onClickDropdownFunction);
  }
})();
