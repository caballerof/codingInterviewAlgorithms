class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    const node = new Node(value);
    const nodes = [this.root];

    while (nodes.length > 0) {
      const currentNode = nodes.pop();

      if (node.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
        } else {
          nodes.push(currentNode.left);
        }
      } else if (node.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
        } else {
          nodes.push(currentNode.right);
        }
      }
    }

    return this;
  } // End insert
}

module.exports = {
  Node,
  BinarySearchTree,
};
