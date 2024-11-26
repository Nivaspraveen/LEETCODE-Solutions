/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const inDeg = new Array(n).fill(0);
    for (const [u, v] of edges) inDeg[v]++;
    let champ = -1;
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            if (champ !== -1) return -1;
            champ = i;
        }
    }
    return champ;
};