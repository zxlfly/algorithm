/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(!head){return null}
    let pre = head
    while(pre.next){
        if(pre.val===pre.next.val){
            pre.next=pre.next.next
        }else{
            pre=pre.next
        }
    }
    return head
};