/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length, visited = new Array(n).fill(false);
    const dfs = city => {
        visited[city] = true;
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) dfs(i);
        }
    };
    let provinceCount = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinceCount++;
        }
    }
    return provinceCount;
};