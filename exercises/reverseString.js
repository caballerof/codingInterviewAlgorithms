'use strict';
/**
 * @author Reivaj Caballero
 * @description Given a string, return a new string with the reversed
 * order of characters.
 * reverseString(`Hello`)       --> olleh
 * reverseString(`Reverse`)     --> esreveR
 * reverseString(`Greetings!`)  --> !sgniteerG
 */

console.log(reverseString(`ab.c$dfg`));
/**
 * Given a string, return a new string with the reversed using Array and String methods.
 * @param {String} stringToReverse This value will be reversed.
 * @returns {String} Reversed string.
 */
function reverseString(stringToReverse) {
  return stringToReverse
    .split('')
    .reverse()
    .join(``);
} //End reverseString

/**
 * Given a string, return a new string with the reversed using {For of} loop".
 * @param {String} stringToReverse This value will be reversed.
 * @returns {String} Reversed string.
 */
function reverseStringWithLoop(stringToReverse) {
  let revStr = '';
  for (let v of stringToReverse) {
    revStr = v + revStr;
  }
  return revStr;
} //End reverseStringWithLoop

/**
 * Given a string, return a new string with the reversed using {For of} loop".
 * @param {String} stringToReverse This value will be reversed.
 * @returns {String} Reversed string.
 */
function reverseStringWithReduce(stringToReverse) {
  return stringToReverse
    .split(``)
    .reduce(
      (strReversed, currentCharacter) => currentCharacter + strReversed,
      ``
    );
} //End reverseStringWithReduce

module.exports = {
  reverseString,
  reverseStringWithLoop,
  reverseStringWithReduce
};
