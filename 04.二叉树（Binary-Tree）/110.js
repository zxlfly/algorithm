/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 function t(root){
    if(root==null){return 0}
    let l = t(root.left)
    let r = t(root.right)
    if(l<0||r<0){return -2}
    if(Math.abs(l-r)>1){return -2}
    return Math.max(l,r)+1
}
var isBalanced = function(root) {
    return t(root)>=0
};