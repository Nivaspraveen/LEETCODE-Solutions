/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const graph = Array.from({ length: n }, () => []), result = [];
    for (let i = 0; i < n - 1; i++) graph[i].push(i + 1);

    const bfs = () => {
        const visited = new Array(n).fill(false), queue = [[0, 0]];
        visited[0] = true;
        while (queue.length > 0) {
            const [node, dist] = queue.shift();
            if (node === n - 1) return dist;
            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, dist + 1]);
                }
            }
        }
        return Infinity;
    };
    for (const [u, v] of queries) {
        graph[u].push(v);
        result.push(bfs());
    }
    return result;
};