/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    const freq1 = Array(26).fill(0), freq2 = Array(26).fill(0);
    for (let char of word1) freq1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for (let char of word2) freq2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0) !== (freq2[i] === 0)) return false;
    }
    return freq1.sort((a, b) => a - b).join('') === freq2.sort((a, b) => a -b).join('');
};