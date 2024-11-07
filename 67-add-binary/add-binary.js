/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, carry = 0, result = "";

    while(i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? parseInt(a[i--]) : 0;
        const bitB = j >= 0 ? parseInt(b[j--]) : 0;

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }
    return result;
};