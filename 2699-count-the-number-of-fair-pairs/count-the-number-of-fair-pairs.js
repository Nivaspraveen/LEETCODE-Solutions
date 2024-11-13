/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    let count = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        let start = i + 1, end = n - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[i] + nums[mid] >= lower) end = mid - 1;
            else start = mid + 1;
        }
        let leftBound = start;
        start = i + 1, end = n - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[i] + nums[mid] > upper) end = mid - 1;
            else start = mid + 1;
        }
        let rightBound = end;
        if (leftBound <= rightBound) count += rightBound - leftBound + 1;
    } 
    return count;
};