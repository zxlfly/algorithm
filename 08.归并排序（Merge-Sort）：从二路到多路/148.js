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
 function sort(head , n){
    if(head==null||head.next==null)return head
    let l = n>>1
    let lhead= head
    let rhead = head
    for(let i =1;i<l;i++){
        rhead=rhead.next
    }
    let p = rhead
    rhead=rhead.next
    p.next=null
    lhead = sort(lhead,l)
    rhead = sort(rhead,n-l)
    // 合并
    let ret = new ListNode()
    p = ret
    while(lhead||rhead){
        if(rhead==null||lhead&&lhead.val<=rhead.val){
            p.next=lhead
            lhead=lhead.next
        }else{
            p.next=rhead
            rhead=rhead.next
        }
        p=p.next
    }
    return ret.next
}
var sortList = function(head) {
    if(head==null)return head
    let n =0 
    let p = head
    while(p){
        p=p.next
        n++
    }
    return sort(head,n)
};