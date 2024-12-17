/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let minIdx = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) minIdx = j;
        }
        nums[minIdx] *= multiplier;
    }
    return nums;
};