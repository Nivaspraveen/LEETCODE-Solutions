/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let maxLength = -1;
    for (let i = 1; i <= s.length; i++) {
        const freq = new Map();
        for (let j = 0; j <= s.length - i; j++) {
            const subStr = s.slice(j, j + i);
            if (new Set(subStr).size === 1) freq.set(subStr, (freq.get(subStr) || 0) + 1);
        }
        for (const [subStr, count] of freq) {
            if (count >= 3) maxLength = i;
        }
    }
    return maxLength;
};