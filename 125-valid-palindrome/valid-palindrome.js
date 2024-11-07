/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const normalStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const revStr = normalStr.split('').reverse().join('');
    return normalStr === revStr;
};