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

var balanceBST = function(root) {
    const values = [];

    const inOrderTraversal = node => {
        if (!node) return;
        inOrderTraversal(node.left);
        values.push(node.val);
        inOrderTraversal(node.right)
    };
    inOrderTraversal(root);

    const sortedArrayToBST = (left, right) => {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(values[mid]);
        node.left = sortedArrayToBST(left, mid - 1);
        node.right = sortedArrayToBST(mid + 1, right);
        return node;
    };
    return sortedArrayToBST(0, values.length - 1);
};