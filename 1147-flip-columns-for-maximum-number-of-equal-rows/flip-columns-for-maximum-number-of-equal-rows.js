/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const patCount = new Map();
    for (let row of matrix) {
        let pattern = row.map(c => c === row[0] ? 0 : 1).join(',');
        patCount.set(pattern, (patCount.get(pattern) || 0) + 1);
    }
    let maxRows = 0;
    for (let count of patCount.values()) maxRows = Math.max(maxRows, count);
    return maxRows;
};