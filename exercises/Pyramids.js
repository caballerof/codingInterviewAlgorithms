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

pyramid(5);

/**
 *
 * @param {number} levels
 */
function pyramid(levels) {
  if (levels === 1) {
    console.log(`#`);
  } else {
    let strArray = new Array(levels + (levels - 1));
    for (let j = 1; j <= levels; j++) {
      strArray.fill(` `);
      strArray.fill(`#`, levels - j, levels + j - 1);
      console.log(strArray.join(``));
    }
  }
} // End pyramid

module.exports = {
  pyramid
};
