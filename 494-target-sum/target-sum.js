/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const m = new Map();
    const backtrack = (idx, currSum) => {
        const key = `${idx},${currSum}`;
        if (m.has(key)) return m.get(key);
        if (idx === nums.length) return currSum === target ? 1 : 0;
        const add = backtrack(idx + 1, currSum + nums[idx]);
        const sub = backtrack(idx + 1, currSum - nums[idx]);
        m.set(key, add + sub);
        return add + sub;
    }
    return backtrack(0, 0);
};