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
var reverseOddLevels = function(root) {
    if (!root) return null;
    let q = [root], lvl = 0;
    while (q.length > 0) {
        let lvlSize = q.length, currLvlNodes = [];
        for (let i = 0; i < lvlSize; i++) {
            let node = q.shift();
            currLvlNodes.push(node);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (lvl % 2 === 1) {
            let values = currLvlNodes.map(node => node.val).reverse();
            for (let i = 0; i < currLvlNodes.length; i++) currLvlNodes[i].val = values[i];
        }
        lvl++;
    }
    return root;
};