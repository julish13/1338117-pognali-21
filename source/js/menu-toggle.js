"use strict";

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const toggleElement = mainNavElement.querySelector(`.main-nav__toggle`);


  const setClosedMenuState = () => {
    mainNavElement.classList.add(`main-nav--closed`);
  };

  const setOpenedMenuState = () => {
    mainNavElement.classList.add(`main-nav--opened`);
  };

  mainNavElement.classList.remove(`main-nav--nojs`);
  setClosedMenuState();

  toggleElement.addEventListener(`click`, () => {
    if (mainNavElement.classList.contains(`main-nav--closed`)) {
      mainNavElement.classList.remove(`main-nav--closed`);
      setOpenedMenuState();
    } else {
      mainNavElement.classList.remove(`main-nav--opened`);
      setClosedMenuState();
    }
  });
})();
