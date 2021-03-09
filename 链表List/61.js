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
 var rotateRight = function(head, k) {
    if(!head){return null}
    let cur= head
    let size = 1
    while(cur.next){
        cur=cur.next
        size+=1
    }
    cur.next=head
    // 题目要求向右
    k=size-k%size
    while(k--){
        cur=cur.next
    }
    head = cur.next
    cur.next=null
    return head
};