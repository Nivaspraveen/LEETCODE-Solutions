/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    if (n === 0) return 0;
    let left = 0, right = n - 1, leftMax = 0, rightMax = 0, waterTrapped = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else waterTrapped += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else waterTrapped += rightMax - height[right];
            right--;
        }
    }
    return waterTrapped;
};