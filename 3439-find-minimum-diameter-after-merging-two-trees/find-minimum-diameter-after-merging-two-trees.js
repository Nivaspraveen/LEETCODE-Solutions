/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    const calculateDiameter = (n, edges) => {
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const bfs = start => {
            const dist = Array(n).fill(-1), queue = [start];
            dist[start] = 0;
            let farNode = start;
            while (queue.length > 0) {
                const node = queue.shift();
                for (const neighbor of adj[node]) {
                    if (dist[neighbor] === -1) {
                        dist[neighbor] = dist[node] + 1;
                        queue.push(neighbor);
                        if (dist[neighbor] > dist[farNode]) farNode = neighbor;
                    }
                }
            }
            return [farNode, dist[farNode]];
        };
        const [far1] = bfs(0), [, diameter] = bfs(far1);
        return diameter;
    };
    const n = edges1.length + 1, m = edges2.length + 1;
    const d1 = calculateDiameter(n, edges1), d2 = calculateDiameter(m, edges2);
    return Math.max(d1, d2, Math.floor((d1 + 1) / 2) + Math.floor((d2 + 1) / 2) + 1);
};