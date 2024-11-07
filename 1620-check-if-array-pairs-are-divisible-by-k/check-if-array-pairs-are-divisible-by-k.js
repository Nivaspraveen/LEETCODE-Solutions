/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let remCount = new Array(k).fill(0);
    for (let n of arr) {
        let rem = ((n % k) + k) % k;
        remCount[rem]++;
    }
    for (let i = 1; i < k; i++) {
        if (remCount[i] !== remCount[k - i]) return false;
    }
    return remCount[0] % 2 === 0;
};