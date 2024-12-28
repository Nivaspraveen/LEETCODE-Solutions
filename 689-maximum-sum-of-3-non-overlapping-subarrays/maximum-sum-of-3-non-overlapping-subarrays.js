/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length, sum = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i];

    const left = Array(n).fill(0);
    let maxLeft = 0;
    for (let i = k - 1; i < n; i++) {
        const currSum = sum[i + 1] - sum[i + 1 - k];
        if (currSum > sum[maxLeft + k] - sum[maxLeft]) maxLeft = i + 1 - k;
        left[i] = maxLeft;
    }

    const right = Array(n).fill(0);
    let maxRight = n - k;
    for (let i = n - k; i >= 0; i--) {
        const currSum = sum[i + k] - sum[i];
        if (currSum >= sum[maxRight + k] - sum[maxRight]) maxRight = i;
        right[i] = maxRight;
    }

    let maxSum = 0;
    const result = [-1, -1, -1];
    for (let mid = k; mid <= n - 2 * k; mid++) {
        const l = left[mid - 1], r = right[mid + k];
        const totalSum = (sum[l + k] - sum[l]) + (sum[mid + k] - sum[mid]) + (sum[r + k] - sum[r]);
        
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result[0] = l;
            result[1] = mid;
            result[2] = r
        }
    }
    return result;
};