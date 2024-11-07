/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [], currLine = [], numOfLetters = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (numOfLetters + word.length + currLine.length > maxWidth) {
            for (let j = 0; j < maxWidth - numOfLetters; j++) currLine[j % (currLine.length - 1 || 1)] += ' ';
            result.push(currLine.join(''));
            currLine = [];
            numOfLetters = 0;
        }
        currLine.push(word);
        numOfLetters += word.length;
    }
    result.push(currLine.join(' ') + ' '.repeat(maxWidth - (currLine.join(' ').length)));
    return result;
};