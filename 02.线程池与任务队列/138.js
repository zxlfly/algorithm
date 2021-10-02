/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(!head){return null}
    for(let node =head ;node!==null;node=node.next.next){
        let nodeNew = new Node(node.val,node.next,null)
        node.next=nodeNew
    }
    for(let node =head ;node!==null;node=node.next.next){
        let nodeNew = node.next
        nodeNew.random = node.random!==null?node.random.next:null
    }
    let headNew = head.next
    for(let node =head ;node!==null;node=node.next){
        let nodeNew = node.next
        node.next = node.next.next
        nodeNew.next= nodeNew.next!==null?nodeNew.next.next:null
    }
    return headNew
};