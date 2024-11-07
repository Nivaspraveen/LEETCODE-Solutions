/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let num of arr) {
        count = (num % 2 !== 0) ? count + 1 : 0;
        if (count === 3) return true;
    }
    return false;
};