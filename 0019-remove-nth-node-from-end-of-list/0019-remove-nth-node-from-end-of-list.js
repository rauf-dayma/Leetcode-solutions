/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;

    // Move `first` pointer n steps ahead
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // If `first` is null, it means we need to remove the head node
    if (first === null) {
        return head.next;
    }

    // Move both `first` and `second` until `first` reaches the end
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }

    // `second.next` is the node to be removed
    second.next = second.next.next;

    return head;
};
