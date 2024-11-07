/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let xorRes = start ^ goal, count = 0;
    do {
        count += xorRes & 1;
        xorRes >>= 1;
    } while (xorRes > 0);
    return count;
};