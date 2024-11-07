/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const combined = heights.map((h, i) => [h, names[i]]);
    combined.sort((a, b) => b[0] - a[0]);
    return combined.map(pair => pair[1]);
};