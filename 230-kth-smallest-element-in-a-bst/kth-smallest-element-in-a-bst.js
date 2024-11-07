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
 * @param {number} k
 * @return {number}
 */

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var kthSmallest = function(root, k) {
    let count = 0, res = null;
    const inOrder = node => {
        if (!node || res !== null) return;
        inOrder(node.left);
        count++;
        if (count === k) {
            res = node.val;
            return;
        }
        inOrder(node.right);
    }
    inOrder(root);
    return res;
};