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

/***/ "./components/Tip.js":
/*!***************************!*\
  !*** ./components/Tip.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/antonzaharia/apps/potstop/components/Tip.js\";\n\n\n\nvar Tip = function Tip(_ref) {\n  var isLoggedIn = _ref.isLoggedIn,\n      accounts = _ref.accounts,\n      address = _ref.address;\n\n  var send = function send() {\n    if (isLoggedIn) {\n      var price = _lib_web3__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toWei('0.01', 'ether');\n      window.ethereum.request({\n        method: 'eth_sendTransaction',\n        params: [{\n          from: accounts[0],\n          to: address,\n          value: _lib_web3__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toHex(price)\n        }]\n      });\n      console.log(accounts[0]);\n      console.log(address);\n      console.log(price);\n    } else {\n      alert('Please connect your wallet!');\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    onClick: send,\n    children: \"Tip 0.01 ETH\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n};\n\n_c = Tip;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tip);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQTZDO0FBQUEsTUFBakNDLFVBQWlDLFFBQWpDQSxVQUFpQztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3ZELE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVk7QUFDdkIsUUFBSUgsVUFBSixFQUFnQjtBQUNkLFVBQU1JLEtBQUssR0FBR1IsdURBQUEsQ0FBaUIsTUFBakIsRUFBeUIsT0FBekIsQ0FBZDtBQUNBVyxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQ3RCQyxRQUFBQSxNQUFNLEVBQUUscUJBRGM7QUFFdEJDLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ1BDLFVBQUFBLElBQUksRUFBRVgsUUFBUSxDQUFDLENBQUQsQ0FEUDtBQUVQWSxVQUFBQSxFQUFFLEVBQUVYLE9BRkc7QUFHUFksVUFBQUEsS0FBSyxFQUFFbEIsdURBQUEsQ0FBaUJRLEtBQWpCO0FBSEEsU0FBRDtBQUZjLE9BQXhCO0FBUUFZLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBUSxDQUFDLENBQUQsQ0FBcEI7QUFDQWUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlmLE9BQVo7QUFDQWMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQVo7QUFDRCxLQWJELE1BYU87QUFDTGMsTUFBQUEsS0FBSyxDQUFDLDZCQUFELENBQUw7QUFDRDtBQUNGLEdBakJEOztBQW1CQSxzQkFDRTtBQUFRLFdBQU8sRUFBRWYsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdELENBdkJEOztLQUFNSjtBQXlCTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RpcC5qcz85ZWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYjMgfSBmcm9tICcuLi9saWIvd2ViMydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVGlwID0gZnVuY3Rpb24gKHsgaXNMb2dnZWRJbiwgYWNjb3VudHMsIGFkZHJlc3MgfSkge1xuICBjb25zdCBzZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICBjb25zdCBwcmljZSA9IHdlYjMudXRpbHMudG9XZWkoJzAuMDEnLCAnZXRoZXInKVxuICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICAgIHRvOiBhZGRyZXNzLFxuICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvSGV4KHByaWNlKVxuICAgICAgICB9XVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKVxuICAgICAgY29uc29sZS5sb2coYWRkcmVzcylcbiAgICAgIGNvbnNvbGUubG9nKHByaWNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQhJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17c2VuZH0+VGlwIDAuMDEgRVRIPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlwIl0sIm5hbWVzIjpbIndlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRpcCIsImlzTG9nZ2VkSW4iLCJhY2NvdW50cyIsImFkZHJlc3MiLCJzZW5kIiwicHJpY2UiLCJ1dGlscyIsInRvV2VpIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwiZnJvbSIsInRvIiwidmFsdWUiLCJ0b0hleCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tip.js\n");

/***/ })

});