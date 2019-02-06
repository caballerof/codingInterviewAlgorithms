/**
 * Given a string, reverse it but don't change the symbols
 * position only change the literal characters.
 *
 * Example.
 * str = 'abc$df' => 'fdc$ba'
 * str = 'ab.c$dfg' => 'gf.d$cba'
 * str = 'ab,c$f#' => 'c,b$a#'
 */

function reverseStr(str) {
  const strArray = str.split('');
  const stackLet = [];
  const stackSym = [];
  let isItLetter = /^[A-Za-z]+$/;
  for (let index = 0; index < strArray.length; index++) {
    if (isItLetter.test(strArray[index])) {
      stackLet.push(strArray[index]);
    } else {
      stackSym.push({ sym: strArray[index], index: index });
    }
  }
  stackLet.reverse();
  for (const infoSym of stackSym) {
    stackLet.splice(infoSym.index, 0, infoSym.sym);
  }
  return stackLet.join('');
} // End reverseStr

console.log(reverseStr('ab,c$f#'));

module.exports = { reverseStr };
