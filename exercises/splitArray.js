'use strict';

/**
 * @author Reivaj Caballero
 * @description Given an array and amount to split `size`,  divide the array into many subarrays.
 * where each array is of length `size`.
 *
 *split([1, 2, 3, 4, 5, 6, 7, 8], 2)  --> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
 *split([1, 2, 3, 4, 5, 6, 7, 8], 10) --> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 *split([1, 2, 3, 4, 5, 6, 7, 8], 1)  --> [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ] ]
 *split([1, 2, 3, 4, 5, 6, 7, 8], 6)  --> [ [ 1, 2, 3, 4, 5, 6 ], [ 7, 8 ] ]
 */

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 10));

/**
 * Given an array and a size, return a `Array` in which every element from the array is a sub-array with length = size.
 * @param {Array} originalArray Array to split.
 * @param {Number} size Number of element to split the array.
 */
function splitArray(originalArray, size) {
  const residue = originalArray.length % size;
  const resArray = [];
  if (originalArray.length > size) {
    let index;
    for (index = 0; index <= originalArray.length - size; index += size) {
      resArray.push(originalArray.slice(index, index + size));
    }
    if (originalArray.length % size > 0) {
      resArray.push(originalArray.slice(index, index + residue));
    }
  } else {
    return originalArray;
  }
  return resArray;
} //End splitArray

/**
 * Given an array and a size, return a `Array` in which every element from the array is a sub-array with length = size.
 * @param {Array} array originalArray Array to split.
 * @param {Number} size size Number of element to split the array.
 */
function splitArray2(array, size) {
  const splittedArray = [];
  for (let element of array) {
    const last = splittedArray[splittedArray.length - 1];
    if (!last || last.length === size) {
      splittedArray.push([element]);
    } else {
      last.push(element);
    }
  }
  return splittedArray;
} //End splitArray2

module.exports = {
  splitArray,
  splitArray2
};
