"use strict";
/**
 *
 * @description Create a stack data structure.  The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 * Examples
 *   const s = new Stack();
 *   s.push(1);
 *   s.push(2);
 *   s.pop(); // returns 2
 *   s.pop(); // returns 1
 */

class Stack {
  /**
   * Instance a empty stack
   */
  constructor() {
    this.data = [];
  }

  /**
   * Insert a new element to the stack.
   * @param {Any} element to insert into stack.
   */
  push(element) {
    this.data.push(element);
  }

  /**
   * Remove top element from the stack.
   */
  pop() {
    return this.data.pop();
  }

  /**
   * Retrieve top element from the stack.
   * It does not remove the element.
   */
  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }
} // End Class

module.exports = { Stack };
