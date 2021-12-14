// https://leetcode-cn.com/problems/binary-search/


var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = left +((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1
};
