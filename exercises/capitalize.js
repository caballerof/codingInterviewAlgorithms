'use strict';

/**
 * @author Reivaj Caballero
 * @description
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * returns the capitalizes string.
 *
 * - `a short sentence` --> `A Short Sentence`
 */

console.log(capitalize(`a short sentence`));

/**
 *
 * @param {string} str
 */
function capitalize(str) {
  let strArray;
  str.split(` `).forEach(element => {
    strArray = [...element];
    strArray[0] = strArray[0].toUpperCase();
    element = strArray.join(``);
  });
  return str;
} // End capitalize
