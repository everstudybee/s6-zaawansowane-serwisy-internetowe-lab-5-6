/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/validator.js ***!
  \***********************************/
function initializeValidatorRequired() {
  var elements = document.querySelectorAll('.validator-required');

  for (var i = 0; i < elements.length; i++) {
    elements.item(i).addEventListener('focusout', validateRequired);
  }
}

function validateRequired(event) {
  // warunek wyświetla alert, gdy opuszczamy input, który jest pusty
  if (!event.target.value) {
    alert('Opuściłeś pole');
  }
}

initializeValidatorRequired();
/******/ })()
;