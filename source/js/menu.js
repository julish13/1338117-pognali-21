'use strict';

(function () {
  const PROMO_HEADING_Y = 75;

  const mainNavBlock = document.querySelector(`.main-nav`);
  const mainNavInnerElement = mainNavBlock.querySelector(`.main-nav__inner`);
  const logoElement = mainNavInnerElement
    .querySelector(`.main-nav__logo`)
    .querySelector(`img`);
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
    promoHeadingElement.style.marginTop = `${PROMO_HEADING_Y}px`;
    mainNavInnerElement.style.minHeight = `${
      promoHeadingElement.offsetHeight +
      PROMO_HEADING_Y +
      contactsElement.offsetHeight / 2
    }px`;
    promoHeaderElement.style.backgroundPosition = `60% bottom, center top`;
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
