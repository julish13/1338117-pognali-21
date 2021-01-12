'use strict';

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const mobileLogoElement = mainNavElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavElement.querySelector(`#logo-tablet`);
  const desktopLogoElement = mainNavElement.querySelector(`#logo-desktop`);

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

  setWhiteColor(desktopLogoElement);

  window.onscroll = () => {
    if (!mainNavElement.classList.contains(`main-nav--opened`)) {
      if (window.scrollY >= mainNavElement.offsetHeight) {
        mainNavElement.classList.add(`main-nav--scrolled`);
        setDarkColor(mobileLogoElement);
        setDarkColor(tabletLogoElement);
        setDarkColor(desktopLogoElement);
      }
      else {
        mainNavElement.classList.remove(`main-nav--scrolled`);
        setWhiteColor(mobileLogoElement);
        setWhiteColor(tabletLogoElement);
        setWhiteColor(desktopLogoElement);
      }
    }
  };
})();
