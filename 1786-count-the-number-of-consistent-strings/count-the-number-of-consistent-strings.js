/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (const w of words) {
        let isConsistent = true;
        for (const char of w) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) count++;
    }
    return count;
};