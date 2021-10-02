/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
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
 var reverse = function(head, n){
    let pre = head
    let cur =head
    let count = n
    while(--n&&pre){
        pre=pre.next
    }
    if(!pre){return head}
    pre =null 
    while(count--){
        [cur.next,pre,cur]=[pre,cur,cur.next]
    }
    head.next=cur
    return pre
}
var reverseKGroup = function(head, k) {
    if(!head){
        return null
    }
    let ret = new ListNode(undefined,head)
    let pre =ret
    do{
        pre.next=reverse(pre.next,k)
        // 移动pre到上次反转之前的head处，即下一次反转的head前一位，因为位置颠倒了
        for (let i = 0; i < k&&pre; i++) {
            pre=pre.next
        }
        if(!pre){break}
    }while(1)
    return ret.next
};