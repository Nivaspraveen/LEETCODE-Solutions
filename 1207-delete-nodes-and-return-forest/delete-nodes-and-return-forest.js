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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const result = [];

    const helper = (node, isRoot) => {
        if (!node) return null;
        const isDeleted = toDeleteSet.has(node.val);
        if (isRoot && !isDeleted) result.push(node);

        node.left = helper(node.left, isDeleted);
        node.right = helper(node.right, isDeleted);
        return isDeleted ? null : node;
    }
    helper(root, true);
    return result;
};