/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freqMap = new Map();
    for (const num of nums) freqMap.set(num, (freqMap.get(num) || 0) + 1);
    return nums.sort((a, b) => {
        const freqA = freqMap.get(a);
        const freqB = freqMap.get(b);
        if (freqA !== freqB) return freqA - freqB;
        return b - a;
    });
};