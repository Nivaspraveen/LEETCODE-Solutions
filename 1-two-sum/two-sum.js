/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const cmp = target - nums[i];
        if(numMap.has(cmp)) return [numMap.get(cmp), i];
        numMap.set(nums[i], i);
    }
};