/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;

    let j = 2;
    for(let i = 2; i < nums.length; i++) {
        nums[i] !== nums[j - 2] ? nums[j++] = nums[i] : null;
    }
    return j;
};