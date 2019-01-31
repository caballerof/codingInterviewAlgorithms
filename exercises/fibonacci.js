console.log(fibonacci(100));
console.log(fibonacciRec(10));

function fibonacci(number) {
  const fiboSeries = [0, 1];
  for (let x = 2; x <= number; x++) {
    fiboSeries.push(fiboSeries[x - 1] + fiboSeries[x - 2]);
  }
  return fiboSeries[number];
} // End fibonacci

function fibonacciRec(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciRec(number - 1) + fibonacciRec(number - 2);
} // End fibonacciRec
