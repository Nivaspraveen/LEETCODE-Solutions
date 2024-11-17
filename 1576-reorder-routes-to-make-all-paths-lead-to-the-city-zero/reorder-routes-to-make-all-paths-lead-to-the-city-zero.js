/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = new Map();
    for (const [a, b] of connections) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push([b, 1]);
        graph.get(b).push([a, 0]);
    }
    let res = 0, visited = new Set();
    const dfs = city => {
        visited.add(city);
        for (const [neighbor, rev] of graph.get(city)) {
            if (!visited.has(neighbor)) {
                if (rev) res++;
                dfs(neighbor);
            }
        }
    };
    dfs(0);
    return res;
};