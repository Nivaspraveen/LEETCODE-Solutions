/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0) {
        x = 1/x;
        n = -n;
    }

    let result = 1;
    while (n > 0) {
        result *= (n % 2 === 1) ? x : 1;
        x *= x;
        n = Math.floor(n / 2);
    }
    return result;
};