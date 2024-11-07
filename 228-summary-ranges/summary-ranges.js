/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let range = [];

    for(let i = 0; i < nums.length; i++) {
        let start = i;
        while(i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        if(start === i) {
            range.push(nums[start].toString());
        } else {
            range.push(nums[start] + "->" + nums[i])
        }
    }
    return range;
};