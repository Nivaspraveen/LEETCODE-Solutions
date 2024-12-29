/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const m = words[0].length, n = target.length;
    const MOD = 1e9 + 7;
    const charCount = Array.from({ length: m }, () => Array(26).fill(0));
    for (const word of words) {
        for (let i = 0; i < m; i++) charCount[i][word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let j = 0; j <= m; j++) dp[0][j] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = dp[i][j - 1];
            const targetChar = target[i - 1].charCodeAt(0) - 'a'.charCodeAt(0);
            dp[i][j] += charCount[j - 1][targetChar] * dp[i - 1][j - 1];
            dp[i][j] %= MOD;
        }
    }
    return dp[n][m];
};