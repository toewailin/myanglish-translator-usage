const translator = require("myanglish-translator");

// const translator = require("myanglish-translator")
const { ConvertMode } = require("myanglish-translator");

// console.log(translator.default.tra);

const result = translator.default.convertToMyanglish(
  "ကျွန်မတို့နိုင်ငံတော်ကြီးက"
);
console.log(result);
// // output => kyun ma do naing ngan taw geyii ka

const result2 = translator.default.convertToMyanglish(
  "ကျွန်မတို့နိုင်ငံတော်ကြီးကfdsa",
  { mode: ConvertMode.ADD_BRACKET_UNKNOWN_KEYWORDS }
);
console.log(result2);
// output => kyun ma do naing ngan taw geyii ka {fdsa}

// run -> node index-node-back.js
