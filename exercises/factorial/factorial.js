'use strict';

/**
 * @author Reivaj Caballero
 * @description
 *
 *
 */

console.log(factorialInteractive(5));
console.log(factorialRecursive(5));
/**
 *
 */
function factorialInteractive(number) {
  let result = 1;
  if (!number) return 1;
  while (number) {
    result *= number;
    number--;
  }
  return result;
} // End factorialInteractive

function factorialRecursive(number) {
  if (0 === number) {
    return 1;
  }
  return number * factorialRecursive(number - 1);
} // End factorialRecursive

function memoizationFactorial(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return cache[args];
  };
}

function factorialRecursiveCahe(number) {
  if (0 === number) {
    return 1;
  }
  return number * factorialMemo1(number - 1);
}

var factorialMemo1 = memoizationFactorial(factorialRecursiveCahe);

module.exports = {
  factorialRecursive,
  factorialInteractive
};
