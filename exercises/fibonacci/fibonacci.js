/**
 *
 */
const fibonacciMemoize = cacheFibonacciRec(fibonacciRecCache);

// console.log(fibonacci(2));
// console.log(fibonacciMemoize(2));

/**
 *
 * @param {Number} number
 */
function fibonacci(number) {
  const fiboSeries = [0, 1];
  for (let x = 2; x <= number; x++) {
    fiboSeries.push(fiboSeries[x - 1] + fiboSeries[x - 2]);
  }
  return fiboSeries[number];
} // End fibonacci

/**
 *
 * @param {Function} fn
 */
function cacheFibonacciRec(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
} // End cacheFibonacciRec

/**
 *
 * @param {Number} number
 */
function fibonacciRecCache(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciMemoize(number - 1) + fibonacciMemoize(number - 2);
} // End fibonacciRecCache

/**
 *
 * @param {Number} number
 */
function fibonacciRec(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciRec(number - 1) + fibonacciRec(number - 2);
} // End fibonacciRec

module.exports = {
  fibonacci,
  fibonacciMemoize,
  fibonacciRec
};
