/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    const canDistribute = x => {
        let reqStores = 0;
        for (let quantity of quantities) {
            reqStores += Math.ceil(quantity / x);
            if (reqStores > n) return false;
        }
        return reqStores <= n;
    };
    let left = 1, right = Math.max(...quantities);
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
};