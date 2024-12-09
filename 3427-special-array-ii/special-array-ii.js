/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const n = nums.length, prefixSum = new Array(n).fill(0), result = [];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1];
        if (nums[i] % 2 === nums[i - 1] % 2) prefixSum[i]++;
    }
    for (const query of queries) {
        const [start, end] = query;
        const falseCount = prefixSum[end] - (start > 0 ? prefixSum[start] : 0);
        result.push(falseCount && start !== end ? false : true)
    }
    return result;    
};