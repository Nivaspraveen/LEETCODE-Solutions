/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSum = [];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        runningSum.push(currSum);
    }
    return runningSum;
};