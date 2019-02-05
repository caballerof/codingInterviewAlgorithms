'use strict';

/**
 * @author Reivaj Caballero
 * @description Create a queue data structure.  The queue
 * should be a class with methods 'add' and 'remove'.
 *
 * Weave
 * receives two queues as arguments and combines the
 * contents of each into a new, third queue.
 * The third queue should contain the *alterating* content
 * of the two queues.  The function should handle
 * queues of different lengths without inserting
 * 'undefined' into the new one.
 * *Do not* access the array inside of any queue, only
 * use the 'add', 'remove', and 'peek' functions.
 * --- Example
 *    const queueOne = new Queue();
 *    queueOne.add(1);
 *    queueOne.add(2);
 *    const queueTwo = new Queue();
 *    queueTwo.add('Hi');
 *    queueTwo.add('There');
 *    const q = weave(queueOne, queueTwo);
 *    q.remove() // 1
 *    q.remove() // 'Hi'
 *    q.remove() // 2
 *    q.remove() // 'There'
 */

const { Queue } = require('./queue');

/**
 * Receives two queues as arguments and combines the
 * contents of each into a new, third queue.
 * @param {Queue} queue1 first queue to combine.
 * @param {Queue} queue2 second queue to combine.
 * @returns {Queue} A new `Queue` with the combined elements.
 */
function weave(queue1, queue2) {
  let newQueue = new Queue();
  while (queue1.peek() !== undefined || queue1.peek() !== undefined) {
    if (queue1.peek() !== undefined) {
      newQueue.add(queue1.remove());
    }
    if (queue2.peek() !== undefined) {
      newQueue.add(queue2.remove());
    }
  }
  return newQueue;
} // End weave

module.exports = { weave };
