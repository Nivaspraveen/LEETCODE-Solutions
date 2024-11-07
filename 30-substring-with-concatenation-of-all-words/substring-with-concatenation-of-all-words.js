/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    if (!s || words.length === 0) return result;

    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;

    const wordMap = new Map();
    for (const word of words) wordMap.set(word, (wordMap.get(word) || 0) + 1);

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = new Map();
        let j = 0;

        while (j < wordCount) {
            const wordIndex = i + j * wordLength;
            const word = s.substr(wordIndex, wordLength);
            if (!wordMap.has(word)) break;
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordMap.get(word)) break;
            j++;
        }
        if (j === wordCount) result.push(i);
    }
    return result;
};