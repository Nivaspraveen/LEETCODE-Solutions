/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = '', i = 0;
    while (i < word.length) {
        let count = 1, char = word[i];
        while (i + count < word.length && word[i + count] === char && count < 9) count++;
        comp += count + char;
        i += count;
    }
    return comp;
};