/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const m = box.length, n = box[0].length;
    for (let row = 0; row < m; row++) {
        let writePointer = n - 1;
        for (let col = n - 1; col >= 0; col--) {
            if (box[row][col] === '*') writePointer = col - 1;
            else if(box[row][col] === '#') {
                box[row][col] = '.';
                box[row][writePointer] = '#';
                writePointer--;
            }
        }
    }
    const rotatedBox = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) rotatedBox[col][m - 1- row] = box[row][col];
    }
    return rotatedBox;
};