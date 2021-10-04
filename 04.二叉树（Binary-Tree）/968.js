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
 * @return {number}
 */

 var minCameraCover = function(root) {
    if(!root){return 0}
    let res = 0
    var t = function (root){
        if(root==null){
            return 2
        }
        let left = t(root.left,res)
        let right = t(root.right,res)
        if(left==2&&right==2){
            return 0
        }else if(left==0||right==0){
            res++
            return 1
        }else if(left==1||right==1){
            return 2
        }
    }
    if(t(root,res)==0){
        res++
    }
    return res
};