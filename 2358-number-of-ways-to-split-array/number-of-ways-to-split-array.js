/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0),
        prefSum = 0, validCount = 0;
    for (let i = 0; i < n - 1; i++) {
        prefSum += nums[i];
        const remSum = totalSum - prefSum;
        if (prefSum >= remSum) validCount++;
    }
    return validCount;
};