/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root,k=0,res=[]) {
    if(root!=null){
        if(k==res.length){
            res.push([])
        }
        res[k].push(root.val)
        levelOrder(root.left,k+1,res)
        levelOrder(root.right,k+1,res)
    }
    return res
};