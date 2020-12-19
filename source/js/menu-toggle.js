'use strict';

(function () {
  const mainNavBlock = document.querySelector(`.main-nav`);
  const mainNavInnerElement = mainNavBlock.querySelector(`.main-nav__inner`);
  const mobileLogoElement = mainNavInnerElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavInnerElement.querySelector(`#logo-tablet`);
  const toggleElement = mainNavBlock.querySelector(`.main-nav__toggle`);

  const setClosedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--closed`);
    mobileLogoElement.src = `img/logo-mobile-white.png`;
    tabletLogoElement.srcset = `img/logo-tablet-white.png 1x`;
  };

  const setOpenedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--opened`);
    mobileLogoElement.src = `img/logo-mobile-dark.png`;
    tabletLogoElement.srcset = `img/logo-tablet-dark.png 1x`;
  };


  mainNavBlock.classList.remove(`main-nav--nojs`);
  setClosedMenuState();

  toggleElement.addEventListener(`click`, function () {
    if (mainNavBlock.classList.contains(`main-nav--closed`)) {
      mainNavBlock.classList.remove(`main-nav--closed`);
      setOpenedMenuState();
    } else {
      mainNavBlock.classList.remove(`main-nav--opened`);
      setClosedMenuState();
    }
  });
})();
