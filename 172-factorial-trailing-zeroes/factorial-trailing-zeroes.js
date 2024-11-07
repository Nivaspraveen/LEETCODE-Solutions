/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0, fact = 5;
    while (n >= fact) {
        count += Math.floor(n / fact);
        fact *= 5;
    }
    return count;
};