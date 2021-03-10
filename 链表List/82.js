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
    let ret = new ListNode(undefined,head)
    let cur
    let pre = ret
    while(pre.next){
        if(pre.next.next&&pre.next.val===pre.next.next.val){
            cur=pre.next.next
            while(cur&&pre.next.val==cur.val){
                cur= cur.next
            }
            pre.next=cur
        }else{
            pre=pre.next
        }
    }
    return ret.next
};