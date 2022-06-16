/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/validator.js":
/*!***********************************!*\
  !*** ./resources/js/validator.js ***!
  \***********************************/
/***/ (() => {

eval("function initializeValidatorRequired() {\n  var elements = document.querySelectorAll('.validator-required');\n\n  for (var i = 0; i < elements.length; i++) {\n    elements.item(i).addEventListener('focusout', validateRequired);\n  }\n}\n\nfunction validateRequired(event) {\n  // warunek wyświetla alert, gdy opuszczamy input, który jest pusty\n  if (!event.target.value) {\n    alert('Opuściłeś pole');\n  }\n}\n\ninitializeValidatorRequired();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0aWFsaXplVmFsaWRhdG9yUmVxdWlyZWQiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbGlkYXRlUmVxdWlyZWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZhbGlkYXRvci5qcz9hYWY1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRpYWxpemVWYWxpZGF0b3JSZXF1aXJlZCAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdG9yLXJlcXVpcmVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50cy5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdmFsaWRhdGVSZXF1aXJlZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlcXVpcmVkIChldmVudCkge1xuICAgIC8vIHdhcnVuZWsgd3nFm3dpZXRsYSBhbGVydCwgZ2R5IG9wdXN6Y3phbXkgaW5wdXQsIGt0w7NyeSBqZXN0IHB1c3R5XG4gICAgaWYoIWV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBhbGVydCgnT3B1xZtjacWCZcWbIHBvbGUnKTtcbiAgICB9XG59XG5cbmluaXRpYWxpemVWYWxpZGF0b3JSZXF1aXJlZCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSwyQkFBVCxHQUF3QztFQUNwQyxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWpCOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztJQUN0Q0gsUUFBUSxDQUFDSyxJQUFULENBQWNGLENBQWQsRUFBaUJHLGdCQUFqQixDQUFrQyxVQUFsQyxFQUE4Q0MsZ0JBQTlDO0VBQ0g7QUFDSjs7QUFFRCxTQUFTQSxnQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7RUFDOUI7RUFDQSxJQUFHLENBQUNBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFqQixFQUF3QjtJQUNwQkMsS0FBSyxDQUFDLGdCQUFELENBQUw7RUFDSDtBQUNKOztBQUVEWiwyQkFBMkIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/validator.js"]();
/******/ 	
/******/ })()
;