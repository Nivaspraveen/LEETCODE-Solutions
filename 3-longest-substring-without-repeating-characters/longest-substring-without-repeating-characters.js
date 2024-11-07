/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charIndexMap = {};
    let left = 0, maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        const currChar = s[right];
        if (charIndexMap[currChar] !== undefined && charIndexMap[currChar] >= left) left = charIndexMap[currChar] + 1;
        charIndexMap[currChar] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};