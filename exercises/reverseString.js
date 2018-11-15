"use strict";
/**
 * @author Reivaj Caballero
 * @description Given a string, return a new string with the reversed
 * order of characters.
 * reverseString(`Hello`)       --> olleh
 * reverseString(`Reverse`)     --> esreveR
 * reverseString(`Greetings!`)  --> !sgniteerG
 */

/**
 * Given a string, return a new string with the reversed using Array and String methods.
 * @param {String} stringToReverse This value will be reversed.
 */
function reverseString(stringToReverse) {
  return stringToReverse
    .split("")
    .reverse()
    .join(``);
} //End reverseString

/**
 * Given a string, return a new string with the reversed using {For of} loop".
 * @param {String} stringToReverse This value will be reversed.
 */
function reverseStringWithFor(stringToReverse) {
  let revStr = "";
  for (let v of strToReverse) {
    revStr = v + revStr;
  }
  return revStr;
} //End reverseStringWithFor

/**
 * Given a string, return a new string with the reversed using {For of} loop".
 * @param {String} stringToReverse This value will be reversed.
 */
function reverseStringWithReduce(stringToReverse) {
  return strToReverse
    .split(``)
    .reduce(
      (strReversed, currentCharacter) => currentCharacter + strReversed,
      ``
    );
} //End reverseStringWithReduce

module.exports = {
  reverseString,
  reverseStringWithFor,
  reverseStringWithReduce
};
