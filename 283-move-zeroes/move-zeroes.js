/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroPos] = nums[i];
            lastNonZeroPos++;
        }
    }
    for (let i = lastNonZeroPos; i < nums.length; i++) nums[i] = 0;
};