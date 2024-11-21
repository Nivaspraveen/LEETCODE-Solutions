/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const occupied = new Set(), guarded = new Set(), toKey = (x, y) => `${x},${y}`;
    for (const [x, y] of guards) occupied.add(toKey(x, y));
    for (const [x, y] of walls) occupied.add(toKey(x, y));
    for (const [x, y] of guards) {
        for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            let nx = x + dx, ny = y + dy;
            while (nx >= 0 && ny >= 0 && nx < m && ny < n && !occupied.has(toKey(nx, ny))) {
                guarded.add(toKey(nx, ny));
                nx += dx;
                ny += dy;
            }
        }
    }
    const totalCells = m * n, unoccupied = totalCells - occupied.size;
    return unoccupied - guarded.size;
};