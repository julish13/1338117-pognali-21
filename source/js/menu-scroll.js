"use strict";

(() => {
  const mainNavElement = document.querySelector(`.main-nav`);

  window.onscroll = () => {
    if (window.scrollY >= mainNavElement.offsetHeight) {
      mainNavElement.classList.add(`main-nav--scrolled`);
    } else {
      mainNavElement.classList.remove(`main-nav--scrolled`);
    }
  };
})();
