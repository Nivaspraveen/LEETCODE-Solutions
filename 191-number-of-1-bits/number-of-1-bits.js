/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    do {
        count += n & 1;
        n >>>= 1;
    } while (n !== 0);
    return count;
};