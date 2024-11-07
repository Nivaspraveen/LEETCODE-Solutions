/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const effectiveTime = time % (2 * (n - 1));
    return effectiveTime < n ? effectiveTime + 1 : 2 * n - 1 - effectiveTime;
};