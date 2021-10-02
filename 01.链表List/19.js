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
    if(!head){return null}
    let ret = new ListNode(undefined,head)
    let pre =ret
    let cur = head 
    while(n--){
        cur=cur.next
    }
    if(!cur){return head.next}
    while(cur){
        pre=pre.next
        cur=cur.next
    }
    pre.next=pre.next.next
    return ret.next
};