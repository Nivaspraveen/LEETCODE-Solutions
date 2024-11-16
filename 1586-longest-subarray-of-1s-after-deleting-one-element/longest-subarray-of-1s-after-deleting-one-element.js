/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, zeroCount = 0, maxLength = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;
        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength - 1;
};