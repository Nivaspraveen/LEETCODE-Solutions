/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderIndexMap = new Map();
    inorder.forEach((val, i) => inorderIndexMap.set(val, i));
    function arrayToTree(inorderStart, inorderEnd, postorderStart, postorderEnd) {
        if (postorderStart > postorderEnd) return null;
        const rootVal = postorder[postorderEnd];
        const root = new TreeNode(rootVal);
        const rootIndex = inorderIndexMap.get(rootVal);
        const leftSubtreeSize = rootIndex - inorderStart;
        root.left = arrayToTree(inorderStart, rootIndex - 1, postorderStart, postorderStart + leftSubtreeSize - 1);
        root.right = arrayToTree(rootIndex + 1, inorderEnd, postorderStart + leftSubtreeSize, postorderEnd - 1);
        return root;
    }
    return arrayToTree(0, inorder.length - 1, 0, postorder.length - 1);
};