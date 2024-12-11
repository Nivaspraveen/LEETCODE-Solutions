/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);
    let maxBeauty = 0, i = 0;
    for (let j = 0; j < nums.length; j++) {
        while (nums[j] - nums[i] > 2 * k) i++;
        maxBeauty = Math.max(maxBeauty, j - i + 1);
    }
    return maxBeauty;
};