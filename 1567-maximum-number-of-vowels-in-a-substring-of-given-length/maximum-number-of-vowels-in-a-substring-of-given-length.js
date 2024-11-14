/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0, currVowels = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) currVowels++;
    }
    maxVowels = currVowels;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) currVowels++;
        if (vowels.has(s[i - k])) currVowels--;
        maxVowels = Math.max(maxVowels, currVowels);
    }
    return maxVowels;
};