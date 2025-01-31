/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length, dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let islandID = 2;
    const islandSizes = new Map();

    const dfs = (i, j, id) => {
        if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = id;
        let size = 1;
        for (const [dx, dy] of dirs) size += dfs(i + dx, j + dy, id);
        return size;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let size = dfs(i, j, islandID);
                islandSizes.set(islandID, size);
                islandID++;
            }
        }
    }

    let maxSize = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const connectedIslands = new Set();
                let totalSize = 1;

                for (const [dx, dy] of dirs) {
                    const x = i + dx, y = j + dy;
                    if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] > 1) {
                        const island = grid[x][y];
                        if (!connectedIslands.has(island)) {
                            connectedIslands.add(island);
                            totalSize += islandSizes.get(island);
                        } 
                    }
                }
                maxSize = Math.max(maxSize, totalSize);
            }
        }
    }
    return maxSize === 0 ? n * n : maxSize;
};