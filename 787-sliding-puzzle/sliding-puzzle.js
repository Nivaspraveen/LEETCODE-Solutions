/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const start = board.flat().join(''),
        goal = '123450',
        neighbors = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]],
        queue = [[start, start.indexOf('0'), 0]];
        visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
        const [state, zeroPos, depth] = queue.shift();
        if (state === goal) return depth;
        for (const neighbor of neighbors[zeroPos]) {
            const newState = state.split('');
            [newState[zeroPos], newState[neighbor]] = [newState[neighbor], newState[zeroPos]];
            const newStr = newState.join('');
            if (!visited.has(newStr)) {
                visited.add(newStr);
                queue.push([newStr, neighbor, depth + 1]);
            }
        }
    }
    return -1;
};