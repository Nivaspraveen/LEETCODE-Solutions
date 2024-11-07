/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (i > 1 && s[i] === s[i - 1] && s[i] === s[i - 2]) continue;
        res += s[i];
    }
    return res;
};