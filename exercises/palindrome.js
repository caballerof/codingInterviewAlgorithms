"use strict";

const reverseString = require("./reverseString");

/**
 * @author Reivaj Caballero
 * @description Given a string or phrase, return true if the string is a palindrome
 * or false if it is not.  Palindromes are strings that
 * form the same word if it is reversed. *Do* include spaces
 * and punctuation in determining if the string is a palindrome.
 * --- Examples:
 *   palindrome(`anita lava la tina`)   --> true
 *   palindrome(`oso`)                  --> true
 *   palindrome(`abcdefg`)              --> false
 */

//console.log(isPalindromeWithEvery(`anita lava la tina`));

/**
 * Given a string return true or false if it is a palindrome.
 * @param {String} str String to test.
 * @returns {Boolean} `true` if the string is a palindrome, `false` in other case.
 */
function isPalindrome(str) {
  let strInverse = reverseString.reverseString(str);
  return strInverse.replace(/\s/g, "") === str.replace(/\s/g, "")
    ? true
    : false;
} //End isPalindrome

/**
 * Given a string return true or false if it is a palindrome, using every() JS methods.
 * @param {String} str String to test.
 * @returns {Boolean} `true` if the string is a palindrome, `false` in other case.
 */
function isPalindromeWithEvery(str) {
  return str
    .replace(/\s/g, "")
    .split(``)
    .every((element, index, strArray) => {
      return element === strArray[strArray.length - 1 - index];
    });
} //End isPalindromeWithEvery

/**
 * Given a string return true or false if it is a palindrome, using a Loop.
 * @param {String} str String to test.
 * @returns {Boolean} `true` if the string is a palindrome, `false` in other case.
 */
function isPalindromeWithLoop(str) {
  let strArray = str.replace(/\s/g, "").split(``);
  let numRep = Math.ceil(strArray.length / 2);
  for (let i = 0; i <= numRep; i++) {
    if (strArray[i] !== strArray[strArray.length - 1]) {
      return false;
    }
  }
  return true;
} //End isPalindromeWithLoop

module.exports = { isPalindrome, isPalindromeWithEvery, isPalindromeWithLoop };
