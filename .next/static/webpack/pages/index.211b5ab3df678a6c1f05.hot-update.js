"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AnswerForm.js":
/*!**********************************!*\
  !*** ./components/AnswerForm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/antonzaharia/apps/potstop/components/AnswerForm.js\",\n    _s = $RefreshSig$();\n\n\n\nvar AnswerForm = function AnswerForm(_ref) {\n  _s();\n\n  var accounts = _ref.accounts,\n      setAnswers = _ref.setAnswers,\n      isLoggedIn = _ref.isLoggedIn;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var post = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var data;\n      return _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              setAnswers(function (current) {\n                return [].concat((0,_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(current), [{\n                  reply: message,\n                  account: \"0xb25bf3990c5a274a758a2a3a4cc90b3e407eaaf4\"\n                }]);\n              });\n              setMessage(\"\"); // TODO!\n              // send the message state to the /api/answers\n              // but we need to verify who we say we are!\n              // we don't want people pretending it's us!\n\n              data = {\n                questionId: 1,\n                reply: message,\n                account: accounts[0] // confirmationMessage: ,\n                // signedMessage:\n\n              }; // fetch(\"/api/answers\", { \n              //   method: 'POST',\n              //   headers: { 'Content-Type': 'application/json' },\n              //   body: JSON.stringify(data)\n              // })\n              // .then(response => response.json())\n              // .then(data => { })\n              // .catch(error => {\n              //  console.error(error)\n              // })\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function post(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: post,\n    className: \"answer-form\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n      placeholder: \"Please be nice and courteous in your answers!\",\n      value: message,\n      onChange: function onChange(e) {\n        return setMessage(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      disabled: !isLoggedIn,\n      children: \"Reply\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n};\n\n_s(AnswerForm, \"EiOGSxO4GWQlH0sM782nQ9JwuAs=\");\n\n_c = AnswerForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnswerForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlckZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0Q7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSxrQkFDbkNKLCtDQUFRLENBQUMsRUFBRCxDQUQyQjtBQUFBLE1BQzFESyxPQUQwRDtBQUFBLE1BQ2pEQyxVQURpRDs7QUFHakUsTUFBTUMsSUFBSTtBQUFBLHdUQUFHLGlCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBTixjQUFBQSxVQUFVLENBQUMsVUFBQU8sT0FBTyxFQUFJO0FBQ3BCLHNMQUFXQSxPQUFYLElBQW9CO0FBQ2xCQyxrQkFBQUEsS0FBSyxFQUFFTixPQURXO0FBRWxCTyxrQkFBQUEsT0FBTyxFQUFFO0FBRlMsaUJBQXBCO0FBSUQsZUFMUyxDQUFWO0FBT0FOLGNBQUFBLFVBQVUsQ0FBQyxFQUFELENBQVYsQ0FWVyxDQVlYO0FBQ0E7QUFDQTtBQUNBOztBQUVNTyxjQUFBQSxJQWpCSyxHQWlCRTtBQUNYQyxnQkFBQUEsVUFBVSxFQUFFLENBREQ7QUFFWEgsZ0JBQUFBLEtBQUssRUFBRU4sT0FGSTtBQUdYTyxnQkFBQUEsT0FBTyxFQUFFVixRQUFRLENBQUMsQ0FBRCxDQUhOLENBSVg7QUFDQTs7QUFMVyxlQWpCRixFQXlCWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSkssSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQXFDQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUEsSUFBaEI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUEsNEJBQ0U7QUFDRSxpQkFBVyxFQUFDLCtDQURkO0FBRUUsV0FBSyxFQUFFRixPQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFBVSxDQUFDO0FBQUEsZUFBSVQsVUFBVSxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFRLGNBQVEsRUFBRSxDQUFDYixVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQ0FuREQ7O0dBQU1IOztLQUFBQTtBQXFETiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fuc3dlckZvcm0uanM/ZWE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEFuc3dlckZvcm0gPSBmdW5jdGlvbiAoeyBhY2NvdW50cywgc2V0QW5zd2VycywgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgcG9zdCA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICBzZXRBbnN3ZXJzKGN1cnJlbnQgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5jdXJyZW50LCB7XG4gICAgICAgIHJlcGx5OiBtZXNzYWdlLFxuICAgICAgICBhY2NvdW50OiBcIjB4YjI1YmYzOTkwYzVhMjc0YTc1OGEyYTNhNGNjOTBiM2U0MDdlYWFmNFwiXG4gICAgICB9XVxuICAgIH0pXG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpXG5cbiAgICAvLyBUT0RPIVxuICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2Ugc3RhdGUgdG8gdGhlIC9hcGkvYW5zd2Vyc1xuICAgIC8vIGJ1dCB3ZSBuZWVkIHRvIHZlcmlmeSB3aG8gd2Ugc2F5IHdlIGFyZSFcbiAgICAvLyB3ZSBkb24ndCB3YW50IHBlb3BsZSBwcmV0ZW5kaW5nIGl0J3MgdXMhXG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcXVlc3Rpb25JZDogMSxcbiAgICAgIHJlcGx5OiBtZXNzYWdlLFxuICAgICAgYWNjb3VudDogYWNjb3VudHNbMF0sXG4gICAgICAvLyBjb25maXJtYXRpb25NZXNzYWdlOiAsXG4gICAgICAvLyBzaWduZWRNZXNzYWdlOlxuICAgIH1cblxuICAgIC8vIGZldGNoKFwiL2FwaS9hbnN3ZXJzXCIsIHsgXG4gICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IHsgfSlcbiAgICAvLyAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIC8vIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0fSBjbGFzc05hbWU9XCJhbnN3ZXItZm9ybVwiPlxuICAgICAgPHRleHRhcmVhIFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBiZSBuaWNlIGFuZCBjb3VydGVvdXMgaW4geW91ciBhbnN3ZXJzIVwiIFxuICAgICAgICB2YWx1ZT17bWVzc2FnZX0gXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfT4gIFxuICAgICAgPC90ZXh0YXJlYT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzTG9nZ2VkSW59PlJlcGx5PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlckZvcm0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBbnN3ZXJGb3JtIiwiYWNjb3VudHMiLCJzZXRBbnN3ZXJzIiwiaXNMb2dnZWRJbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicG9zdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwicmVwbHkiLCJhY2NvdW50IiwiZGF0YSIsInF1ZXN0aW9uSWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AnswerForm.js\n");

/***/ })

});