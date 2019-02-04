'use strict';
/**
 * @author Reivaj Caballero
 * @description Write a function that accepts an integer N
 * and returns a NxN spiral matrix.
 *
 * matrix(2)
 * [[ 1, 2],
 * [ 4, 3]]
 *
 * matrix(3)
 * [ [ 1, 2, 3 ],
 * [ 8, 9, 4 ],
 * [ 7, 6, 5 ] ]
 *
 * matrix(4)
 * [ [ 1, 2, 3, 4 ],
 * [ 12, 13, 14, 5 ],
 * [ 11, 16, 15, 6 ],
 * [ 10, 9, 8, 7 ] ]
 */

//console.log(spiralMatrix(4));
console.log(matrixO(4));

/**
 *
 * @param {*} size
 */
function matrixO(size) {
  const results = [];
  let counter = 1;
  let startColumn = 0;
  let startRow = 0;
  let endColumn = size - 1;
  let endRow = size - 1;

  for (let i = 0; i < size; i++) {
    results.push([]);
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let j = startRow; j <= endRow; j++) {
      results[j][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // star column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
} // End matrixO

/**
 *
 * @param {*} size
 */
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
  return matrix;
} // End spiralMatrix

module.exports = {
  matrix,
  matrixO
};
