const fib = (number, store = {}) => {
  if (number in store) return store[number];

  if (number <= 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  }

  store[number] = fib(number - 1, store) + fib(number - 2, store);

  return store[number];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(50));

