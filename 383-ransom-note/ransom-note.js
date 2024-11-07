/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = {};
    for (let c of magazine) count[c] = (count[c] || 0) + 1;
    for (let c of ransomNote) {
        if(!count[c]) return false;
        count[c] -= 1;
    }
    return true;
};