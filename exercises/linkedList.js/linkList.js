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

  getAt(index) {
    let node = this.head;
    let count = 0;
    if (index <= 0) {
      return node;
    }
    while (node && node.next) {
      node = node.next;
      count++;
      if (count === index) {
        return node;
      }
    }
    return null;
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
  } // End removeLast

  removeAt(index) {
    let node = this.head;
    let previousNode = this.head;
    let count = 1;
    if (!node || index < 0) {
      return null;
    }
    if (0 === index) {
      if (!node.next) {
        this.head = null;
        return node;
      } else {
        this.head = this.head.next;
        return node;
      }
    } else if (!node.next && index > 0) {
      return null;
    }
    node = node.next;
    do {
      if (index === count) {
        previousNode.next = node.next;
        return node;
      }
      previousNode = node;
      node = node.next;
      count++;
    } while (node.next);
    if (!node.next && index === count) {
      previousNode.next = null;
      return node;
    }
    return null;
  } // End removeAt

  insertAt(data, index) {
    const newNode = new Node(data);
    const node = this.head;
    let count = 1;
    if (!node) {
      this.head = newNode;
      return newNode;
    } else if (index <= 0) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
    while (node.next) {
      if (count === index) {
        let bucketNode = node.next;
        node.next = newNode;
        newNode.next = bucketNode;
        return newNode;
      }
      node = node.next;
      -count++;
    }
    node.next = newNode;
    return newNode;
  } // End insertAt

  insertLast(data) {
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
} // End class

var lista = new LinkedList();

//lista.insertFirst(3);
//lista.insertFirst(2);
//lista.insertFirst(1);
console.log(lista.size());
console.log(lista.removeAt(-1));
console.log(lista);
module.exports = { Node, LinkedList };
