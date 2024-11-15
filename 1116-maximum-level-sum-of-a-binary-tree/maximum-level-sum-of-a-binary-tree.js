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
var maxLevelSum = function(root) {
    const levelSums = new Map();
    const dfs = (node, level) => {
        if (!node) return;
        levelSums.set(level, (levelSums.get(level) || 0) + node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };
    dfs(root, 1);
    let maxSum = -Infinity, maxLevel = 0;
    for (const [level, sum] of levelSums.entries()) {
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }
    return maxLevel;
};