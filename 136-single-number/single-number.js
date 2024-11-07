/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const uniqueSet = new Set(nums);
    const sumOfUnique = [...uniqueSet].reduce((acc, val) => acc + val, 0);
    const sumOfArr = nums.reduce((acc, val) => acc + val, 0);

    return 2 * sumOfUnique - sumOfArr;
};