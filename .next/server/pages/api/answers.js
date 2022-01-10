"use strict";
(() => {
var exports = {};
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "web3"
const external_web3_namespaceObject = require("web3");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
;// CONCATENATED MODULE: ./lib/web3.js

let web3 = new (external_web3_default())((external_web3_default()).givenProvider || "wss://mainnet.infura.io/ws/v3/28696900a2cf490eb160741dc63e4707");


;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/answers.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// make a new markdown renderer
const markdown = new (external_markdown_it_default())();
// a list of 3 answers by default
// usually this would come from a database
// but to keep things simple, we're setting it here
const answers = [
    `That's fantastic work for a beginner! [Arteza](#) have great sculpting tools that you may want to check out!`,
    `From the looks of the clay, it could be a touch dry. 
  
  Maybe consider a _slight_ bit more water on your hands while you shape and you may find that a little easier.`,
    `I disagree with reply #3, I think the clay looks fine, no more water needed. `
].map((a)=>markdown.render(a)
);
// what happens when we ask for /api/answers
function handler(req, res) {
    // if sent via a form, e.g. the reply form
    if (req.method === "POST") {
        const { signedMessage , confirmationMessage , account , reply ="" , questionId =1  } = req.body;
        if (signedMessage !== null && confirmationMessage !== null && account !== null) {
            // get account from the confirmation message
            // and signed message
            const recoveredAccount = web3.eth.accounts.recover(confirmationMessage, signedMessage);
            // check if account is same
            if (account.toLowerCase() === recoveredAccount.toLowerCase()) {
                // yep, so render reply
                // you would usually save to a database here
                let newReply = markdown.render(reply);
                // return all good
                res.status(200).json({
                    account,
                    reply: newReply,
                    questionId,
                    answerId: 3
                });
            } else {
                // incorrect account
                res.status(401).json({
                    error: "incorrect account"
                });
            }
        } else {
            // need to sign that message!
            res.status(401).json({
                error: "need to sign message"
            });
        }
    } else {
        // if fetched normally using fetch()
        const data = [
            {
                questionId: 1,
                answerId: 1,
                reply: answers[0],
                account: "0xDf7C7f491f26D35fCca74F6Fbd6b5FE437cc24C7"
            },
            {
                questionId: 1,
                answerId: 2,
                reply: answers[1],
                account: "0x4a608b7af88d7ee9885f86b6d9635880ee93e260"
            },
            {
                questionId: 1,
                answerId: 3,
                reply: answers[2],
                account: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
            }
        ];
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            answers: data
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(922));
module.exports = __webpack_exports__;

})();