/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const iMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(iMap.has(nums[i])) {
            const lastIndex = iMap.get(nums[i]);
            if(i - lastIndex <= k) return true;
        }
        iMap.set(nums[i], i);
    }
    return false;
};