/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((a, b) => a - b);
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of nums) {
        let current = num;
        let streakLength = 0;
        while (numSet.has(current)) {
            streakLength++;
            current *= current;
        }
        longestStreak = Math.max(longestStreak, streakLength);
    }
    return longestStreak >= 2 ? longestStreak : -1;
};