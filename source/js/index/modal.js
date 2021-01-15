"use strict";

(() => {
  const EVENT_KEYS = {
    ESC: `Escape`,
    ENTER: `Enter`,
  };

  if (document.querySelector(`.modal`)) {
    const pricingLinkElement = document.querySelector(`.pricing__link`);
    const modalElement = document.querySelector(`.modal`);
    const modalCloseButton = modalElement.querySelector(`.modal__close`);

    const onClickClosePopup = () => {
      modalElement.classList.remove(`modal--show`);
      modalCloseButton.removeEventListener(`click`, onClickClosePopup);
      document.removeEventListener(`keydown`, onPopupEscPress);
    };

    const onPopupEscPress = (evt) => {
      if (evt.key === EVENT_KEYS.ESC) {
        evt.preventDefault();
        onClickClosePopup();
      }
    };

    const onClickOpenPopup = (evt) => {
      evt.preventDefault();
      modalElement.classList.add(`modal--show`);
      modalCloseButton.addEventListener(`click`, onClickClosePopup);
      document.addEventListener(`keydown`, onPopupEscPress);
    };

    const onLinkEnterPressOpenPopup = (evt) => {
      if (evt.key === EVENT_KEYS.ENTER) {
        onClickOpenPopup(evt);
      }
    };

    pricingLinkElement.addEventListener(`click`, onClickOpenPopup);
    pricingLinkElement.addEventListener(`keydown`, onLinkEnterPressOpenPopup);
  }
})();
