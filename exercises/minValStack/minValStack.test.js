const MinValStack = require('./minValStack');

test('MinValStack is a class', () => {
  expect(typeof MinValStack.prototype.constructor).toEqual('function');
});

describe('Basic operations', () => {
  test('Add elements push', () => {
    const stack = new MinValStack();
    stack.push(45);
    stack.push(21);

    expect(stack.peek()).toEqual(21);
    expect(stack.pop()).toEqual(21);
    expect(stack.peek()).toEqual(45);
  });

  test('Remove top elements - pop', () => {
    const stack = new MinValStack();
    stack.push(45);
    stack.push(21);
    
    expect(stack.pop()).toEqual(21);
    expect(stack.pop()).toEqual(45);
  });

  test('Retrieve top elements - peek', () => {
    const stack = new MinValStack();
    stack.push(21);
    stack.push(45);

    expect(stack.peek()).toEqual(45);
  });
});

describe('Testing getMinVal from stack', () => {
  test('Test 1', () => {
    const stack = new MinValStack();

    stack.push(16);
    stack.push(15);
    stack.push(29);
    stack.push(19);
    stack.push(18);

    expect(stack.getMinVal()).toEqual(15);
  });

  test('Test 2', () => {
    const stack = new MinValStack();

    stack.push(18);
    stack.push(19);
    stack.push(29);
    stack.push(15);
    stack.push(16);

    stack.pop();
    stack.pop();

    expect(stack.getMinVal()).toEqual(18);
  });

  test('Test 3', () => {
    const stack = new MinValStack();

    stack.push(3);
    stack.push(2);
    stack.push(7);
    stack.push(2);
    stack.push(8);
    stack.push(1);

    expect(stack.getMinVal()).toEqual(1);

    stack.pop();

    expect(stack.getMinVal()).toEqual(2);

    stack.push(1);
    stack.push(0);

    expect(stack.getMinVal()).toEqual(0);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.getMinVal()).toEqual(2);
  });
});
