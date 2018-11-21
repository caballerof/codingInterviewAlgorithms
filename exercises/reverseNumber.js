"use strict";

const reverseString = require("./reverseString");

/**
 * @author Reivaj Caballero
 * @description Givin a integer return an integer that is the reverse ordering of numbers
 *
 */

console.log(reverseIntegerMathSign(-45));

/**
 * Reverse a given integer
 * @param {number} number Integer value to reverse.
 * @returns `null` If the parameter is not a integer it going to return `null`.
 */
function reverseInteger(number) {
  if (Number.isInteger(number)) {
    let numberToString = reverseString.reverseString(number.toString());
    let integerReversed = parseInt(
      reverseString.reverseString(number.toString())
    );
    return numberToString.includes(`-`)
      ? integerReversed * -1
      : integerReversed;
  } else {
    return null;
  }
} //End reverseInteger

/**
 * Reverse a given integer with Math.sign().
 * @param {Number} number Integer value to reverse.
 * @returns `null` If the parameter is not a integer it going to return `null`.
 */
function reverseIntegerMathSign(number) {
  if (Number.isInteger(number)) {
    return (
      parseInt(reverseString.reverseString(number.toString())) *
      Math.sign(number)
    );
  } else {
    return null;
  }
} //End reverseIntegerMathSign
