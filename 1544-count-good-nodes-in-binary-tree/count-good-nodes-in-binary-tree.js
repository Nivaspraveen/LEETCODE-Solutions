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
var goodNodes = function(root) {
    const dfs = (node, maxFar) => {
        if (!node) return 0;
        let good = node.val >= maxFar ? 1 : 0;
        maxFar = Math.max(maxFar, node.val);
        good += dfs(node.left, maxFar);
        good += dfs(node.right, maxFar);
        return good;
    };
    return dfs(root, root.val);
};