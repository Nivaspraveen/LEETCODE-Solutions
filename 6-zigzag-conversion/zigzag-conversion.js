/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(numRows).fill('');
    let currRow = 0, goingDown = false;
    for (const char of s) {
        rows[currRow] += char;
        if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
        currRow += goingDown ? 1 : -1;
    }
    return rows.join('');
};