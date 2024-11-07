/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let maxUnique = 0, uniqueSet = new Set();

    const backtrack = start => {
        if (start === s.length) {
            maxUnique = Math.max(maxUnique, uniqueSet.size);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            let subStr = s.slice(start, end);
            if (!uniqueSet.has(subStr)) {
                uniqueSet.add(subStr);
                backtrack(end);
                uniqueSet.delete(subStr);
            }
        }
    };
    backtrack(0);
    return maxUnique;
};