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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const prefixSumCount = new Map();
    prefixSumCount.set(0, 1);
    const dfs = (node, currSum) => {
        if (!node) return 0;
        currSum += node.val;
        let numPaths = prefixSumCount.get(currSum - targetSum) || 0;
        prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1);
        numPaths += dfs(node.left, currSum);
        numPaths += dfs(node.right, currSum);
        prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1);
         return numPaths;
    };
    return dfs(root, 0);
};