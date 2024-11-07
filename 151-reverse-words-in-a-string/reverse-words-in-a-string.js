/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = [];
    let currWord = '';
    for (i = 0; i < s.length; i++) {
        if (s[i] !== ' ') currWord += s[i];
        else if (currWord.length > 0) {
            words.push(currWord);
            currWord = '';
        }
    }
    if (currWord.length > 0) words.push(currWord);

    let result = '';
    for (let j = words.length - 1; j >= 0; j--) {
        result += words[j];
        if (j > 0) result += ' ';
    }
    return result;
};