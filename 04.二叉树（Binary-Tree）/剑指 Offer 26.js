/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 function t(a,b){
    if(b==null)return true
    if(a==null)return false
    if(a.val!=b.val)return false
    return t(a.left,b.left)&&t(a.right,b.right)
}
var isSubStructure = function(A, B) {
    if(A==null||B==null){return false}
    if(A.val==B.val&&t(A,B))return true
    return isSubStructure(A.left,B)||isSubStructure(A.right,B)
};