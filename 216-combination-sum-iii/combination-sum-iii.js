/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const results = [];
    const backtrack = (start, comb, currSum) => {
        if (comb.length === k && currSum === n) {
            results.push([...comb]);
            return;
        }   
        if (comb.length >= k || currSum >= n) return;
        for (let i = start; i <= 9; i++) {
            comb.push(i);
            backtrack(i + 1, comb, currSum + i);
            comb.pop();
        }
    };
    backtrack(1, [], 0);
    return results;
};