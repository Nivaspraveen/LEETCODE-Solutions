/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    const directions = [[-1, 1],[0, 1],[1, 1]];

    let maxMovesOverall = 0;
    for (let row = 0; row < m; row++)  maxMovesOverall = Math.max(maxMovesOverall, dfs(row, 0));
    return maxMovesOverall;

    function dfs(row, col) {
        if (col === n - 1) return 0;
        if (dp[row][col] !== 0) return dp[row][col];
        let maxMovesFromCurrent = 0;
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < m && newCol < n && grid[newRow][newCol] > grid[row][col]) {
                maxMovesFromCurrent = Math.max(maxMovesFromCurrent, dfs(newRow, newCol) + 1);
            }
        }
        dp[row][col] = maxMovesFromCurrent;
        return maxMovesFromCurrent;
    }
};

