/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const wordCount = {}, w1 = s1.split(' '), w2 = s2.split(' ');
    w1.forEach(w => wordCount[w] = (wordCount[w] || 0) + 1);
    w2.forEach(w => wordCount[w] = (wordCount[w] || 0) + 1);
    const uncommonWords = [];
    for (const w in wordCount) {
        if (wordCount[w] === 1) uncommonWords.push(w);
    }
    return uncommonWords
};