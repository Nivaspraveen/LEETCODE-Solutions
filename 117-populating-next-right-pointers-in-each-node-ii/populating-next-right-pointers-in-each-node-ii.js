/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;
    let curr = root;
    while (curr) {
        let dummyHead = new _Node(0);
        let tail = dummyHead;
        while (curr) {
            if (curr.left) {
                tail.next = curr.left;
                tail = tail.next;
            }
            if (curr.right) {
                tail.next = curr.right;
                tail = tail.next;
            }
            curr = curr.next;
        }
        curr = dummyHead.next;
    }
    return root;
};