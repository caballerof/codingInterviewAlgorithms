const { fibonacci } = require('./fibonacci');

test('Fibonacci function was define', () => {
  expect(typeof fibonacci).toEqual('function');
});

test('Calculated value for 0', () => {
  expect(fibonacci(0)).toEqual(0);
});

test('Calculated value for 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('Calculated value for 2', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('Calculated value for 3', () => {
  expect(fibonacci(3)).toEqual(2);
});

test('Calculated value for 7', () => {
  expect(fibonacci(7)).toEqual(13);
});

test('Calculated value for 14', () => {
  expect(fibonacci(14)).toEqual(377);
});
