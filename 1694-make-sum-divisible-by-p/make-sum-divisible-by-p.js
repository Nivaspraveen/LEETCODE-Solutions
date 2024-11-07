/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const totSum = nums.reduce((sum, num) => sum + num, 0);
    const rem = totSum % p;
    if(rem === 0) return 0;
    const preMap = new Map();
    preMap.set(0, -1);
    let preSum = 0, minLen = nums.length;
    for(let i = 0; i < nums.length; i++) {
        preSum = (preSum + nums[i]) % p;
        const target = (preSum - rem + p) % p;
        if (preMap.has(target)) minLen = Math.min(minLen, i - preMap.get(target));
        preMap.set(preSum, i);
    }
    return minLen === nums.length ? -1 : minLen;
};