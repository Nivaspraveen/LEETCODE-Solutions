/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   const numSet = new Set(nums);
    let maxLength = 0;

    for (const num of numSet) {
        if(!numSet.has(num - 1)) {
            let currNum = num;
            let currStreak = 1;
            while (numSet.has(currNum + 1)) {
                currNum++;
                currStreak++;
            }
            maxLength = Math.max(maxLength, currStreak);
        }
    }
    return maxLength; 
};