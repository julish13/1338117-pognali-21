'use strict';

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const mainNavInnerElement = mainNavElement.querySelector(`.main-nav__inner`);
  const mobileLogoElement = mainNavInnerElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavInnerElement.querySelector(`#logo-tablet`);
  const toggleElement = mainNavElement.querySelector(`.main-nav__toggle`);

  const setDarkColor = (element) => {
    if (element.src) {
      element.src = element.src.replaceAll(`white`, `dark`);
    }
    element.srcset = element.srcset.replaceAll(`white`, `dark`);
  }

  const setWhiteColor = (element) => {
    if (element.src) {
      element.src = element.src.replaceAll(`dark`, `white`);
    }
    element.srcset = element.srcset.replaceAll(`dark`, `white`);
  }

  const setClosedMenuState = () => {
    mainNavElement.classList.add(`main-nav--closed`);
    setWhiteColor(mobileLogoElement);
    setWhiteColor(tabletLogoElement);
  };

  const setOpenedMenuState = () => {
    mainNavElement.classList.add(`main-nav--opened`);
    setDarkColor(mobileLogoElement);
    setDarkColor(tabletLogoElement);
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
