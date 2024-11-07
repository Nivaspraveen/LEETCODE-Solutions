/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, currSum = 0, minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];
        while (currSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currSum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};