/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    if (str2.length > str1.length) return false;
    let i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        let diff = (str2[j].charCodeAt(0) - str1[i].charCodeAt(0) + 26) % 26;
        if (diff === 0 || diff <= 1) j++;
        i++
    }
    return j === str2.length;
};