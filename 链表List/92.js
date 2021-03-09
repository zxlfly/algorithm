/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 指针解法
var reverse =function(head,n){
    let pre = null
    let cur = head
    while(n--){
        let next = cur.next
        cur.next=pre
        pre=cur
        cur= next
    }
    head.next=cur
    return pre
}
var reverseBetween = function(head, left, right) {
    if(!head){return null}
    let ret = new ListNode(undefined,head)
    let pre = ret
    count = right-left+1
    while(--left){
        pre=pre.next
    }
    pre.next=reverse(pre.next,count)
    return ret.next
};
// 递归解法
 var reverseList = function(head,n) {
    if(n==1){return head}
    let z = head.next
    let x = reverseList(head.next,n-1)
    head.next=z.next
    z.next=head
    return x
};
var reverseBetween = function(head, left, right) {
    if(!head){return null}
    let ret ={
        val:undefined,
        next:head
    }
    let pre = ret
    let count = right-left+1
    while(--left){
        pre=pre.next
    }
    pre.next = reverseList(pre.next,count)
    return ret.next
};