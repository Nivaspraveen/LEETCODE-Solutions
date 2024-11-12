/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    let sortedQueries = queries.map((q, i) => [q, i]);
    sortedQueries.sort((a, b) => a[0] - b[0]);
    let result = new Array(queries.length).fill(0), maxBeauty = 0, itemIndex = 0;
    for (let [query, originalIndex] of sortedQueries) {
        while (itemIndex < items.length && items[itemIndex][0] <= query) {
            maxBeauty = Math.max(maxBeauty, items[itemIndex][1]);
            itemIndex++;
        }
        result[originalIndex] = maxBeauty;
    }
    return result;
};