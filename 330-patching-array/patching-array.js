/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let currSum = 0, patches = 0, index = 0;
    while (currSum < n) {
        if (index < nums.length && nums[index] <= currSum + 1) {
            currSum += nums[index];
            index++;
        } else {
            patches++;
            currSum += (currSum + 1);
        }
    }
    return patches;
};