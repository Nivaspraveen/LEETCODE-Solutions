/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0, twos = 0;
    for(let num of nums) {
        twos |= ones & num;
        ones ^= num;

        let commonMask = ~(ones & twos);
        ones &= commonMask;
        twos &= commonMask;
    }
    return ones;
};