/**
 * Selection sort algorithm.
 *  
 * @param {Array} arr 
 */
function selectionSort(arr) {
    for (let x = 0; x < arr.length; x++) {
      let lowest = x;
          
      for (let y = x + 1; y < arr.length; y++) {
        if (arr[y] < arr[lowest]) {
          lowest = y;
        }
      }
      
      if (x !== lowest) {
        const temp = arr[x];
        arr[x] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    
    return arr;
}
 
const arr = [34, 5, 2, 8, 9, 23, 1, 6];
  
console.log(selectionSort(arr));
