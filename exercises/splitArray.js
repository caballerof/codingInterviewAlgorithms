"use strict";

console.log(splitArray([1, 2, 3, 4, 5, 6], 2));

/**
 *
 * @param {Array} array
 * @param {Number} size
 */
function splitArray(array, size) {
  let steps = Math.trunc(array.length / size);
  let residue = array.length % size;
  let resArray = [];
  let iniIndex = 0;
  let finIndex = size;
  if (array.length > size) {
    while (steps) {
      resArray.push(array.slice(iniIndex, finIndex));
      iniIndex += finIndex;
      finIndex *= 2;
      steps--;
    }
    if (residue > 0) {
      resArray.push(array.slice(iniIndex, iniIndex + residue));
    }
  } else {
    return array;
  }
  return array;
} //End splitArray
