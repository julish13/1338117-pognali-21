'use strict';

(function () {
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
