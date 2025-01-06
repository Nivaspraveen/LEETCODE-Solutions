/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length, result = new Array(n).fill(0);
    let moves = 0, balls = 0;
    for (let i = 0; i < n; i++) {
        result[i] += moves;
        if (boxes[i] === '1') balls++;
        moves += balls;
    }
    moves = 0;
    balls = 0;
    for (let i = n - 1; i >= 0; i--) {
        result[i] += moves;
        if (boxes[i] === '1') balls++;
        moves += balls;
    }
    return result;
};