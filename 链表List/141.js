/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head){
        return false
    }
    let pre = head
    let cur = head
    while(cur&&cur.next){
        pre = pre.next
        cur=cur.next.next
        if(cur === pre){
            return true
        }
    }  
    return false
};