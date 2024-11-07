/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+';
    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >=0 && newRow < m && newCol >= 0 && newCol < n && maze[newRow][newCol] === '.') {
                if (newRow === 0 || newRow === m - 1 || newCol === 0 || newCol === n - 1) return steps + 1;
                maze[newRow][newCol] = '+';
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }
    return -1;
};