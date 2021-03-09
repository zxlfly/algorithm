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
// 指针解法
 var reverseList = function(head) {
    if(!head){return null}
    let pre = null
    let cur = head 
    while(cur){
        // [cur.next,pre,cur]=[pre,cur,cur.next]
        let next=cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};
// 递归解法
var reverseList = function(head) {
    if(!head||!head.next){return head}
    let z = head.next
    let x = reverseList(head.next)
    head.next=z.next
    z.next=head
    return x
};