/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, second = Infinity;
    for (const num of nums) {
        if (num <= first) first = num;
        else if (num <= second) second = num;
        else return true;
    }
    return false;
};