/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let maxHeap = gifts.map(gift => -gift);
    maxHeap.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        let maxGifts = -maxHeap.shift(), remGifts = Math.floor(Math.sqrt(maxGifts));
        maxHeap.push(-remGifts);
        maxHeap.sort((a, b) => a - b);
    }
    return maxHeap.reduce((a, b) => a - b, 0);
};