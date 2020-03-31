/**
 * Given a string, reverse it but don't change the symbols
 * position only change the literal characters.
 *
 * Example.
 * str = 'abc$df'     => 'fdc$ba'
 * str = 'ab.c$dfg'   => 'gf.d$cba'
 * str = 'ab,c$f#'    => 'c,b$a#'
 * str = 'Ab,c,de!$'  => 'ed,c,bA!$'
 *
 * Note: Strings in JS are immutable
 */

/**
 * Complexity (n)
 * @param {String} str String to reverse.
 */
function reverseStrNoExtraSpace(str) {
  const strArray = [...str]; // split(``)
  let pointerLeft = 0;
  let pointerRight = strArray.length - 1;
  const isItLetter = /[A-Za-z]/;
  while (pointerLeft < pointerRight) {
    //TODO: We can ask for both left and right pointer at the same time
    if (!isItLetter.test(strArray[pointerLeft])) {
      pointerLeft++;
    } else if (!isItLetter.test(strArray[pointerRight])) {
      pointerRight--;
    } else {
      let temp = strArray[pointerLeft];
      strArray[pointerLeft] = strArray[pointerRight];
      strArray[pointerRight] = temp;
      pointerLeft++;
      pointerRight--;
    }
  }
  return strArray.join(``);
}

/**
 * Complexity O(n)
 * @param {String} str String to reverse.
 */
function reverseStrOther(str) {
  const strArray = str.split(``);
  const isItLetter = /[A-Za-z]/;
  const onlyLetters = str.match(/[A-Za-z]/g);
  for (let index = 0; index < strArray.length; index++) {
    if (isItLetter.test(strArray[index])) {
      strArray[index] = onlyLetters.pop();
    }
  }
  return strArray.join(``);
} // End reverseStrOther

/**
 * Complexity O(2n) => O(n), but this solution need extra space.
 * @param {String} str String to reverse.
 */
function reverseStr(str) {
  const strArray = str.split('');
  const stackLet = [];
  const stackSym = [];
  let isItLetter = /[A-Za-z]/;
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

console.log(reverseStrOther('Ab,c,de!$'));

module.exports = { reverseStr, reverseStrNoExtraSpace };
