/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length, deque = [];
    let prefixSum = 0, minLength = Infinity;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        if (prefixSum >= k) minLength = Math.min(minLength, i + 1);
        while (deque.length > 0 && prefixSum - deque[0][0] >= k) {
            const [prevSum, idx] = deque.shift();
            minLength = Math.min(minLength, i - idx);
        }
        while (deque.length > 0 && deque[deque.length - 1][0] >= prefixSum) deque.pop();
        deque.push([prefixSum, i]);
    }
    return minLength === Infinity ? -1 : minLength;
};