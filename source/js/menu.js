"use strict";

(function () {
  const PROMO_HEADING_X = 75;

  const pageHeader = document.querySelector(`.page-header`);
  const mainNavBlock = document.querySelector(`.main-nav`);
  const mainNavInnerElement = document.querySelector(`.main-nav__inner`);
  const logoElement = document
    .querySelector(`.main-nav__logo`)
    .querySelector(`img`);
  const toggleElement = mainNavBlock.querySelector(`.main-nav__toggle`);
  const loginElement = mainNavBlock.querySelector(`.main-nav__login`);
  const contactsElement = mainNavBlock.querySelector(`.main-nav__contacts`);
  const contactsCollection = contactsElement.querySelectorAll(
    `.main-nav-contact`
  );
  const promoBlock = document.querySelector(`.promo`);
  const promoWrapElement = promoBlock.querySelector(`.promo__wrap`);
  const promoHeadingElement = promoBlock.querySelector(`.promo__heading`);

  const setClosedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--closed`);
    loginElement.classList.add(`main-nav__login--short`);
    contactsCollection.forEach((contact) =>
      contact.classList.add(`contacts-link--short`)
    );
    logoElement.src = `img/logo-mobile-white.png`;
  };

  const setOpenedMenuState = () => {
    mainNavBlock.classList.add(`main-nav--opened`);
    loginElement.classList.remove(`main-nav__login--short`);
    contactsCollection.forEach((contact) =>
      contact.classList.remove(`contacts-link--short`)
    );
    logoElement.src = `img/logo-mobile-dark.png`;
  };

  const setClosedMenuPositioning = () => {
    const promoHeadingBottomX =
      PROMO_HEADING_X + promoHeadingElement.offsetHeight;
    const buttonsHeight = contactsElement.offsetHeight;

    contactsElement.style.top = `${promoHeadingBottomX - buttonsHeight / 2}px`;

    loginElement.style.top = `${promoHeadingBottomX - buttonsHeight / 2}px`;
    loginElement.style.left = `${
      contactsElement.offsetLeft + contactsElement.offsetWidth
    }px`;

    promoWrapElement.style.backgroundPositionY = `-25%`;
  };

  mainNavBlock.classList.remove(`main-nav--nojs`);
  setClosedMenuState();
  setClosedMenuPositioning();

  toggleElement.addEventListener(`click`, function () {
    if (mainNavBlock.classList.contains(`main-nav--closed`)) {
      mainNavBlock.classList.remove(`main-nav--closed`);
      setOpenedMenuState();
      mainNavInnerElement.style.minHeight = `auto`;
    } else {
      mainNavBlock.classList.remove(`main-nav--opened`);
      setClosedMenuState();
      setClosedMenuPositioning();
    }
  });
})();
