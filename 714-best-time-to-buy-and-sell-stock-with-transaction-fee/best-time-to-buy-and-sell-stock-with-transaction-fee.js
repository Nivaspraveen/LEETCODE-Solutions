/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = -Infinity, notHold = 0;
    for (const price of prices) {
        hold = Math.max(hold, notHold - price);
        notHold = Math.max(notHold, hold + price - fee);
    }
    return notHold;
};