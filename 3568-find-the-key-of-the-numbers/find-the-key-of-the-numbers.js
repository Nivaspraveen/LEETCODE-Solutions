/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    const str1 = num1.toString().padStart(4, '0'),
        str2 = num2.toString().padStart(4, '0'),
        str3 = num3.toString().padStart(4, '0');
    
    let key = '';
    for (let i = 0; i < 4; i++) {
        const minDigit = Math.min(parseInt(str1[i]), parseInt(str2[i]), parseInt(str3[i]));
        key += minDigit;
    }
    return parseInt(key, 10);
};