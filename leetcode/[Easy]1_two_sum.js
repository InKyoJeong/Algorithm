// 1. Two Sum
// Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2)
const twoSum = function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 다른 풀이 Hash O(n)
const twoSum = function twoSum(nums, target) {
  let sH = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    sH.set(nums[i], i);
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] + sH.get(target - nums[i]) && i !== sH.get(target - nums[i])) {
      return [i, sH.get(target - nums[i])];
    }
  }
};
