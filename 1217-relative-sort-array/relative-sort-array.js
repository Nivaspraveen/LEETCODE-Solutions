/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const freqMap = new Map();
    for (const num of arr1) freqMap.set(num, (freqMap.get(num) || 0) + 1);
    const result = [];
    for (const num of arr2) {
        if (freqMap.has(num)) {
            result.push(...Array(freqMap.get(num)).fill(num));
            freqMap.delete(num);
        }
    }
    const remEl = [];
    for (const [num, count] of freqMap) remEl.push(...Array(count).fill(num));
    remEl.sort((a, b) => a - b);
    result.push(...remEl);
    return result;
};