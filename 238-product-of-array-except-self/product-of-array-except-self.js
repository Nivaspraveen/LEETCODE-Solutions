/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);
    let prefix = 1, suffix = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = n - 1; i >=0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }
    return ans;
};