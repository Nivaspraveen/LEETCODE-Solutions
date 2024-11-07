/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // using built-in reverse property
    // for (let i = 0; i < n; i++) matrix[i].reverse();

    //without using built-in reverse property
    for (let i = 0; i < n; i++) {
        let start = 0, end = n - 1;
        while (start < end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
            start++;
            end--;
        }
    }

};