'use strict';

/**
 * @author Reivaj Caballero
 * @description
 *
 */

class Node {
  /**
   * Constructor for Node class.
   * @param {Any} data
   * @param {Node} next
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
} // End class

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head.next = this.head;
    }
  }

  removeLast() {
    let previous = this.head;
    let current = this.head;
    if (!current || !current.next) {
      this.head = null;
      return;
    }
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
} // End class

var lista = new LinkedList();

// lista.insertFirst(1);
// lista.insertFirst(2);
// lista.insertFirst(3);
// lista.insertFirst(4);
//console.log(lista.size());
//console.log(lista.getFirst());
console.log(lista.getLast());

module.exports = { Node, LinkedList };
