/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length;
    const left = Array(26).fill(0), right = Array(26).fill(0);
    for (const c of s) right[c.charCodeAt(0) - 97]++;
    const seen = new Set();
    for (let i = 0; i < n; i++) {
        const mid = s[i].charCodeAt(0) - 97;
        right[mid]--;
        for (let c = 0; c < 26; c++) {
            if (left[c] > 0 && right[c] > 0) {
                const palin = String.fromCharCode(c + 97) + s[i] + String.fromCharCode(c + 97);
                seen.add(palin);
            }
        }
        left[mid]++;
    }
    return seen.size;
};