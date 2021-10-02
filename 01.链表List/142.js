/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head){return null}
    let pre = head 
    let cur = head 
    while(cur&&cur.next){
        pre=pre.next
        cur= cur.next.next
        if(pre===cur){
            let temp = head
            while(pre !== temp){
                pre=pre.next
                temp=temp.next
            }
            return pre
        }
    }
    return null
};