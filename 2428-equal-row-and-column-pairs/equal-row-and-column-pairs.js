/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length, rowMap = new Map();
    for (let i = 0; i < n; i++) {
        const row = grid[i].join(',');
        rowMap.set(row, (rowMap.get(row) || 0) + 1);
    }
    let result = 0;
    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < n; i++) col.push(grid[i][j]);
        const colKey = col.join(',');
        if (rowMap.has(colKey)) result += rowMap.get(colKey);
    }
    return result;
};