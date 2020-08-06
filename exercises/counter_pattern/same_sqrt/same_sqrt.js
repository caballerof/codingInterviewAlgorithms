/**
 * WWrite a function, which accepts tow arrays.
 * The function should return true if every value in the array (arr1) has it's corresponding 
 * value squared in the second array.
 * The frequency of values must be the same.
 * 
 * 0 < arr1 < 1000000 
 * 0 < arr2 < 1000000 
 * 
 * Examples:
 *    [1, 2, 3], [4, 1, 9] => true
 *    [1, 2, 3], [1, 9]    => false
 *    [1, 2, 1], [4, 4, 1] => false
 */


/*
* Time complexity O(n^2)
* Quadratic time
*/
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let x = 0; x < arr1.length; x++) {
    const index = arr2.indexOf(arr1[x] ** 2);
    
    if (index === -1) {
      return false;
    }
    
    arr2.splice(index, 1);
  }
  
  return true;
}

/*
* Time complexity: O(n^2)
* Quadratic time
*/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  let response = false;
  
  for (let x = 0; x < arr1.length; x++) {  
    response = false;
    
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[x] === Math.sqrt(arr2[y])) {
        arr2.splice(y, 1);
        
        response = true;
        break;
      }
    }
    
    if (!response) {
      return response;
    }
  }  
  
  return true;
}

/*
* Time complexity O(a + a) => O(2a) => O(a)
* Lineal time
*/
function sameBest(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  const hashSqrt = {};
  
  arr1.forEach(num => hashSqrt[num ** 2] = hashSqrt[num ** 2] + 1 || 1);
  
  for (let x = 0; x < arr2.length; x++) {    
    const num = arr2[x];
    
    if (num in hashSqrt && hashSqrt[num] > 0) {
      hashSqrt[num] -= 1;
    } else {
      return false;
    }
  }
  
  return true;  
}

/* /
const result1 = same([1, 2, 3], [4, 1, 9]);
const result2 = same([1, 2, 3], [1, 9]);
const result3 = same([1, 2, 1], [4, 4, 1]);

console.group('Same');
console.log('result 1: ' + result1);
console.log('result 2: ' + result2);
console.log('result 3: ' + result3);
console.groupEnd('Same');
// */


const result1Same2 = sameBest([1, 2, 3], [4, 1, 9]);
const result2Same2 = sameBest([1, 2, 3], [1, 9]);
const result3Same2 = sameBest([1, 2, 1], [4, 4, 1]);

console.group('sameBest ');
console.log('result 1: ' + result1Same2);
console.log('result 2: ' + result2Same2);
console.log('result 3: ' + result3Same2);
console.groupEnd('Same');
