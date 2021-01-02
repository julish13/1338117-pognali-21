'use strict';

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);
  const mobileLogoElement = mainNavElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavElement.querySelector(`#logo-tablet`);
  const desktopLogoElement = mainNavElement.querySelector(`#logo-desktop`);

  desktopLogoElement.srcset = `img/logo-desktop-white.png 1x`;

  window.onscroll = () => {
    if (!mainNavElement.classList.contains(`main-nav--opened`)) {
      if (window.scrollY >= mainNavElement.offsetHeight) {
        mainNavElement.classList.add(`main-nav--scrolled`);
        mobileLogoElement.src = `img/logo-mobile-dark.png`;
        tabletLogoElement.srcset = `img/logo-tablet-dark.png 1x`;
        desktopLogoElement.srcset = `img/logo-desktop-dark.png 1x`;

      }
      else {
          mainNavElement.classList.remove(`main-nav--scrolled`);
          mobileLogoElement.src = `img/logo-mobile-white.png`;
          tabletLogoElement.srcset = `img/logo-tablet-white.png 1x`;
          desktopLogoElement.srcset = `img/logo-desktop-white.png 1x`;
      }
    }
  };
})();
