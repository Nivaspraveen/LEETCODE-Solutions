/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const getLeafSequence = root => {
        let leafSeq = [];
        const dfs = node => {
            if (!node) return;
            if (!node.left && !node.right) leafSeq.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        return leafSeq;
    };
    const l1 = getLeafSequence(root1), l2 = getLeafSequence(root2);
    return JSON.stringify(l1) === JSON.stringify(l2);
};