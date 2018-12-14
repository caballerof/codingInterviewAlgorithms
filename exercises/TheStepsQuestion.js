'use strict';

/**
 * @author Reivaj Caballero
 * @description Make a stair with N level using the # character. Make sure the
 * step has spaces on the right hand side!.
 *
 * steps (2)
 *  `# `
 *  `##`
 * steps (3)
 *  `#  `
 *  `## `
 *  `###`
 * steps (4)
 * `#`
 * `##`
 * `###`
 * `####`
 */

//steps(4);
stepsRecursion(3);
/**
 * Print a stair with character # with N level.
 * @param {number} stepsNumber Levels to the stair.
 */
function steps(stepsNumber) {
  const arrayToFill = new Array(stepsNumber);
  arrayToFill.fill(` `);
  for (let step = 1; step <= stepsNumber; step++) {
    arrayToFill.fill(`#`, 0, step);
    console.log(`'${arrayToFill.join(``)}'`);
  }
} // End steps

/**
 * Print a stair with character # with N level.
 * @param {number} number Levels to the stair.
 * @param {number} [increment=1] Amount to increment each step.
 * @param {number} [row=0] Current row in the stair's level.
 * @param {string} [stair=''] Represent the string (level) to print in the current level.
 */
function stepsRecursive(number, increment = 1, row = 0, stair = ``) {
  if (number === row) {
    return;
  }
  if (number === stair.length) {
    console.log(stair);
    return steps(number, row + increment);
  }
  if (stair.length <= row) {
    stair += `#`;
  } else {
    stair += ` `;
  }
  return steps(number, row, stair);
} // End stepsRecursion

module.exports = {
  step,
  stepsRecursive
};
