/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, currEnd = 0, far = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        far = Math.max(far, i + nums[i]);
        if (i === currEnd) {
            jumps++;
            currEnd = far;
            if (currEnd >= nums.length - 1) break;
        }
    }
    return jumps;
};