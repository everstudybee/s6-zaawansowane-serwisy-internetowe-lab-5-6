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

eval("function initializeValidatorRequired() {\n  var elements = document.querySelectorAll('.validator-required');\n\n  for (var i = 0; i < elements.length; i++) {\n    elements.item(i).addEventListener('focusout', validateRequired);\n  }\n}\n\nfunction validateRequired(event) {\n  // warunek wyświetla alert, gdy opuszczamy input, który jest pusty\n  var helper = document.querySelector(\"#\".concat(event.target.id, \"-helper\"));\n\n  if (!event.target.value) {\n    helper.setAttribute('data-error', 'To pole jest wymagane');\n    event.target.classList.add('invalid');\n  } else {\n    helper.setAttribute('data-success', 'Poprawnie');\n    event.target.classList.add('valid');\n  }\n}\n\ninitializeValidatorRequired();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzLmpzIiwibmFtZXMiOlsiaW5pdGlhbGl6ZVZhbGlkYXRvclJlcXVpcmVkIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwiZXZlbnQiLCJoZWxwZXIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZhbGlkYXRvci5qcz9hYWY1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRpYWxpemVWYWxpZGF0b3JSZXF1aXJlZCAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdG9yLXJlcXVpcmVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50cy5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdmFsaWRhdGVSZXF1aXJlZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlcXVpcmVkIChldmVudCkge1xuICAgIC8vIHdhcnVuZWsgd3nFm3dpZXRsYSBhbGVydCwgZ2R5IG9wdXN6Y3phbXkgaW5wdXQsIGt0w7NyeSBqZXN0IHB1c3R5XG4gICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfS1oZWxwZXJgKTtcbiAgICBpZighZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGhlbHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3InLCAnVG8gcG9sZSBqZXN0IHd5bWFnYW5lJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfSBlbHNle1xuICAgICAgICBoZWxwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN1Y2Nlc3MnLCAnUG9wcmF3bmllJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgIH1cbn1cblxuaW5pdGlhbGl6ZVZhbGlkYXRvclJlcXVpcmVkKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLDJCQUFULEdBQXdDO0VBQ3BDLElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBakI7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0lBQ3RDSCxRQUFRLENBQUNLLElBQVQsQ0FBY0YsQ0FBZCxFQUFpQkcsZ0JBQWpCLENBQWtDLFVBQWxDLEVBQThDQyxnQkFBOUM7RUFDSDtBQUNKOztBQUVELFNBQVNBLGdCQUFULENBQTJCQyxLQUEzQixFQUFrQztFQUM5QjtFQUNBLElBQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDUyxhQUFULFlBQTJCRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsRUFBeEMsYUFBZjs7RUFDQSxJQUFHLENBQUNKLEtBQUssQ0FBQ0csTUFBTixDQUFhRSxLQUFqQixFQUF3QjtJQUNwQkosTUFBTSxDQUFDSyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLHVCQUFsQztJQUNBTixLQUFLLENBQUNHLE1BQU4sQ0FBYUksU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0I7RUFDSCxDQUhELE1BR007SUFDRlAsTUFBTSxDQUFDSyxZQUFQLENBQW9CLGNBQXBCLEVBQW9DLFdBQXBDO0lBQ0FOLEtBQUssQ0FBQ0csTUFBTixDQUFhSSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixPQUEzQjtFQUNIO0FBQ0o7O0FBRURqQiwyQkFBMkIifQ==\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

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