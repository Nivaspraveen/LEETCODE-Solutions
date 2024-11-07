/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let blackCount = 0;
    let swaps = 0;

    for(let char of s) {
        char === '1' ? blackCount++ : swaps += blackCount;
    }
    return swaps;
};