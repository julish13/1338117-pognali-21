'use strict';

(function () {
  const PROMO_HEADING_Y = 75;
  const TABLET_WIDTH = 768;

  const mainNavBlock = document.querySelector(`.main-nav`);
  const mainNavInnerElement = mainNavBlock.querySelector(`.main-nav__inner`);
  const mobileLogoElement = mainNavInnerElement.querySelector(`#logo-mobile`);
  const tabletLogoElement = mainNavInnerElement.querySelector(`#logo-tablet`);
  const toggleElement = mainNavBlock.querySelector(`.main-nav__toggle`);
  const loginElement = mainNavBlock.querySelector(`.main-nav__login`);
  const contactsElement = mainNavBlock.querySelector(`.main-nav__contacts`);
  const contactsCollection = contactsElement.querySelectorAll(
    `.main-nav-contact`
  );
  const promoBlock = document.querySelector(`.promo`);
  const promoHeaderElement = promoBlock.querySelector(`.promo__header`);
  const promoHeadingElement = promoBlock.querySelector(`.promo__heading`);

  const setClosedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--closed`);
    loginElement.classList.add(`main-nav__login--short`);
    contactsCollection.forEach((contact) =>
      contact.classList.add(`contact-link--mobile-closed`)
    );
    mobileLogoElement.src = `img/logo-mobile-white.png`;
    tabletLogoElement.srcset = `img/logo-tablet-white.png 1x`;
  };

  const setOpenedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--opened`);
    loginElement.classList.remove(`main-nav__login--short`);
    contactsCollection.forEach((contact) =>
      contact.classList.remove(`contact-link--mobile-closed`)
    );
    mobileLogoElement.src = `img/logo-mobile-dark.png`;
    tabletLogoElement.srcset = `img/logo-tablet-dark.png 1x`;
  };

  const setMobileClosedMenuPositioning = () => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth < TABLET_WIDTH) {
      promoHeadingElement.style.marginTop = `${PROMO_HEADING_Y}px`;
      mainNavInnerElement.style.minHeight = `${
        promoHeadingElement.offsetHeight +
        PROMO_HEADING_Y +
        contactsElement.offsetHeight / 2
      }px`;
      promoHeaderElement.style.backgroundPosition = `60% bottom, center top`;
    }
  };

  mainNavBlock.classList.remove(`main-nav--nojs`);
  setClosedMenuState();
  setMobileClosedMenuPositioning();

  toggleElement.addEventListener(`click`, function () {
    if (mainNavBlock.classList.contains(`main-nav--closed`)) {
      mainNavBlock.classList.remove(`main-nav--closed`);
      setOpenedMenuState();
      mainNavInnerElement.style.minHeight = `auto`;
    } else {
      mainNavBlock.classList.remove(`main-nav--opened`);
      setClosedMenuState();
      setMobileClosedMenuPositioning();
    }
  });


  let lastTimeout = null;
  window.onresize = function(){
    clearTimeout(lastTimeout);
    localStorage.setItem('scrollPosition', window.scrollY);
    lastTimeout = setTimeout(function () {
      location.reload();
      window.scrollTo(0, localStorage.getItem('scrollPosition'));
    }, 100);
  };
})();
