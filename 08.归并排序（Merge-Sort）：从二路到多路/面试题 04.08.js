/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    //递归判断左右子树是否存在q p
    if(root==null){return null}
    if(root==q||root==p){return root}
    let l = lowestCommonAncestor(root.left,p,q)
    let r = lowestCommonAncestor(root.right,p,q)
    // 存在就返回
    if(l!=null&&r!=null){return root}
    // 找到了一个
    if(l!=null)return l
    return r
};