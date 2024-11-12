/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    const sortedQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]), results = Array(queries.length).fill(0);
    let maxBeauty = 0, j = 0;
    for (const [query, originalIndex] of sortedQueries) {
        while (j < items.length && items[j][0] <= query) {
            maxBeauty = Math.max(maxBeauty, items[j][1]);
            j++;
        }
        results[originalIndex] = maxBeauty;
    }
    return results;
};