/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    const n = s.length, k = new Array(n).fill(0);
    let l = 0, r = 0, sum = 0;
    for (let i = 1; i < n; i++) {
        if (i <= r) k[i] = Math.min(r - i + 1, k[i - l]);
        while (i + k[i] < n && s[k[i]] === s[i + k[i]]) k[i]++;
        if (i + k[i] - 1 > r) {
            l = i;
            r = i + k[i] - 1;
        }
    }
    sum = n;
    for (let i = 1; i < n; i++) sum += k[i];
    return sum;
};