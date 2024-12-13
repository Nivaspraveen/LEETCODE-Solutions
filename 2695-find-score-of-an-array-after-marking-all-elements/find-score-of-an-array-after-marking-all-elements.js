/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const marked = Array(nums.length).fill(false);
    let score = 0;
    const sortedNums = nums.map((val, idx) => ({val, idx})).sort((a, b) => (a.val === b.val ? a.idx - b.idx : a.val - b.val));
    for (const {val, idx} of sortedNums) {
        if (marked[idx]) continue;
        score += val;
        marked[idx] = true;
        if (idx > 0) marked[idx - 1] = true;
        if (idx < nums.length - 1) marked[idx + 1] = true;
    }
    return score;
};