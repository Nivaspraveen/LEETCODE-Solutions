/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const prefixSum = new Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        const word = words[i], 
            startsWithVowel = vowels.has(word[0]),
            endsWithVowel = vowels.has(word[word.length - 1]);
        prefixSum[i + 1] = prefixSum[i] + (startsWithVowel && endsWithVowel ? 1 : 0);
    }
    const result = [];
    for (const [l, r] of queries) result.push(prefixSum[r + 1] - prefixSum[l]);
    return result;
};