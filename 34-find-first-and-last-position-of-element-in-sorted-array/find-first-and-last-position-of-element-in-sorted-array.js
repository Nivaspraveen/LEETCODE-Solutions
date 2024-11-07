/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findStart = (nums, target) => {
    let left = 0, right = nums.length - 1, startIndex = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            startIndex = mid;
            right = mid - 1;
        } 
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;    
    }
    return startIndex;
    };

    const findEnd = (nums, target) => {
        let left = 0, right = nums.length - 1, endIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                endIndex = mid;
                left = mid + 1;
            } 
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return endIndex
    };
    const start = findStart(nums, target);
    if (start === -1) return [-1, -1];
    const end = findEnd(nums, target);
    return [start, end];
};