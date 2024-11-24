/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    const n = matrix.length;
    let totalSum = 0, minAbsValue = Infinity, negativeCount = 0;
    for (i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const value = matrix[i][j];
            totalSum += Math.abs(value);
            minAbsValue = Math.min(minAbsValue, Math.abs(value));
            if (value < 0) negativeCount++;
        }
    }
    if (negativeCount % 2 !== 0) totalSum -= 2 * minAbsValue;
    return totalSum;
};