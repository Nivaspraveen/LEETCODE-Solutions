/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
   let windowSum = nums.slice(0, k).reduce((acc, num) => acc + num, 0), maxSum = windowSum;
   for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
   } 
   return maxSum / k;
};