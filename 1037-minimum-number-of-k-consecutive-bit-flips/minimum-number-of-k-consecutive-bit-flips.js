/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let n = nums.length, flips = 0, flipCount = new Array(n).fill(0), flip = 0;
    for (let i = 0; i < n; i++) {
        if (i >= k) flip ^= flipCount[i - k];
        if (nums[i] === flip) {
            if (i + k > n) return -1;
            flips++;
            flip ^= 1;
            flipCount[i] = 1;
        }
    }
    return flips;
};