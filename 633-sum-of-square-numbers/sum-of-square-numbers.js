/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    while (a <= b) {
        let sumOfSquares = a * a + b * b;
        if (sumOfSquares === c) return true;
        sumOfSquares < c ? a++ : b--;
    }
    return false;
};