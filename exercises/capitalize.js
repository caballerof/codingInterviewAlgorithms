'use strict';

/**
 * @author Reivaj Caballero
 * @description
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * returns the capitalizes string.
 *
 * - `a short sentence`     --> `A Short Sentence`
 * - `look, it is working!` --> `Look, It Is Working!`
 */

console.log(capitalizeOther(`look, it is working!`));

/**
 * Capitalize the first letter of each word.
 * @param {string} str `String` to uppercase the first letter.
 * @return {string} `String` returns the capitalizes string.
 */
function capitalize(str) {
  let strArray = str.split(` `);
  strArray.forEach((element, index) => {
    strArray[index] =
      element.substring(0, 1).toUpperCase() +
      element.substring(1, element.length);
    //console.log(letter.toUpperCase() + strRest);
  });
  return strArray.join(` `);
} // End capitalize

/**
 * Capitalize the first letter of each word.
 * @param {string} str `String` to uppercase the first letter.
 * @return {string} `String` returns the capitalizes string.
 */
function capitalizeOther(str) {
  const words = [];
  for (let word of str.split(` `)) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(` `);
} // End capitalizeOther

module.exports = {
  capitalize,
  capitalizeOther
};
