const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

function fitsInOneBox(boxes) {
  boxes.sort((boxA, boxB) => {
    return Object.values(boxA)[0] - Object.values(boxB)[0];
  });

  for (let idx = 0; idx < boxes.length - 1; idx++) {
    const { l, w, h } = boxes[idx];
    const { l2, w2, h2 } = boxes[idx + 1];
    if (l >= l2 || w >= w2 || h >= h2) return false;
  }

  return true;
}

console.log('🚀 ~ file: test.js:24 ~ fitsInOneBox', fitsInOneBox(boxes));
