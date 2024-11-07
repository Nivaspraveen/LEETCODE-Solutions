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
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prev = null;
    function inOrder(node) {
        if (!node) return;
        inOrder(node.left);
        if (prev !== null) minDiff = Math.min(minDiff, node.val - prev);
        prev = node.val;
        inOrder(node.right);
    }
    inOrder(root);
    return minDiff;
};