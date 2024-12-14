/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let t = 0, l = 0;
    let max_d = [], min_d = [];

    for (let r = 0; r < nums.length; r++) {
        while (max_d.length && nums[max_d[max_d.length - 1]] <= nums[r]) max_d.pop();
        max_d.push(r);

        while (min_d.length && nums[min_d[min_d.length - 1]] >= nums[r]) min_d.pop();
        min_d.push(r);

        while (nums[max_d[0]] - nums[min_d[0]] > 2) {
            if (max_d[0] === l) max_d.shift();
            if (min_d[0] === l) min_d.shift();
            l++;
        }
        t += r - l + 1;
    }
    return t;
};