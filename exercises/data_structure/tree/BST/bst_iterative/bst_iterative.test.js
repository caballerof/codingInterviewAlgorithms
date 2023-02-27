const { Node, BinarySearchTree } = require('./bstIterative');

describe('Node class constructor', () => {
  test('Node has a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Constructor initial values', () => {
    const node = new Node(5);

    expect(node.value).toEqual(5);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('BinarySearchTree', () => {
  test('BST has a constructor', () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
  });

  test('Insert element to the root', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.root.value).toEqual(10);
    expect(bst.root.left.value).toEqual(5);
    expect(bst.root.right.value).toEqual(15);
  });

  test('Insert element second level', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(5);
    bst.insert(13);
    bst.insert(2);
    bst.insert(7);
    bst.insert(11);
    bst.insert(16);

    const root = bst.root;
    const firstLeft = root.left;
    const firstRight = root.right;
    const secondLeftL = firstLeft.left;
    const secondLeftR = firstLeft.right;
    const secondRightL = firstRight.left;
    const secondRightR = firstRight.right;

    expect(root.value).toEqual(10);

    expect(firstLeft.value).toEqual(5);
    expect(firstRight.value).toEqual(13);

    expect(secondLeftL.value).toEqual(2);
    expect(secondLeftR.value).toEqual(7);

    expect(secondRightL.value).toEqual(11);
    expect(secondRightR.value).toEqual(16);
  });
});
