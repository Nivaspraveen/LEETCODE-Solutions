/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    const m = grid.length, n = grid[0].length,
        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        pq = new MinPriorityQueue({ priority: x => x[2] });
    pq.enqueue([0, 0, 0]); 

    const visited = Array.from({ length: m }, () => Array(n).fill(Infinity));
    visited[0][0] = 0; 

    while (!pq.isEmpty()) {
        const [x, y, obstacles] = pq.dequeue().element;
        if (x === m - 1 && y === n - 1) return obstacles;

        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                const newObstacles = obstacles + grid[nx][ny];
                if (newObstacles < visited[nx][ny]) {
                    visited[nx][ny] = newObstacles;
                    pq.enqueue([nx, ny, newObstacles]);
                }
            }
        }
    }
    return -1;
};