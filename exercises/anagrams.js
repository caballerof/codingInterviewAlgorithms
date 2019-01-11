'use strict';

/**
 * @author Reivaj Caballero
 * @description Check to see if two provided strings are anagrams of each other.
 * - One string is an anagram of another if it uses the same characters in the same quantity.
 * - Only consider characters, not spaces or punctuation.
 * - Consider capital letters to be the same as lower case
 *
 * 'rail safety'    --> 'rail safety' --> true
 * 'RAIL! SAFETY!'  --> 'fairy tales' --> true
 * 'Hi there'       --> 'by there'    --> false
 *
 */

console.log(anagrams(` nag a ram sdasdsadasd`, `anagram`));
// console.log(anagramWithoutLoops(` nag a ram`, `anagram`));

/**
 * Compare two given string and returns if them are an anagram or not.
 * @param {string} string1 First String to compare with the second string.
 * @param {string} string2 Second string to compare with the first string.
 * @returns {boolean} Returns true if it is a anagram, returns false  in other case.
 */
function anagrams(string1, string2) {
  const firstString = string1
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split(``);
  const secondString = string2
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split(``);
  const characterMapFirst = {};
  const characterMapSecond = {};
  if (firstString.length !== secondString.length) {
    return false;
  } else {
    for (let x = 0; x < firstString.length; x++) {
      characterMapFirst[firstString[x]] =
        characterMapFirst[firstString[x]] + 1 || 1;
      characterMapSecond[secondString[x]] =
        characterMapSecond[secondString[x]] + 1 || 1;
    }
    const letters = Object.keys(characterMapFirst);
    for (let letter of letters) {
      if (characterMapFirst[letter] !== characterMapSecond[letter]) {
        return false;
      }
    }
  }
  return true;
} // End anagrams

/**
 * Compare two given string and returns if them are an anagram or not.
 * @param {string} stringA First String to compare with the second string.
 * @param {string} stringB Second string to compare with the first string.
 * @returns {boolean} Returns true if it is a anagram, returns false  in other case.
 */
function anagramWithoutLoops(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
} // End

/**
 * Remove all character which are not letters or numbers.
 * @param {String} str String to remove special characters.
 * @returns {String} A string only with letters and numbers.
 */
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split(``)
    .sort()
    .join(``);
} // End cleanString

module.exports = {
  anagrams,
  anagramWithoutLoops
};
