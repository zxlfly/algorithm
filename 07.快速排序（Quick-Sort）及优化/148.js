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
// 没使用快排
 function mergeTwoLists(l1, l2) {
    let ret = new ListNode()
    let pre = ret
    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            pre.next=l1
            l1=l1.next
        }else{
           pre.next=l2
            l2=l2.next 
        }
        pre =pre.next
    }
    pre.next = l1==null?l2:l1
    return ret.next
};
function toSortList(head,tail){
    if(head==null){return head}
    if(head.next==tail){
        head.next=null
        return head
    }
    let slow = head
    let fast = head
    while (fast!=tail) {
        slow=slow.next
        fast=fast.next
        if(fast!=tail){
            fast=fast.next
        }
    }
    let mid = slow
    return mergeTwoLists(toSortList(head,mid),toSortList(mid,tail))
}
var sortList = function(head) {
    return toSortList(head,null)
};