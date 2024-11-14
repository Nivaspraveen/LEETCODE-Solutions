/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freqMap = arr.reduce((map, num) => {
        map[num] = (map[num] ||0) + 1;
        return map;
    }, {});
    const counts = Object.values(freqMap), uniqueCounts = new Set(counts);
    return counts.length === uniqueCounts.size;
};