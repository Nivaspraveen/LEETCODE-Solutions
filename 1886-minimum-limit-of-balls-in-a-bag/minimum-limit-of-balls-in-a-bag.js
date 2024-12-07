/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    const rqrdOps = penalty => {
        let ops = 0;
        for (let balls of nums) {
            if (balls > penalty) ops += Math.ceil(balls / penalty) - 1;
        }
        return ops;
    }
    let left = 1, right = Math.max(...nums), result = right;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (rqrdOps(mid) <= maxOperations) {
            result = mid;
            right = mid - 1;
        }
        else left = mid + 1;
    }
    return result;
};