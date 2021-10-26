var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2];
  nums.sort((a, b) => a - b);

  let mid = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    let mid2 = mid - 1;
    return (nums[mid] + nums[mid2]) / 2;
  } else {
    return nums[mid];
  }
};
