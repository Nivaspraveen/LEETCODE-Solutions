/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    const bitCounts = new Array(24).fill(0);
    for (const can of candidates) {
        for (let i = 0; i < 24; i++) {
            if ((can & (1 << i)) !== 0) bitCounts[i]++;
        }
    }
    return Math.max(...bitCounts);
};