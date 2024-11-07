/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    for(let num of nums) maxOr |= num;

    let count = 0;
    for (let m = 1; m < (1 << nums.length); m++) {
        let currOr = 0;
        for(let i = 0; i < nums.length; i++) {
            if(m & (1 << i)) currOr |= nums[i];
        }
        if (currOr === maxOr) count++;
    }
    return count;
};