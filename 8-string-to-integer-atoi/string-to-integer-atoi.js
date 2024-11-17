/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, n = s.length, sign = 1, result = 0;
    while (i < n && s[i] === ' ') i++;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        result = result * 10 + digit;
        if (result * sign > 2147483647) return 2147483647;
        if (result * sign < -2147483648) return -2147483648;
        i++;
    }
    return result * sign;
};