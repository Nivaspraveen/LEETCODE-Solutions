/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    const cols = new Set(), majorDiagonals = new Set(), minorDiagonals = new Set();
    const nQueens = row => {
        if (row === n) {
            count++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || majorDiagonals.has(row - col) || minorDiagonals.has(row + col)) continue;
            cols.add(col);
            majorDiagonals.add(row - col);
            minorDiagonals.add(row + col);
            nQueens(row + 1);
            cols.delete(col);
            majorDiagonals.delete(row - col);
            minorDiagonals.delete(row + col);
        }
    }
    nQueens(0);
    return count;
};