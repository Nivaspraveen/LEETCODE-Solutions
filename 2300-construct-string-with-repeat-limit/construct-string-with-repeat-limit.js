/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const freq = Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    const result = [];
    let i = 25;
    while (i >= 0) {
        if (freq[i] > 0) {
            let count = Math.min(repeatLimit, freq[i]);
            for (let k = 0; k < count; k++) result.push(String.fromCharCode(97 + i));
            freq[i] -= count;
            if (freq[i] > 0) {
                let j = i - 1;
                while (j >= 0 && freq[j] === 0) j--;
                if (j < 0) break;
                result.push(String.fromCharCode(97 + j));
                freq[j]--;
            }
        } 
        else i--;
    }
    return result.join('');
};