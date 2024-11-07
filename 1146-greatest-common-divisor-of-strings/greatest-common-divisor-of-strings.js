/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const len1 = str1.length;
    const len2 = str2.length;
    const gcdLength = gcd(len1, len2);
    const candidate = str1.substring(0, gcdLength);
    const divides = (s, t) => s === t.repeat(s.length / t.length);
    if (divides(str1, candidate) && divides(str2, candidate)) return candidate;
    return '';
};