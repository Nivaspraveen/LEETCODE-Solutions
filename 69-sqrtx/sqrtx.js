/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, mid;
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        mid * mid <= x ? left = mid + 1 : right = mid - 1;
    }
    return right;
};