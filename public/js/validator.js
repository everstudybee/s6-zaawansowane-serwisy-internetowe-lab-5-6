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

eval("// funkcja, która dodaje Event Listener do każdego przycisku z klasą validator-submit\nfunction initializeValidatorSubmit() {\n  var elements = document.querySelectorAll('.validator-submit');\n\n  for (var i = 0; i < elements.length; i++) {\n    elements.item(i).addEventListener('submit', validateSubmit);\n  }\n} // funkcja walidująca wywoływana za każdym razem, gdy klikniemy przycisk (submit)\n\n\nfunction validateSubmit(event) {\n  var helper = document.querySelectorAll('.invalid');\n\n  if (helper.length > 0) {\n    event.preventDefault();\n  }\n} // funkcja, która dodaje Event Listener do każdego pola z klasą validator-required\n\n\nfunction initializeValidatorRequired() {\n  var elements = document.querySelectorAll('.validator-required');\n\n  for (var i = 0; i < elements.length; i++) {\n    elements.item(i).addEventListener('focusout', validateRequired);\n  }\n} // funkcja walidująca wywoływana za każdym razem, gdy opuszczamy pole (focusout)\n\n\nfunction validateRequired(event) {\n  // warunek wyświetla alert, gdy opuszczamy input, który jest pusty\n  var helper = document.querySelector(\"#\".concat(event.target.id, \"-helper\"));\n\n  if (!event.target.value) {\n    helper.setAttribute('data-error', 'To pole jest wymagane');\n    event.target.classList.add('invalid');\n  } else {\n    helper.setAttribute('data-success', 'Poprawnie');\n    event.target.classList.add('valid');\n  }\n}\n\ninitializeValidatorRequired();\ninitializeValidatorSubmit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzLmpzIiwibmFtZXMiOlsiaW5pdGlhbGl6ZVZhbGlkYXRvclN1Ym1pdCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGVTdWJtaXQiLCJldmVudCIsImhlbHBlciIsInByZXZlbnREZWZhdWx0IiwiaW5pdGlhbGl6ZVZhbGlkYXRvclJlcXVpcmVkIiwidmFsaWRhdGVSZXF1aXJlZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzP2FhZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVua2NqYSwga3TDs3JhIGRvZGFqZSBFdmVudCBMaXN0ZW5lciBkbyBrYcW8ZGVnbyBwcnp5Y2lza3UgeiBrbGFzxIUgdmFsaWRhdG9yLXN1Ym1pdFxuZnVuY3Rpb24gaW5pdGlhbGl6ZVZhbGlkYXRvclN1Ym1pdCAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdG9yLXN1Ym1pdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHMuaXRlbShpKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHZhbGlkYXRlU3VibWl0KTtcbiAgICB9XG59XG5cbi8vIGZ1bmtjamEgd2FsaWR1asSFY2Egd3l3b8WCeXdhbmEgemEga2HFvGR5bSByYXplbSwgZ2R5IGtsaWtuaWVteSBwcnp5Y2lzayAoc3VibWl0KVxuZnVuY3Rpb24gdmFsaWRhdGVTdWJtaXQgKGV2ZW50KSB7XG4gICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQnKTtcbiAgICBpZiAoaGVscGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbi8vIGZ1bmtjamEsIGt0w7NyYSBkb2RhamUgRXZlbnQgTGlzdGVuZXIgZG8ga2HFvGRlZ28gcG9sYSB6IGtsYXPEhSB2YWxpZGF0b3ItcmVxdWlyZWRcbmZ1bmN0aW9uIGluaXRpYWxpemVWYWxpZGF0b3JSZXF1aXJlZCAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdG9yLXJlcXVpcmVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50cy5pdGVtKGkpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB2YWxpZGF0ZVJlcXVpcmVkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmtjamEgd2FsaWR1asSFY2Egd3l3b8WCeXdhbmEgemEga2HFvGR5bSByYXplbSwgZ2R5IG9wdXN6Y3phbXkgcG9sZSAoZm9jdXNvdXQpXG5mdW5jdGlvbiB2YWxpZGF0ZVJlcXVpcmVkIChldmVudCkge1xuICAgIC8vIHdhcnVuZWsgd3nFm3dpZXRsYSBhbGVydCwgZ2R5IG9wdXN6Y3phbXkgaW5wdXQsIGt0w7NyeSBqZXN0IHB1c3R5XG4gICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfS1oZWxwZXJgKTtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBoZWxwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWVycm9yJywgJ1RvIHBvbGUgamVzdCB3eW1hZ2FuZScpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3VjY2VzcycsICdQb3ByYXduaWUnKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgfVxufVxuXG5pbml0aWFsaXplVmFsaWRhdG9yUmVxdWlyZWQoKTtcbmluaXRpYWxpemVWYWxpZGF0b3JTdWJtaXQoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSx5QkFBVCxHQUFzQztFQUNsQyxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWpCOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztJQUN0Q0gsUUFBUSxDQUFDSyxJQUFULENBQWNGLENBQWQsRUFDS0csZ0JBREwsQ0FDc0IsUUFEdEIsRUFDZ0NDLGNBRGhDO0VBRUg7QUFDSixDLENBRUQ7OztBQUNBLFNBQVNBLGNBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0VBQzVCLElBQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFmOztFQUNBLElBQUlPLE1BQU0sQ0FBQ0wsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtJQUNuQkksS0FBSyxDQUFDRSxjQUFOO0VBQ0g7QUFDSixDLENBRUQ7OztBQUNBLFNBQVNDLDJCQUFULEdBQXdDO0VBQ3BDLElBQU1YLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBakI7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0lBQ3RDSCxRQUFRLENBQUNLLElBQVQsQ0FBY0YsQ0FBZCxFQUNLRyxnQkFETCxDQUNzQixVQUR0QixFQUNrQ00sZ0JBRGxDO0VBRUg7QUFDSixDLENBRUQ7OztBQUNBLFNBQVNBLGdCQUFULENBQTJCSixLQUEzQixFQUFrQztFQUM5QjtFQUNBLElBQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDWSxhQUFULFlBQTJCTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsRUFBeEMsYUFBZjs7RUFDQSxJQUFJLENBQUNQLEtBQUssQ0FBQ00sTUFBTixDQUFhRSxLQUFsQixFQUF5QjtJQUNyQlAsTUFBTSxDQUFDUSxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLHVCQUFsQztJQUNBVCxLQUFLLENBQUNNLE1BQU4sQ0FBYUksU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0I7RUFDSCxDQUhELE1BR087SUFDSFYsTUFBTSxDQUFDUSxZQUFQLENBQW9CLGNBQXBCLEVBQW9DLFdBQXBDO0lBQ0FULEtBQUssQ0FBQ00sTUFBTixDQUFhSSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixPQUEzQjtFQUNIO0FBQ0o7O0FBRURSLDJCQUEyQjtBQUMzQloseUJBQXlCIn0=\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

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