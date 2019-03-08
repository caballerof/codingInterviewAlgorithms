const { Node, Tree } = require('./tree');

describe('Node tests', () => {
  test('Node has a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Node has a data and children properties', () => {
    const n = new Node('a');
    expect(n.data).toEqual('a');
    expect(n.children.length).toEqual(0);
  });

  test('Node can add children', () => {
    const node = new Node('a');
    node.add('b');
    expect(node.children.length).toEqual(1);
    expect(node.children[0].children).toEqual([]);
  });

  test('Node can remove children', () => {
    const node = new Node('a');
    node.add('b');
    expect(node.children.length).toEqual(1);
    node.remove('b');
    expect(node.children.length).toEqual(0);
  });
});

describe('Tree tests', () => {
  test('Tree is empty', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });
});
