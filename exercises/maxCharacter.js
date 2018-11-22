"use strict";

/**
 * @author Reivaj Caballero
 * @description Given a string, return the character that is most
 * commonly used (more repeated) in the string.
 *
 * maxChar("Troooooooll")           --> "o"
 * maxChar("555 apple android 555") --> "5"
 */

console.log(maxChar(`555 apple android 555`));

/**
 * Return the most repeated char within a string.
 * @param {String} str String to test.
 */
function maxChar(str) {
  const charMap = {};
  let popularChar = ``;
  let countChart = 0;
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (const char in charMap) {
    if (charMap[char] > countChart) {
      countChart = charMap[char];
      popularChar = char;
    }
  }
  return popularChar;
} //End maxChar

module.exports = { maxChar };
