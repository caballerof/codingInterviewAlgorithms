const { Node } = require('../tree/tree');

/**
 *
 * Given the root node of a tree, return
 * an array where each element is the width
 * of the tree at each level.
 * Example:
 * Given:
 *     0             ----> 1
 *   / |  \
 * 1   2   3         ----> 3
 * |       |
 * 4       5         ----> 2
 * Answer: [1, 3, 2]
 */

function levelWidthTree(root) {
  const finishLvl = new Node('#');
  const levelCount = [0];
  const queue = [root, finishLvl];
  while (queue.length > 1) {
    let node = queue.shift();
    if (node === finishLvl) {
      levelCount.push(0);
      queue.push(finishLvl);
    } else {
      levelCount[levelCount.length - 1]++;
      queue.push(...node.children);
    }
  }
  return levelCount;
}

module.exports = {
  levelWidthTree
};
