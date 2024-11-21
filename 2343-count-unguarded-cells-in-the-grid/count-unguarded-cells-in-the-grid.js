/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = Array.from({length: m}, () => Array(n).fill(0)), guarded = 1, occupied = 2;
    for (const [x, y] of guards) grid[x][y] = occupied;
    for (const [x, y] of walls) grid[x][y] = occupied;
    for (const [x, y] of guards) {
        for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            let nx = x + dx, ny = y + dy;
            while (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] !== occupied) {
                if (grid[nx][ny] === 0) grid[nx][ny] = guarded;
                nx += dx;
                ny += dy;
            }
        }
    }
    let unguarded = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) unguarded++;
        }
    }
    return unguarded;
};