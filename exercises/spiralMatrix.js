console.log(spiralMatrix(6));

function spiralMatrix(size) {
  let numElements = size * size;
  const matrix = new Array(size).fill(`*`).map(() => new Array(size).fill(`*`));
  let direction = 0;
  let limit = size;
  let incrementRow = 0;
  let incrementCol = 0;
  let column = 0;
  let row = 0;
  let putElement = 1;
  for (let index = 1; index <= numElements; index++) {
    row += incrementRow;
    column += incrementCol;
    matrix[row][column] = index;
    putElement++;
    switch (direction) {
      case 0:
        if (putElement > limit) {
          direction = 1;
          incrementRow = 1;
          incrementCol = 0;
          putElement = 1;
          limit--;
        } else {
          incrementRow = 0;
          incrementCol = 1;
        }
        break;
      case 1:
        if (putElement > limit) {
          direction = 2;
          incrementRow = 0;
          incrementCol = -1;
          putElement = 1;
        } else {
          incrementRow = 1;
          incrementCol = 0;
        }
        break;
      case 2:
        if (putElement > limit) {
          direction = 3;
          incrementRow = -1;
          incrementCol = 0;
          putElement = 1;
          limit--;
        } else {
          incrementRow = 0;
          incrementCol = -1;
        }
        break;
      case 3:
        if (putElement > limit) {
          direction = 0;
          incrementRow = 0;
          incrementCol = 1;
          putElement = 1;
        } else {
          incrementRow = -1;
          incrementCol = 0;
        }
        break;
    }
  } // End for
  console.log(matrix);
} // End spiralMatrix
