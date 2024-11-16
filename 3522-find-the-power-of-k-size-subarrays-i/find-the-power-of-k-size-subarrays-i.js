/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    const n = nums.length, result = [];
    for (let i = 0; i <= n - k; i++) {
        const subArr = nums.slice(i, i + k);
        let isValid = true;
        for (let j = 1; j < k; j++) {
            if (subArr[j] !== subArr[j - 1] + 1) {
                isValid = false;
                break;
            }
        }
        isValid ? result.push(subArr[k - 1]) : result.push(-1);
    }
    return result;
};