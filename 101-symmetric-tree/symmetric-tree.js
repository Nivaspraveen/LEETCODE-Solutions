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
 * @return {boolean}
 */

 // Recursive Approach
var isSymmetric = function(root) {
    const isMirror = (left, right) => {
        if (left === null && right === null) return true;
        if (left === null || right === null || left.val !== right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
};