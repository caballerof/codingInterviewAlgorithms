const { Node, Tree } = require('./tree');

// Example usage
const root = new Node('Root');
const tree = new Tree(root);

root.add('Child 1');
// root.add('Child 2');
root.add('Child 3');

root.children[0].add('Child 1.1');
root.children[0].add('Child 1.2');
// root.children[1].add('Child 2.1');
root.children[1].add('Child 3.1');
root.children[1].add('Child 3.2');

root.children[0].children[0].add('Child 1.1.1');
root.children[1].children[1].add('Child 3.2.1');

const result = tree.dfsInOrderIterative(root);
console.log(result);
