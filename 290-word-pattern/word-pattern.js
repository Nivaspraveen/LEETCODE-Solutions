/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if(pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        const charMapped = charToWord.get(char);
        const wordMapped = wordToChar.get(word);

        if((charMapped && charMapped !== word) || (wordMapped && wordMapped !== char)) return false;
        charMapped ? charMapped : charToWord.set(char, word);
        wordMapped ? wordMapped : wordToChar.set(word, char);
    }
    return true;
};