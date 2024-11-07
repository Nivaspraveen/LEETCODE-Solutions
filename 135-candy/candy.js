/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;
    let c = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) c[i] = c[i - 1] + 1;
    }
    for (let i = n - 2; i >=0; i--) {
        if (ratings[i] > ratings[i + 1]) c[i] = Math.max(c[i], c[i + 1] + 1);
    }
    return c.reduce((sum, curr) => sum + curr, 0);
};