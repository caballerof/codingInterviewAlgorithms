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

  test('Can traverse BF', () => {
    const nodes = [];
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
    nodes.push(...tree.breadthFirstSearch());
    expect(nodes).toEqual(['20', 0, 40, -15, 12, -2, 1, -2]);
  });

  test('Can traverse BF applying a function for each node', () => {
    const nodes = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.bfsApplyFn(node => {
      nodes.push(node.data);
    });

    expect(nodes).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF', () => {
    let nodes = [];
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
    nodes = tree.depthFirstSearch();
    expect(nodes).toEqual(['20', 0, 12, -2, 1, 40, -15, -2]);
  });

  test('Can traverse DF applying a function for each node', () => {
    let nodes = [];
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

    tree.depthFSApplyFn(node => {
      nodes.push(node.data);
    });

    expect(nodes).toEqual(['20', 0, 12, -2, 1, 40, -15, -2]);
  });
});
