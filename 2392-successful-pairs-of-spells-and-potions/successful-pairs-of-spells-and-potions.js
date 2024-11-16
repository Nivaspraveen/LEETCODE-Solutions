/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const n = potions.length, result = [];
    for (let spell of spells) {
        let left = 0, right = n - 1, threshold = Math.ceil(success / spell);
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            potions[mid] >= threshold ? right = mid - 1 : left = mid + 1;
        }
        result.push(n - left);
    }
    return result;
};