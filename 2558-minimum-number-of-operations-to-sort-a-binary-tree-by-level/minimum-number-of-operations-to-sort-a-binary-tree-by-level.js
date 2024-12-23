/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    if (!root) return 0;
    const levels = [], queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length, level = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(level);
    }
    let totalSwaps = 0;
    for (const level of levels) totalSwaps += minSwapsToSort(level);
    return totalSwaps;
};

// Helper function to calculate minimum swaps to sort an array
const minSwapsToSort = arr => {
    const n = arr.length, sorted = [...arr].sort((a, b) => a - b), indexMap = new Map();
    for (let i = 0; i < n; i++) indexMap.set(sorted[i], i);
    let swaps = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (visited[i] || indexMap.get(arr[i]) === i) continue;
        let cycleSize = 0, curr = i;
        while (!visited[curr]) {
            visited[curr] = true;
            curr = indexMap.get(arr[curr]);
            cycleSize++;
        }
        if (cycleSize > 1) swaps += cycleSize - 1;
    }
    return swaps;
};