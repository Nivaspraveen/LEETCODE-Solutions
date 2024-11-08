/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCount = new Map();
    for (let c of s) charCount.set(c, (charCount.get(c) ||0) + 1);
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) return i;
    }
    return -1;
};