'use strict';
/**
 * @author Reivaj Caballero
 * @description Implement a Queue data-structure using two stacks.
 * *Do not* create an array inside of the 'Queue' class.
 * Queue should implement the methods 'add', 'remove', and 'peek'.
 * For a reminder on what each method does, look back
 * at the Queue exercise.
 * Examples:
 *     const q = new Queue();
 *     q.add(1);
 *     q.add(2);
 *     q.peek();  // returns 1
 *     q.remove(); // returns 1
 *     q.remove(); // returns 2
 */

const { Stack } = require('./stack');

class QStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(element) {
    this.stack1.push(element);
  }

  peek() {
    this.changeStack();
    const result = this.stack2.peek();
    this.returnStack();
    return result;
  }

  remove() {
    this.changeStack();
    const result = this.stack2.pop();
    this.returnStack();
    return result;
  }

  changeStack() {
    while (this.stack1.peek() != undefined) {
      this.stack2.push(this.stack1.pop());
    }
  }

  returnStack() {
    while (this.stack2.peek() != undefined) {
      this.stack1.push(this.stack2.pop());
    }
  }
} // End class

const q = new QStack();
q.add(1);
q.add(2);
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2

module.exports = { QStack };
