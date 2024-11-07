/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const digits = num.toString().split('').map(Number);
    const last = new Array(10).fill(-1);
    for (let i = 0; i < digits.length; i++) {
        last[digits[i]] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        for (let j = 9; j > digits[i]; j--) {
            if (last[j] > i) {
                [digits[i], digits[last[j]]] = [digits[last[j]], digits[i]];
                return parseInt(digits.join(''), 10);
            }
        }
    }
    return num;
};