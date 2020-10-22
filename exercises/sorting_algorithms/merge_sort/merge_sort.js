function mergeSort(arr) {
  // base case
  if (arr.length === 1) return arr;

  // recursive step
  const middle = Math.floor(arr.length / 2);

  const mid1 = arr.slice(0, middle);
  const mid2 = arr.slice(middle);

  return mergeArr(mergeSort(mid1), mergeSort(mid2) );
}

function mergeArr(arr1, arr2) {
    let mergedArr = [];
    lArr1 = 0;
    lArr2 = 0;
    
    while (lArr1 < arr1.length && lArr2 < arr2.length) {
      if (arr1[lArr1] < arr2[lArr2]) {
        mergedArr.push(arr1[lArr1]);
        lArr1 += 1;
      } else {
        mergedArr.push(arr2[lArr2]);
        lArr2 += 1;
      }
    }
    
    while (lArr1 < arr1.length) {
      mergedArr.push(arr1[lArr1]);
      lArr1 += 1;
    }
    
    while (lArr2 < arr2.length) {
      mergedArr.push(arr2[lArr2]);
      lArr2 += 1;
    }
    
    return mergedArr;
  }
  
  const arr1 = [1, 2, 5, 9, 12, 34, 100];
  const arr2 = [3, 6, 10, 1, 2, 5, 9, 12, 34, 100, 234, 345, 567, 678];
  
  console.log('Result: ');
  console.log(mergeSort(arr2));