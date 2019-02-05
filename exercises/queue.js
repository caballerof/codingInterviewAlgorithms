/**
 * @author Reivaj Caballero
 * @description Create a queue data structure.  The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed
 *
 * Examples:
 *     const q = new Queue();
 *     q.add(1);
 *     q.remove(); // returns 1;
 */

class Queue {
  constructor() {
    this.data = [];
  }

  /**
   * Add a new element to the queue.
   * @param {Any} element to enqueueing.
   */
  add(element) {
    this.data.unshift(element);
  }

  /**
   * Removes the first element queued and returns it.
   * @returns The element removed, if there aren't more elements returns `undefined`
   */
  remove() {
    return this.data.pop();
  }

  /**
   * Retrieves the next element in the queue that will be removed, without remove it.
   * @returns {Any} The Element of the queue, if there aren't more elements then returns `Undefined`
   */
  peek() {
    return this.data[this.data.length - 1];
  }
} // End Class

module.exports = { Queue };
