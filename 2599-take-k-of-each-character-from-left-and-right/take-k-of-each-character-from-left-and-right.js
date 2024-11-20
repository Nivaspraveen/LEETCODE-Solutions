/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    if (k === 0) return 0;
    const totalCount = {a: 0, b: 0, c: 0};
    for (const c of s) totalCount[c]++;
    if (totalCount['a'] < k || totalCount['b'] < k || totalCount['c'] < k) return -1;
    const n = s.length;
    let left = 0, maxWindowSize = 0;
    const windowCount = {a: 0, b: 0, c: 0};
    for (let right = 0; right < n; right++) {
        const c = s[right];
        windowCount[c] = (windowCount[c] || 0) + 1;
        while (totalCount['a'] - windowCount['a'] < k ||
            totalCount['b'] - windowCount['b'] < k ||
            totalCount['c'] - windowCount['c'] < k
        ) {
            windowCount[s[left]]--;
            left++;
        }
        maxWindowSize = Math.max(maxWindowSize, right - left + 1);
    }
    return n - maxWindowSize;
};