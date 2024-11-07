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
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var bstToGst = function(root) {
    let sum = 0;

    const traverse = node => {
        if (node === null) return;
        traverse(node.right);
        sum += node.val;
        node.val = sum;
        traverse(node.left);
    }
    traverse(root);
    return root;
};