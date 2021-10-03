/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 function t(root){
    if(root==null){return 0}
    return t(root.left)+t(root.right)+1
}
var kthLargest = function(root, k) {
   let count_r = t(root.right)
   if(k<=count_r)return kthLargest(root.right,k)
   if(k==count_r+1)return root.val
   return kthLargest(root.left,k-count_r-1)
};