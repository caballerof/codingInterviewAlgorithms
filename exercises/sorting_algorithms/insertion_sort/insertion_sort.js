/**
 * Insertion sort algorithm
 * @param {*} arr 
 */
function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    const currentValue = arr[x];
    let y = x - 1;
      
    while (y >= 0 && currentValue < arr[y]) {
      arr[y + 1] = arr[y];
      y -= 1;
    }
      
    arr[y + 1] = currentValue;
  }
    
  return arr;
}
  
  const arr = [8, 7, 6, 45, 1, 789, 6, 0, -1]
  
  console.log('Result:  ');
  console.log(insertionSort(arr));
  