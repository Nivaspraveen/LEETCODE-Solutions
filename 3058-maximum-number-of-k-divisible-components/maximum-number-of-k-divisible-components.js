/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adjList = Array.from({ length: n}, () => []);
    for (const [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }
    const dfs = (node, parent) => {
        let sum = values[node];
        for (const neighbor of adjList[node]) {
            if (neighbor !== parent) sum += dfs(neighbor, node);
        }
        if (sum % k === 0) {
            components++;
            return 0;
        }
        return sum;
    }
    let components = 0;
    dfs(0, -1);
    return components;
};