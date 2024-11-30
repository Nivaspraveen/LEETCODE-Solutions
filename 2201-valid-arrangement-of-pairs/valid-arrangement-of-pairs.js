/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    const adj = new Map(), inDegree = new Map(), outDegree = new Map();
    for (const [start, end] of pairs) {
        if (!adj.has(start)) adj.set(start, []);
        adj.get(start).push(end);
        outDegree.set(start, (outDegree.get(start) || 0) + 1);
        inDegree.set(end, (inDegree.get(end) || 0) + 1);
    }
    let startNode = pairs[0][0];
    for (const [node, out] of outDegree) {
        const inDeg = inDegree.get(node) || 0;
        if (out > inDeg) {
            startNode = node;
            break;
        }
    }
    const stack = [startNode], path = [];
    while (stack.length) {
        const node = stack[stack.length - 1];
        if (adj.has(node) && adj.get(node).length > 0) stack.push(adj.get(node).pop());
        else path.push(stack.pop());
    }
    path.reverse();
    const result = [];
    for (let i = 0; i < path.length - 1; i++) result.push([path[i], path[i + 1]]);
    return result;
};