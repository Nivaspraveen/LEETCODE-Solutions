/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const rMap = new Map();
    let r = 1;
    for (let i = 0; i < sorted.length; i++) {
        if(!rMap.has(sorted[i])) {
            rMap.set(sorted[i], r);
            r++;
        }
    }
    return arr.map(n => rMap.get(n));
};