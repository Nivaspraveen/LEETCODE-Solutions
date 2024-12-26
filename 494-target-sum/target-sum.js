/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if ((totalSum + target) % 2 !== 0 || totalSum < Math.abs(target)) return 0;
    const subsetSum = (totalSum + target) / 2;
    const dp = new Array(subsetSum + 1).fill(0);
    dp[0] = 1;
    for (const num of nums) {
        for (let sum = subsetSum; sum >= num; sum--) dp[sum] += dp[sum - num];
    }
    return dp[subsetSum];
};