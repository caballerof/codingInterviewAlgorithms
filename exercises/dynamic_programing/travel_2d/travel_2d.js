/**
 * You are a traveler on a 2d grid. 
 * You begin in the top-left corner and your goal is to travel to the bottom-rigth corner.
 * You only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions row * col
 * 
 * Write a function 'gridTraveler(row, col)' that calculates this.
 */
const gridTraveler = (row, col, store = {}) => {
  const key = `${row},${col}`;  

  if (key in store) return store[key];

  if (row === 0 || col === 0) return 0;
  if (row === 1 && col === 1 ) return 1;

  store[key] =  gridTraveler(row - 1, col, store) + gridTraveler(row, col - 1, store);

  return store[key];
};

console.log(gridTraveler(1, 1)); // result: 1
console.log(gridTraveler(2, 3)); // result: 3
console.log(gridTraveler(3, 2)); // result: 3
console.log(gridTraveler(3, 3)); // result: 6
console.log(gridTraveler(18, 18)); // result: 2333606220
