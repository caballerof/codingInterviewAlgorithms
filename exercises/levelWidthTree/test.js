const { levelWidthTree } = require('./levelWidthTree');
const { Node } = require('../tree/tree');

test('levelWidthTree is a function', () => {
  expect(typeof levelWidthTree).toEqual('function');
});

test('levelWidthTree returns number of nodes at widest point', () => {
  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  expect(levelWidthTree(root)).toEqual([1, 3, 2]);
});

test('levelWidthTree returns number of nodes at widest point', () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  expect(levelWidthTree(root)).toEqual([1, 1, 2, 1]);
});
