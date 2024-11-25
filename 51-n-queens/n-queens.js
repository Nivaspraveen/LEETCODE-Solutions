/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [], board = Array.from({ length: n }, () => '.'.repeat(n)),
        cols = new Set(), majorDiagonals = new Set(), minorDiagonals = new Set();
    const backtrack = row => {
        if (row === n) {
            result.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || majorDiagonals.has(row - col) || minorDiagonals.has(row + col)) continue;
            cols.add(col);
            majorDiagonals.add(row - col);
            minorDiagonals.add(row + col);
            board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
            backtrack(row + 1);
            cols.delete(col);
            majorDiagonals.delete(row - col);
            minorDiagonals.delete(row + col);
            board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1); 
        }
    };
    backtrack(0);
    return result;
};