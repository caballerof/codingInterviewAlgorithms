'use strict';

/**
 * @author Reivaj Caballero
 * @description Write a function that returns the number of vowels used
 * in a string.
 * Vowels = ['a','e','i','o','u']
 *
 * vowels(`Hi there!`)       --> 3
 * vowels(`Why do you ask?`) --> 4
 */
console.log(countVowelsRegExp(`Why do you Ask?`));

/**
 *
 * @param {*} str String to search vowels.
 */
function countVowels(str) {
  const vowelsArray = [`a`, `e`, `i`, `o`, `u`];
  const strArray = str.toLowerCase().split(``);
  let numberVowels = 0;
  for (const character of strArray) {
    const isEqual = vowelsArray.find(vowel => vowel === character);
    isEqual ? numberVowels++ : 0;
  }
  return numberVowels;
} // End countVowels

/**
 *
 * @param {*} str String to search vowels.
 */
function countVowelsIncludes(str) {
  const vowelsArray = [`a`, `e`, `i`, `o`, `u`];
  let numberVowels = 0;
  for (const character of str.toLowerCase()) {
    if (vowelsArray.includes(character)) {
      numberVowels++;
    }
  }
  return numberVowels;
} // End countVowelsIncludes

/**
 *
 * @param {*} str String to search vowels.
 */
function countVowelsRegExp(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
} // End countVowelsIncludes

module.exports = { countVowels, countVowelsIncludes, countVowelsRegExp };
