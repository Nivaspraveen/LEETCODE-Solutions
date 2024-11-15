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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const dfs = (node, level) => {
        if (!node) return;
        if (result.length === level) result.push(node.val);
        dfs(node.right, level + 1);
        dfs(node.left, level + 1);
    };
    dfs(root, 0);
    return result;
};