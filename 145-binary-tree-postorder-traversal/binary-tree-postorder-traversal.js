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

 //Recursive approach
// var postorderTraversal = function(root) {
//     const result = [];
//     const postorder = node => {
//         if (!node) return;
//         postorder(node.left);
//         postorder(node.right);
//         result.push(node.val);
//     };
//     postorder(root);
//     return result;
// };

//Iterative approach
var postorderTraversal = function(root) {
    if (!root) return [];
    const stack = [root], result = [];
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result.reverse();
};