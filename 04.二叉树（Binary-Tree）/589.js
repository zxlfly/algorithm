/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root,res=[]) {
    if(root!=null){
        res.push(root.val)
        root.children.forEach(child=>preorder(child,res))
    }
    return res
};