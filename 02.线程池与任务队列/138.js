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
var copyRandomList = function (head) {
    if (!head) { return null }
    for (let node = head; node !== null; node = node.next.next) {
        let nodeNew = new Node(node.val, node.next, null)
        node.next = nodeNew
    }
    for (let node = head; node !== null; node = node.next.next) {
        let nodeNew = node.next
        nodeNew.random = node.random !== null ? node.random.next : null
    }
    let headNew = head.next
    for (let node = head; node !== null; node = node.next) {
        let nodeNew = node.next
        node.next = node.next.next
        nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null
    }
    return headNew
};

var copyRandomList = function (head) {
    if (!head) { return null }
    let copy
    let cur = head
    while (cur) {
        copy = new Node(cur.val, cur.next, cur.random)
        cur.next = copy
        cur = copy.next
    }
    cur = head.next
    while (cur) {
        if (cur.random) {
            cur.random = cur.random.next
        }

        cur = cur.next
        if (cur) {
            cur = cur.next
        }
    }
    let newList = head.next
    cur = head
    while (cur) {
        copy = cur.next
        cur.next = copy.next
        if (cur.next) {
            copy.next = cur.next.next
        }
        cur = cur.next
    }
    return newList
};