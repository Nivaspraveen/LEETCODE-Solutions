/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let maxSum = 0, currSum = 0, left = 0;
    const uniqueEl = new Set();
    for (let right = 0; right < nums.length; right++) {
        while (uniqueEl.has(nums[right])) {
            uniqueEl.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }
        uniqueEl.add(nums[right]);
        currSum += nums[right];
        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, currSum);
            uniqueEl.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }
    }
    return maxSum;
};