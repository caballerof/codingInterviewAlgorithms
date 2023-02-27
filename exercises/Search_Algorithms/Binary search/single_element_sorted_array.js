/**
 * Find the unique element in a sorted array
 * It should be on O(lon n) time
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === nums[middle - 1]) {
      if ((middle - left - 1) % 2 === 0) {
        left = middle + 1;
      } else {
        right = middle - 2;
      }
    } else if (nums[middle] === nums[middle + 1]) {
      if ((right - middle - 1) % 2 === 0) {
        right = middle - 1;
      } else {
        left = middle + 2;
      }
    } else {
      return nums[middle];
    }
  }

  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
