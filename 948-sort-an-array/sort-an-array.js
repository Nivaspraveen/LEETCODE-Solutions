/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const pos = nums.filter(num => num >= 0), neg = nums.filter(num => num < 0).map(num => -num);
    const sortedPos = radix(pos), sortedNeg = radix(neg).reverse();
    return sortedNeg.map(num => -num).concat(sortedPos);
};

var radix = function(nums) {
    const maxNum = Math.max(...nums);
    let exp = 1;
    while (Math.floor(maxNum / exp) > 0) {
        countSortByDigit(nums, exp);
        exp *= 10;
    }
    return nums;
}

var countSortByDigit = function(nums, exp) {
    const result = Array(nums.length).fill(0), count = Array(10).fill(0);
    for (let num of nums) {
        const digit = Math.floor((num / exp) % 10);
        count[digit]++;
    }
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = nums.length - 1; i >= 0; i--) {
        const digit = Math.floor((nums[i] / exp) % 10);
        result[count[digit] -1] = nums[i];
        count[digit]--;
    }
    for (let i = 0; i < nums.length; i++) nums[i] = result[i];
}