/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return '0';
    const len = (1 << n) - 1, mid = Math.floor(len / 2) + 1;

    if (k === mid) return '1';
    if (k < mid) return findKthBit(n - 1, k)
    else return findKthBit(n - 1, len - k + 1) === '1' ? '0' : '1';
};