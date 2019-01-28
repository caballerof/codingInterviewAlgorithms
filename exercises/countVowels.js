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
console.log(vowels(`Why do you ask?`));

/**
 *
 * @param {*} str
 */
function vowels(str) {
  const vowelsArray = [`a`, `e`, `i`, `o`, `u`];
  const strArray = str.split(``);
  let numberVowels = 0;
  for (const character of strArray) {
    const isEqual = vowelsArray.find(vowel => vowel === character);
    isEqual ? numberVowels++ : 0;
  }
  return numberVowels;
} // End vowels

module.exports = { vowels };
