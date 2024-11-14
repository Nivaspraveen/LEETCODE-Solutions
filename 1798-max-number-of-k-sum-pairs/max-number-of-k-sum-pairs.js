/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map();
    let operations = 0;
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
    for (let [num, count] of map.entries()) {
        let complement = k - num;
        if (num === complement) operations += Math.floor(count / 2);
        else if (map.has(complement)) {
            let minCount = Math.min(count, map.get(complement));
            operations += minCount;
            map.set(num, count - minCount);
            map.set(complement, map.get(complement) - minCount);
        }
    }
    return operations;
};