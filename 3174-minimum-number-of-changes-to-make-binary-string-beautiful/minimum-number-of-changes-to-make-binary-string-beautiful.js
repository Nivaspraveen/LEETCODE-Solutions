/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let changes = 0;
    for (let i = 0; i < s.length; i += 2) {
        const pair = s.slice(i, i + 2);

        if (pair[0] !== pair[1]) changes += 1;
    }
    return changes;
};