/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    const dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (length >= k) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = groupStart;
        for (let i = 1; i < k; i++) {
            const t = groupEnd.next;
            groupEnd.next = t.next;
            t.next = prevGroupEnd.next;
            prevGroupEnd.next = t;
        }
        prevGroupEnd = groupStart;
        length -= k;
    }
    return dummy.next;
};