/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(' ');
    if (words.length === 1) return words[0][0] === words[0][words[0].length - 1];
    for (let i = 0; i < words.length; i++) {
        let currWord = words[i];
        let nextWord = words[(i + 1) % words.length];
        if (currWord[currWord.length - 1] !== nextWord[0]) return false;
    }
    return true;
};