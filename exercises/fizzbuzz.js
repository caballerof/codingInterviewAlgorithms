"use strict";

/**
 * @author Reivaj Caballero
 * @description Given a number, log to console all number from 1 to number.
 * But numbers which are multiples of three print "fizz" instead of the number,
 * and numbers which are multiples of five print "buzz" instead of the number,
 * finally numbers which are multiples of both three and five print "fizzbuzz".
 *
 * fizzBuzz(5)
 *  1
 *  2
 *  fizz
 *  4
 *  buzz
 */
buzzFizz(15);
/**
 *  Print all numbers between 1 to `num` changing multiples of 3 to "fizz", multiples of 5 to "buzz" and multiples of
 *  both 3 and 5 to "fizzbuzz".
 * @param {Number} num Final number to print, loop will be [1 to `num`].
 */
function buzzFizz(num) {
  for (let iterator = 1; iterator <= num; iterator++) {
    if (0 === iterator % 3 && 0 === iterator % 5) {
      console.log(`fizzbuzz`);
    } else if (iterator % 5 == 0) {
      console.log(`buzz`);
    } else if (iterator % 3 == 0) {
      console.log(`fizz`);
    } else {
      console.log(iterator);
    }
  }
} //End buzzFizz

module.exports = { buzzFizz };
