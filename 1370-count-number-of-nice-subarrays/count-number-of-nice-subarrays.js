/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const atmostK = k => {
        let count = 0, left = 0, oddCount = 0;
        for (let right = 0; right < nums.length; right++) {
            if (nums[right] % 2 === 1) oddCount++;
            while (oddCount > k) {
                if (nums[left] % 2 === 1) oddCount--;
                left++;
            }
            count += right - left + 1;
        }
        return count;
    };
    return atmostK(k) - atmostK(k - 1);
};