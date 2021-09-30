/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if(!head){return null}
    let s = new ListNode(0);
    const small = s;
    let b = new ListNode(0);
    const big = b;
    while(head!==null){
        if(head.val<x){
            s.next=head
            s=head
        }else{
            b.next=head
            b=head
        }
        head=head.next
    }
    b.next=null
    s.next=big.next
    return small.next

};