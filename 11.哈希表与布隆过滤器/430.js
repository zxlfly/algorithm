/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 这题的意思就是把子链表接到后面去，递归即可
var flatten = function(head) {
    let p = head
    let k,q
    while (p) {
       if(p.child){
            q = p.next
            // 递归处理子节点可能存在的嵌套
            k =flatten(p.child)
            // 清掉child
            // 连接原来的子节点
            p.child=null
            p.next=k
            k.prev = p
            // p指向原来子节点的最后一个
            while (p.next) {
                p=p.next
            }
            // 接上原来的next
            p.next=q
            if(q){q.prev=p}
       }
       p=p.next
    }
    return head
};