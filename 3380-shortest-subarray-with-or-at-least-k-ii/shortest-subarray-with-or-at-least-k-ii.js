/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    const n = nums.length, bitCount = new Array(32).fill(0);
    let minLength = n + 1, start = 0, currOr = 0;
    for (let end = 0; end < n; ++end) {
        currOr |= nums[end];
        for (let bit = 0; bit < 32; ++bit) {
            if ((nums[end] >> bit) & 1) bitCount[bit]++;
        }
        while (currOr >= k && start <= end) {
            minLength = Math.min(minLength, end - start + 1);
            for (let bit = 0; bit < 32; ++bit) {
                if ((nums[start] >> bit) & 1) {
                    bitCount[bit]--;
                    if (bitCount[bit] === 0) currOr ^= (1 << bit);
                }
            }
            start++;
        }
    }
    return minLength === n + 1 ? -1 : minLength;
};