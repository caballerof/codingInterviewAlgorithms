/**
 * Binary search
 *
 * @param {number[]} nums `Array` to in which find the `val`.
 * @param {number} target `Number` to find on the `Array`.
 * * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (target > nums[right] || target < nums[left]) return -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 48, 54];

console.log(binarySearch(test1, 54));
