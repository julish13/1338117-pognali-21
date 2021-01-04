'use strict';

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const mainNavInnerElement = mainNavElement.querySelector(`.main-nav__inner`);
  const mobileLogoElement = mainNavInnerElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavInnerElement.querySelector(`#logo-tablet`);
  const toggleElement = mainNavElement.querySelector(`.main-nav__toggle`);

  const setClosedMenuState = () => {
    mainNavElement.classList.add(`main-nav--closed`);
    mobileLogoElement.src = `img/logo-mobile-white.png`;
    tabletLogoElement.srcset = `img/logo-tablet-white.png 1x`;
  };

  const setOpenedMenuState = () => {
    mainNavElement.classList.add(`main-nav--opened`);
    mobileLogoElement.src = `img/logo-mobile-dark.png`;
    tabletLogoElement.srcset = `img/logo-tablet-dark.png 1x`;
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
