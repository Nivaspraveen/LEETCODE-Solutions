/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const c = cost.length;
    let prev1 = cost[1], prev2 = cost[0];
    for (let i = 2; i < c; i++) {
        const curr = Math.min(prev1, prev2) + cost[i];
        prev2 = prev1;
        prev1 = curr;
    }
    return Math.min(prev1, prev2);
};