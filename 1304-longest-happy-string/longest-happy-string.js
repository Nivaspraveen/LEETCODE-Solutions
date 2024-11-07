/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let result = '';
    const counts = { a, b, c };

    const getMaxChar = lastChar => {
        let maxChar = '';
        for (const char of ['a', 'b', 'c']) {
            if (char !== lastChar && counts[char] > (counts[maxChar] || 0)) maxChar = char;
        }
        return maxChar;
    };
    while(true) {
        const lastChar = result.length >= 2 && result.slice(-2) === result[result.length - 1].repeat(2) ? result[result.length - 1] : '';
        const maxChar = getMaxChar(lastChar);

        if (!maxChar || counts[maxChar] === 0) break;
        result += maxChar;
        counts[maxChar]--;
    }
    return result;
};