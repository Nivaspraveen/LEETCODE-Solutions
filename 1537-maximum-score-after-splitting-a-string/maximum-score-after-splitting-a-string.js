/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0, zerosInLeft = 0, maxScore = 0;
    for (c of s) {
        if (c === '1') totalOnes++;
    }
    let onesInRight = totalOnes;
    for (let i = 0; i < s.length - 1; i++) {
        (s[i] === '0') ? zerosInLeft++ : onesInRight--;
        maxScore = Math.max(maxScore, zerosInLeft + onesInRight);
    }
    return maxScore;
};