/**
 * Design a Data Structure SpecialStack that supports
 * getMin() which should return minimum element from the SpecialStack must be O(1).
 * You should only use standard Stack data structure and no other data structure like arrays, list, .. etc.
 *
 * Example:
 *
 * Stack: top => [10, 25, 2, 85, 5, 8] <= tail
 * getMin() => 2
 * pop()    => 10
 *  Stack: top => [25, 2, 85, 5, 8] <= tail
 * pop()    => 25
 *  Stack: top => [2, 85, 5, 8] <= tail
 * pop()    => 2
 *  Stack: top => [85, 5, 8] <= tail
 * getMin() => 5
 */
const { Stack } = require("../stack");

class MinValStack {
  constructor() {
    this.stack = new Stack();
    this.minValStack = new Stack();
  }

  peek() {
    return this.stack.peek();
  }

  push(element) {
    const minVal = this.minValStack.peek();

    if (!minVal || element <= minVal) {
      this.minValStack.push(element);
    }

    this.stack.push(element);
  }

  pop() {
    const minVal = this.minValStack.peek();
    const currentVal = this.stack.peek();

    if (minVal == currentVal) {
      this.minValStack.pop();
    }

    return this.stack.pop();
  }

  getMinVal() {
    return this.minValStack.peek();
  }
}

module.exports = MinValStack;
