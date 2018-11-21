'use strict';

const reverseString = require('./reverseString');

/**
 * @author Reivaj Caballero
 * @description Givin a integer return an integer that is the reverse ordering of numbers
 *
 */

console.log(reverseInteger(-90));

/**
 * Reverse a given integer 
 * @param {number} number Integer value to reverse.
 * @returns `number` Return a reversed integer, if the parameter is not a integer it going to return 0.
 */
function reverseInteger(number) {
    if (Number.isInteger(number)) {
        let numberToString = reverseString.reverseString(number.toString());
        let integerReversed = parseInt(reverseString.reverseString(number.toString()));
        return numberToString.includes(`-`) ? integerReversed * -1 : integerReversed;
    } else {
        return 0;
    }
}//End reverseInteger