'use strict';

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

  breadthFirstSearch() {
    let listNodes = [];
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      listNodes.push(node.data);
      for (const n of node.children) {
        queue.push(n);
      }
    }
    return listNodes;
  }

  depthFirstSearch() {}
} // End class Tree

const tree = new Tree();
const node = new Node('20');
tree.root = node;
node.add(0);
node.add(40);
node.add(-15);
node.children[0].add(12);
node.children[0].add(-2);
node.children[0].add(1);
node.children[2].add(-2);

console.log(tree.breadthFirstSearch());

module.exports = {
  Node,
  Tree
};
