/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let seenChars = new Set(), subStrCount = 0;
    for (let c of s) {
        if (seenChars.has(c)) {
            subStrCount++;
            seenChars.clear();
        }
        seenChars.add(c);
    }
    if (seenChars.size > 0) subStrCount++;
    return subStrCount;
};