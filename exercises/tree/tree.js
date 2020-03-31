"use strict";

/*
 * 1) Create a node class.  The constructor
 * should accept an argument that gets assigned
 * to the data property and initialize an
 * empty array for storing children. The node
 * class should have methods 'add' and 'remove'.
 * 2) Create a tree class. The tree constructor
 * should initialize a 'root' property to null.
 * 3) Implement 'traverseBF' and 'traverseDF'
 * on the tree class.  Each method should accept a
 * function that gets called with each element in the tree
 */

/**
 * Create a new tree's node.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  /**
   * It create and add a new node to the tree with the data passed as parameter.
   * @param {Any} data that will be add to the tree.
   */
  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
} // End class Node

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * Retrieve a listNodes making a BFS.
   * @return {Array} Nodes list.
   */
  breadthFirstSearch() {
    let listNodes = [];
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      listNodes.push(node.data);
      for (const child of node.children) {
        queue.push(child);
      }
    }
    return listNodes;
  }

  /**
   * Apply a function for each node in the tree using BFS.
   * @param {Function} fn Callback function to apply for each node in the tree.
   */
  bfsApplyFn(fn) {
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      queue.push(...node.children);
      fn(node);
    }
  } // End bfsApplyFn

  /**
   * Retrieve a listNodes making a DFS.
   * @return {Array} Nodes list.
   */
  depthFirstSearch() {
    const stack = [this.root];
    const nodes = [];
    while (stack.length > 0) {
      const node = stack.shift();
      nodes.push(node.data);
      stack.unshift(...node.children);
    }
    return nodes;
  }

  /**
   * Apply a function for each node in the tree using DFS.
   * @param {Function} fn Callback function to apply for each node in the tree.
   */
  depthFSApplyFn(fn) {
    const stack = [this.root];
    while (stack.length > 0) {
      const node = stack.shift();
      stack.unshift(...node.children);
      fn(node);
    }
  }
} // End class Tree

module.exports = {
  Node,
  Tree
};
