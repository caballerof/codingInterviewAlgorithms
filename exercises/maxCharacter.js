"use strict";

/**
 * @author Reivaj Caballero
 * @description
 *
 */

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
}
