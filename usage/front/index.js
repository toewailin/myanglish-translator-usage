import translator from "../../node_modules/myanglish-translator/src/index.js";
import { ConvertMode } from "../../node_modules/myanglish-translator/src/index.js";
const result = translator.convertToMyanglish("ကျွန်မတို့နိုင်ငံတော်ကြီးက");
console.log(result);
// // output => kyun ma do naing ngan taw geyii ka

const result2 = translator.convertToMyanglish(
  "ကျွန်မတို့နိုင်ငံတော်ကြီးကfdsa",
  { mode: ConvertMode.ADD_BRACKET_UNKNOWN_KEYWORDS }
);
console.log(result2);
// output => kyun ma do naing ngan taw geyii ka {fdsa}
