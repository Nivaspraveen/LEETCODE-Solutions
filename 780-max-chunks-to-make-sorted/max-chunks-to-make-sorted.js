/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let m = 0, c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > m) m = arr[i];
        if (m === i) c++;
    }
    return c;
};