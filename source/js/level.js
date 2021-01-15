"use strict";

(() => {
  const DESIGN_ADJUSTMENT = 5;

  const levelElementsCollection = document.querySelectorAll(`.level`);

  levelElementsCollection.forEach((levelElement) => {
    const circleElement = levelElement.querySelector(`circle`);
    const radius = circleElement.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circleElement.style.strokeDasharray = `${circumference} ${circumference}`;
    circleElement.style.strokeDashoffset = `${circumference}`;

    const setProgress = (percent) => {
      const offset =
        circumference + DESIGN_ADJUSTMENT - (percent / 100) * circumference;
      circleElement.style.strokeDashoffset = offset;
    };

    const levelValue = Number(
      levelElement.querySelector(`.level__value`).textContent
    );
    setProgress(levelValue);
  });
})();
