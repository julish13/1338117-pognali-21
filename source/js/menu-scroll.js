'use strict';

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const mobileLogoElement = mainNavElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavElement.querySelector(`#logo-tablet`);
  const desktopLogoElement = mainNavElement.querySelector(`#logo-desktop`);
  const mobileLogoWebpElement = mainNavElement.querySelector(`#logo-mobile-webp`);
  const tabletLogoWebpElement = mainNavElement.querySelector(`#logo-tablet-webp`);
  const desktopLogoWebpElement = mainNavElement.querySelector(`#logo-desktop-webp`);

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
  setWhiteColor(desktopLogoWebpElement);

  window.onscroll = () => {
    if (!mainNavElement.classList.contains(`main-nav--opened`)) {
      if (window.scrollY >= mainNavElement.offsetHeight) {
        mainNavElement.classList.add(`main-nav--scrolled`);
        setDarkColor(mobileLogoElement);
        setDarkColor(tabletLogoElement);
        setDarkColor(desktopLogoElement);
        setDarkColor(mobileLogoWebpElement);
        setDarkColor(tabletLogoWebpElement);
        setDarkColor(desktopLogoWebpElement);
      }
      else {
        mainNavElement.classList.remove(`main-nav--scrolled`);
        setWhiteColor(mobileLogoElement);
        setWhiteColor(tabletLogoElement);
        setWhiteColor(desktopLogoElement);
        setWhiteColor(mobileLogoWebpElement);
        setWhiteColor(tabletLogoWebpElement);
        setWhiteColor(desktopLogoWebpElement);
      }
    }
  };
})();
