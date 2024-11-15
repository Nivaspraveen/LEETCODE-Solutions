/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = new Map();
    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }
    for (const [key, neighbors] of graph.entries()) neighbors.sort();
    const result = [];
    const dfs = node => {
        const neighbors = graph.get(node) || [];
        while (neighbors.length > 0) dfs(neighbors.shift());
        result.push(node);
    };
    dfs('JFK');
    return result.reverse();
};