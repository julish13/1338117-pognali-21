'use strict';

(() => {
  const optionsCollection = document.querySelectorAll(`.planning-dates-option__wrap`);

  for (const option of optionsCollection) {
    const input = option.querySelector(`.planning-dates-option__input`);
    const minus = option.querySelector(`.planning-dates-option__button--minus`);
    const plus = option.querySelector(`.planning-dates-option__button--plus`);

    minus.addEventListener(`click`, () => {
      if (input.value > 1 && input.value <= 100) {
        input.value = Math.floor(input.value) - 1;
      }
    })

    plus.addEventListener(`click`, () => {
      if (input.value > 0 && input.value < 100) {
        input.value = Math.floor(input.value) + 1;
      }
    })
  }
})();
