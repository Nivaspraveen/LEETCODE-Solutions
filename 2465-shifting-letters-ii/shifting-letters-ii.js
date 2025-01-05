/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const shift = Array(n + 1).fill(0);

    // Build the difference array
    for (const [start, end, direction] of shifts) {
        const delta = direction === 1 ? 1 : -1;
        shift[start] += delta;
        if (end + 1 < n) {
            shift[end + 1] -= delta;
        }
    }

    // Compute the prefix sum to get cumulative shifts
    let cumulativeShift = 0;
    const result = [...s];
    for (let i = 0; i < n; i++) {
        cumulativeShift += shift[i];
        const netShift = (cumulativeShift % 26 + 26) % 26; // Ensure positive modulo
        const newChar = String.fromCharCode(
            ((s.charCodeAt(i) - 97 + netShift) % 26) + 97
        );
        result[i] = newChar;
    }

    return result.join('');
};