/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    const n = nums.length, result = new Array(n);
    let xorSum = 0;
    for (let num of nums) xorSum ^= num;
    const maxVal = (1 << maximumBit) - 1;
    for (let i = 0; i < n; i++) {
        result[i] = maxVal ^ xorSum;
        xorSum ^= nums[n - 1 - i];
    }
    return result;
};