'use strict';

(function () {
  const mainNavBlock = document.querySelector(`.main-nav`);
  const mobileLogoElement = mainNavBlock.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavBlock.querySelector(`#logo-tablet`);
  const desktopLogoElement = mainNavBlock.querySelector(`#logo-desktop`);

  window.onscroll = () => {
      if (window.scrollY >= mainNavBlock.offsetHeight) {
          mainNavBlock.classList.add(`main-nav--scrolled`);
          mobileLogoElement.src = `img/logo-mobile-dark.png`;
          tabletLogoElement.srcset = `img/logo-tablet-dark.png 1x`;
          desktopLogoElement.srcset = `img/logo-desktop-dark.png 1x`;

      }
      else {
          mainNavBlock.classList.remove(`main-nav--scrolled`);
          mobileLogoElement.src = `img/logo-mobile-white.png`;
          tabletLogoElement.srcset = `img/logo-tablet-white.png 1x`;
          desktopLogoElement.srcset = `img/logo-desktop-white.png 1x`;
      }
  };
})();
