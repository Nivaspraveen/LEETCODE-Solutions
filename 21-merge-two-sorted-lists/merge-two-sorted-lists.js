/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(list1, list2) {
   let dummy = new ListNode(0);
   let curr = dummy;
   while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
    } else {
        curr.next = list2;
        list2 = list2.next;
    }
    curr = curr.next;
   }
   if (list1 !== null) curr.next = list1;
   else curr.next = list2;
   return dummy.next; 
};