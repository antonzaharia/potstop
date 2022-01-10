"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/answers";
exports.ids = ["pages/api/answers"];
exports.modules = {

/***/ "./lib/web3.js":
/*!*********************!*\
  !*** ./lib/web3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"web3\": () => (/* binding */ web3)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())((web3__WEBPACK_IMPORTED_MODULE_0___default().givenProvider) || \"wss://mainnet.infura.io/ws/v3/28696900a2cf490eb160741dc63e4707\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2ViMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLElBQUlDLElBQUksR0FBRyxJQUFJRCw2Q0FBSixDQUFTQSwyREFBQSxJQUFzQixnRUFBL0IsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdHN0b3AvLi9saWIvd2ViMy5qcz83YTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcIndzczovL21haW5uZXQuaW5mdXJhLmlvL3dzL3YzLzI4Njk2OTAwYTJjZjQ5MGViMTYwNzQxZGM2M2U0NzA3XCIpXG5cbmV4cG9ydCB7IHdlYjMgfSJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsImdpdmVuUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/web3.js\n");

/***/ }),

/***/ "./pages/api/answers.js":
/*!******************************!*\
  !*** ./pages/api/answers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n // make a new markdown renderer\n\nconst markdown = new (markdown_it__WEBPACK_IMPORTED_MODULE_1___default())(); // a list of 3 answers by default\n// usually this would come from a database\n// but to keep things simple, we're setting it here\n\nconst answers = [`That's fantastic work for a beginner! [Arteza](#) have great sculpting tools that you may want to check out!`, `From the looks of the clay, it could be a touch dry. \n  \n  Maybe consider a _slight_ bit more water on your hands while you shape and you may find that a little easier.`, `I disagree with reply #3, I think the clay looks fine, no more water needed. `].map(a => markdown.render(a)); // what happens when we ask for /api/answers\n\nfunction handler(req, res) {\n  // if sent via a form, e.g. the reply form\n  if (req.method === \"POST\") {\n    const {\n      signedMessage,\n      confirmationMessage,\n      account,\n      reply = \"\",\n      questionId = 1\n    } = req.body;\n\n    if (signedMessage !== null && confirmationMessage !== null && account !== null) {\n      // get account from the confirmation message\n      // and signed message\n      const recoveredAccount = _lib_web3__WEBPACK_IMPORTED_MODULE_0__.web3.eth.accounts.recover(confirmationMessage, signedMessage); // check if account is same\n\n      if (account.toLowerCase() === recoveredAccount.toLowerCase()) {\n        // yep, so render reply\n        // you would usually save to a database here\n        let newReply = markdown.render(reply); // return all good\n\n        res.status(200).json({\n          account,\n          reply: newReply,\n          questionId,\n          answerId: 3\n        });\n      } else {\n        // incorrect account\n        res.status(401).json({\n          error: \"incorrect account\"\n        });\n      }\n    } else {\n      // need to sign that message!\n      res.status(401).json({\n        error: \"need to sign message\"\n      });\n    }\n  } else {\n    // if fetched normally using fetch()\n    const data = [{\n      questionId: 1,\n      answerId: 1,\n      reply: answers[0],\n      account: \"0xDf7C7f491f26D35fCca74F6Fbd6b5FE437cc24C7\"\n    }, {\n      questionId: 1,\n      answerId: 2,\n      reply: answers[1],\n      account: \"0x4a608b7af88d7ee9885f86b6d9635880ee93e260\"\n    }, {\n      questionId: 1,\n      answerId: 3,\n      reply: answers[2],\n      account: \"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65\"\n    }];\n    res.setHeader('Content-Type', 'application/json');\n    res.status(200).json({\n      answers: data\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJCLE1BQUFBLE9BQU8sRUFBRXdCO0FBQVgsS0FBckI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90c3RvcC8uL3BhZ2VzL2FwaS9hbnN3ZXJzLmpzP2FmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IHdlYjMgfSBmcm9tICcuLi8uLi9saWIvd2ViMydcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gJ21hcmtkb3duLWl0JztcblxuLy8gbWFrZSBhIG5ldyBtYXJrZG93biByZW5kZXJlclxuY29uc3QgbWFya2Rvd24gPSBuZXcgTWFya2Rvd25JdCgpXG5cbi8vIGEgbGlzdCBvZiAzIGFuc3dlcnMgYnkgZGVmYXVsdFxuLy8gdXN1YWxseSB0aGlzIHdvdWxkIGNvbWUgZnJvbSBhIGRhdGFiYXNlXG4vLyBidXQgdG8ga2VlcCB0aGluZ3Mgc2ltcGxlLCB3ZSdyZSBzZXR0aW5nIGl0IGhlcmVcbmNvbnN0IGFuc3dlcnMgPSBbXG4gIGBUaGF0J3MgZmFudGFzdGljIHdvcmsgZm9yIGEgYmVnaW5uZXIhIFtBcnRlemFdKCMpIGhhdmUgZ3JlYXQgc2N1bHB0aW5nIHRvb2xzIHRoYXQgeW91IG1heSB3YW50IHRvIGNoZWNrIG91dCFgLFxuICBgRnJvbSB0aGUgbG9va3Mgb2YgdGhlIGNsYXksIGl0IGNvdWxkIGJlIGEgdG91Y2ggZHJ5LiBcbiAgXG4gIE1heWJlIGNvbnNpZGVyIGEgX3NsaWdodF8gYml0IG1vcmUgd2F0ZXIgb24geW91ciBoYW5kcyB3aGlsZSB5b3Ugc2hhcGUgYW5kIHlvdSBtYXkgZmluZCB0aGF0IGEgbGl0dGxlIGVhc2llci5gLFxuICBgSSBkaXNhZ3JlZSB3aXRoIHJlcGx5ICMzLCBJIHRoaW5rIHRoZSBjbGF5IGxvb2tzIGZpbmUsIG5vIG1vcmUgd2F0ZXIgbmVlZGVkLiBgXG5dLm1hcChhID0+IG1hcmtkb3duLnJlbmRlcihhKSlcblxuXG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBhc2sgZm9yIC9hcGkvYW5zd2Vyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBpZiBzZW50IHZpYSBhIGZvcm0sIGUuZy4gdGhlIHJlcGx5IGZvcm1cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgXG4gICAgY29uc3QgeyBzaWduZWRNZXNzYWdlLCBjb25maXJtYXRpb25NZXNzYWdlLCBhY2NvdW50LCByZXBseT1cIlwiLCBxdWVzdGlvbklkPTEgfSA9IHJlcS5ib2R5XG5cbiAgICBpZiAoc2lnbmVkTWVzc2FnZSAhPT0gbnVsbCAmJiBjb25maXJtYXRpb25NZXNzYWdlICE9PSBudWxsICYmIGFjY291bnQgIT09IG51bGwpIHtcbiAgICAgIC8vIGdldCBhY2NvdW50IGZyb20gdGhlIGNvbmZpcm1hdGlvbiBtZXNzYWdlXG4gICAgICAvLyBhbmQgc2lnbmVkIG1lc3NhZ2VcbiAgICAgIGNvbnN0IHJlY292ZXJlZEFjY291bnQgPSB3ZWIzLmV0aC5hY2NvdW50cy5yZWNvdmVyKGNvbmZpcm1hdGlvbk1lc3NhZ2UsIHNpZ25lZE1lc3NhZ2UpXG5cbiAgICAgIC8vIGNoZWNrIGlmIGFjY291bnQgaXMgc2FtZVxuICAgICAgaWYgKGFjY291bnQudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3ZlcmVkQWNjb3VudC50b0xvd2VyQ2FzZSgpKSB7ICBcbiAgICAgICAgLy8geWVwLCBzbyByZW5kZXIgcmVwbHlcbiAgICAgICAgLy8geW91IHdvdWxkIHVzdWFsbHkgc2F2ZSB0byBhIGRhdGFiYXNlIGhlcmVcbiAgICAgICAgbGV0IG5ld1JlcGx5ID0gbWFya2Rvd24ucmVuZGVyKHJlcGx5KVxuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIGFsbCBnb29kXG4gICAgICAgIHJlc1xuICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgIC5qc29uKHsgYWNjb3VudCwgcmVwbHk6IG5ld1JlcGx5LCBxdWVzdGlvbklkLCBhbnN3ZXJJZDogMyB9KVxuICAgICAgfSBlbHNlIHsgIFxuICAgICAgICAvLyBpbmNvcnJlY3QgYWNjb3VudFxuICAgICAgICByZXNcbiAgICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgICAuanNvbih7IGVycm9yOiBcImluY29ycmVjdCBhY2NvdW50XCIgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbmVlZCB0byBzaWduIHRoYXQgbWVzc2FnZSFcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgLmpzb24oeyBlcnJvcjogXCJuZWVkIHRvIHNpZ24gbWVzc2FnZVwiIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIGZldGNoZWQgbm9ybWFsbHkgdXNpbmcgZmV0Y2goKVxuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICB7IHF1ZXN0aW9uSWQ6IDEsIGFuc3dlcklkOiAxLCByZXBseTogYW5zd2Vyc1swXSwgYWNjb3VudDogXCIweERmN0M3ZjQ5MWYyNkQzNWZDY2E3NEY2RmJkNmI1RkU0MzdjYzI0QzdcIiB9LFxuICAgICAgeyBxdWVzdGlvbklkOiAxLCBhbnN3ZXJJZDogMiwgcmVwbHk6IGFuc3dlcnNbMV0sIGFjY291bnQ6IFwiMHg0YTYwOGI3YWY4OGQ3ZWU5ODg1Zjg2YjZkOTYzNTg4MGVlOTNlMjYwXCIgfSxcbiAgICAgIHsgcXVlc3Rpb25JZDogMSwgYW5zd2VySWQ6IDMsIHJlcGx5OiBhbnN3ZXJzWzJdLCBhY2NvdW50OiBcIjB4MTVkMzRBQWY1NDI2N0RCN0Q3YzM2NzgzOUFBZjcxQTAwYTJDNkE2NVwiIH1cbiAgICBdXG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhbnN3ZXJzOiBkYXRhIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ3ZWIzIiwiTWFya2Rvd25JdCIsIm1hcmtkb3duIiwiYW5zd2VycyIsIm1hcCIsImEiLCJyZW5kZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2lnbmVkTWVzc2FnZSIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJhY2NvdW50IiwicmVwbHkiLCJxdWVzdGlvbklkIiwiYm9keSIsInJlY292ZXJlZEFjY291bnQiLCJldGgiLCJhY2NvdW50cyIsInJlY292ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5ld1JlcGx5Iiwic3RhdHVzIiwianNvbiIsImFuc3dlcklkIiwiZXJyb3IiLCJkYXRhIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/answers.js\n");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/answers.js"));
module.exports = __webpack_exports__;

})();