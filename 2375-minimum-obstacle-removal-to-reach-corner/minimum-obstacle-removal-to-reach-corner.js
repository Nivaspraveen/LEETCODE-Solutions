/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    const m = grid.length, n = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

    // Min-heap priority queue
    const pq = new MinPriorityQueue({ priority: x => x[2] });
    pq.enqueue([0, 0, 0]); // [row, col, obstacles_removed]

    // Visited array initialized to Infinity
    const visited = Array.from({ length: m }, () => Array(n).fill(Infinity));
    visited[0][0] = 0; // Starting point, no obstacles removed

    while (!pq.isEmpty()) {
        const [x, y, obstacles] = pq.dequeue().element;

        // If we reached the bottom-right corner, return the result
        if (x === m - 1 && y === n - 1) return obstacles;

        // Explore neighbors
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;

            // Check bounds
            if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                const newObstacles = obstacles + grid[nx][ny];

                // If we find a path with fewer obstacles to this cell
                if (newObstacles < visited[nx][ny]) {
                    visited[nx][ny] = newObstacles;
                    pq.enqueue([nx, ny, newObstacles]);
                }
            }
        }
    }

    // If no path found (shouldn't happen due to constraints), return -1
    return -1;
};