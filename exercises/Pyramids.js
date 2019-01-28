'use strict';

/**
 * @author Reivaj Caballero
 * @description Make a pyramid with N level using the # character, it has
 * spaces on both the left and right hand sides.
 *
 * pyramid(1)
 * '#'
 * pyramid(2)
 * ' # '
 * '###'
 * pyramid(3)
 * '  #  '
 * ' ### '
 * '#####'
 * pyramid(5)
 * '    #    '
 * '   ###   '
 * '  #####  '
 * ' ####### '
 * '#########'
 */

//pyramid(7);

/**
 * Print a pyramid with N level using the # character.
 * Complexity: O(n) where n = numbers of levels.
 * @param {number} levels Number of levels in the pyramid.
 */
function pyramid(levels) {
  if (levels === 1) {
    console.log(`#`);
  } else {
    const strArray = new Array(2 * levels - 1).fill(` `);
    for (let j = 1; j <= levels; j++) {
      strArray.fill(`#`, levels - j, levels + j - 1);
      console.log(strArray.join(``));
    }
  }
} // End pyramid

// TODO: recursive solution.

module.exports = {
  pyramid
};
