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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Account */ \"./components/Account.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Answer */ \"./components/Answer.js\");\n/* harmony import */ var _components_AnswerForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AnswerForm */ \"./components/AnswerForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/antonzaharia/apps/potstop/pages/index.js\";\n// for next.js's <head> tag and rendering images\n\n // import the web3 library with setup from lib/web3.js\n\n // import react hooks\n\n // all from our components folder\n\n\n\n\n\nfunction Home() {\n  // todo:\n  // 1. make the connect button work!\n  // 2. get the answers from the API (see /api/answers.js file)\n  // 3. add tipping like project 1\n  // 4. make the user name look good\n  // 5. let the user post their own reply\n  var account;\n\n  var connect = /*#__PURE__*/function () {\n    var _ref = (0,_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var account;\n      return _Users_antonzaharia_apps_potstop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              account = _context.sent;\n              account = account;\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function connect() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Potstop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Account__WEBPACK_IMPORTED_MODULE_7__.default, {\n        account: account,\n        connect: connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"question\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Feedback forum\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"Looking for feedback as a beginner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Hey everyone, I'm a new potter, just 4 weeks into my journey, and I'm looking to get some feedback on what I've made so far. I'm particularly interested in how to make rustic looking bowls and pots, and I'd love to know what the best tools to use would be!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"slides\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-1.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-2.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-3.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-4.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"meta\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"eth-name\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://ipfs.io/ipfs/QmbctVN8tPaDLiLysVDwThf7JTJhMejbSypZ4a3v5H2G3a\",\n            alt: \"Avatar of riklomas.eth\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"name\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"primary\",\n              children: \"riklomas.eth\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"secondary\",\n              children: \"0xb25bf3...aaf4\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"answers\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loading\",\n        children: \"Loading answers...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Looking for feedback as a beginner \\u2013 Feedback forum \\u2013 Potstop \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Looking for feedback as a beginner on Potstop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: \"This is a project on the SuperHi Crypto + Web3 for Creatives course\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: \"/social.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUF1Q0U7QUFBUyxlQUFTLEVBQUMsU0FBbkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0YsZUEyQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvREQ7S0FuRXVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciBuZXh0LmpzJ3MgPGhlYWQ+IHRhZyBhbmQgcmVuZGVyaW5nIGltYWdlc1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbi8vIGltcG9ydCB0aGUgd2ViMyBsaWJyYXJ5IHdpdGggc2V0dXAgZnJvbSBsaWIvd2ViMy5qc1xuaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uL2xpYi93ZWIzJztcblxuLy8gaW1wb3J0IHJlYWN0IGhvb2tzXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBhbGwgZnJvbSBvdXIgY29tcG9uZW50cyBmb2xkZXJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudCdcbmltcG9ydCBFdGhOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvRXRoTmFtZSdcbmltcG9ydCBBbnN3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BbnN3ZXInXG5pbXBvcnQgQW5zd2VyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlckZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRvZG86XG4gIC8vIDEuIG1ha2UgdGhlIGNvbm5lY3QgYnV0dG9uIHdvcmshXG4gIC8vIDIuIGdldCB0aGUgYW5zd2VycyBmcm9tIHRoZSBBUEkgKHNlZSAvYXBpL2Fuc3dlcnMuanMgZmlsZSlcbiAgLy8gMy4gYWRkIHRpcHBpbmcgbGlrZSBwcm9qZWN0IDFcbiAgLy8gNC4gbWFrZSB0aGUgdXNlciBuYW1lIGxvb2sgZ29vZFxuICAvLyA1LiBsZXQgdGhlIHVzZXIgcG9zdCB0aGVpciBvd24gcmVwbHlcblxuICBsZXQgYWNjb3VudFxuXG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBsZXQgYWNjb3VudCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgIGFjY291bnQgPSBhY2NvdW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxPlBvdHN0b3A8L2gxPlxuXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxBY2NvdW50IGFjY291bnQ9e2FjY291bnR9IGNvbm5lY3Q9e2Nvbm5lY3R9IC8+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVlc3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGgzPkZlZWRiYWNrIGZvcnVtPC9oMz5cbiAgICAgICAgICA8aDI+TG9va2luZyBmb3IgZmVlZGJhY2sgYXMgYSBiZWdpbm5lcjwvaDI+XG4gICAgICAgICAgPHA+SGV5IGV2ZXJ5b25lLCBJJmFwb3M7bSBhIG5ldyBwb3R0ZXIsIGp1c3QgNCB3ZWVrcyBpbnRvIG15IGpvdXJuZXksIGFuZCBJJmFwb3M7bSBsb29raW5nIHRvIGdldCBzb21lIGZlZWRiYWNrIG9uIHdoYXQgSSZhcG9zO3ZlIG1hZGUgc28gZmFyLiBJJmFwb3M7bSBwYXJ0aWN1bGFybHkgaW50ZXJlc3RlZCBpbiBob3cgdG8gbWFrZSBydXN0aWMgbG9va2luZyBib3dscyBhbmQgcG90cywgYW5kIEkmYXBvcztkIGxvdmUgdG8ga25vdyB3aGF0IHRoZSBiZXN0IHRvb2xzIHRvIHVzZSB3b3VsZCBiZSE8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS0xLmpwZ1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiODAwXCIgLz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UtMi5qcGdcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjgwMFwiIC8+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlLTMuanBnXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI4MDBcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS00LmpwZ1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiODAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBFdGhOYW1lICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXRoLW5hbWVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1iY3RWTjh0UGFETGlMeXNWRHdUaGY3SlRKaE1lamJTeXBaNGEzdjVIMkczYVwiIGFsdD1cIkF2YXRhciBvZiByaWtsb21hcy5ldGhcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5yaWtsb21hcy5ldGg8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPjB4YjI1YmYzLi4uYWFmNDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBlbmQgRXRoTmFtZSAqL31cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nIGFuc3dlcnMuLi48L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb29raW5nIGZvciBmZWVkYmFjayBhcyBhIGJlZ2lubmVyIOKAkyBGZWVkYmFjayBmb3J1bSDigJMgUG90c3RvcCA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkxvb2tpbmcgZm9yIGZlZWRiYWNrIGFzIGEgYmVnaW5uZXIgb24gUG90c3RvcFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBpcyBhIHByb2plY3Qgb24gdGhlIFN1cGVySGkgQ3J5cHRvICsgV2ViMyBmb3IgQ3JlYXRpdmVzIGNvdXJzZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3NvY2lhbC5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIndlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjY291bnQiLCJFdGhOYW1lIiwiQW5zd2VyIiwiQW5zd2VyRm9ybSIsIkhvbWUiLCJhY2NvdW50IiwiY29ubmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});