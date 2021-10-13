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
 var insertionSortList = function(head) {
    if(head==null){return head}
    let ret = new ListNode("",head)
    // 已排序的最后一个
    let last = head
    // 当前操作的节点
    let cur = head.next
    while(cur!=null){
        if(last.val<=cur.val){
            last=cur
            cur=cur.next
        }else{
            // 找到小的节点
            // 从头遍历找到对应的位置
            let pre = ret
            while(pre.next.val<=cur.val){
                pre=pre.next
            }
            last.next=cur.next
            cur.next=pre.next
            pre.next=cur
            cur=last.next
        }
    }
    return ret.next
};