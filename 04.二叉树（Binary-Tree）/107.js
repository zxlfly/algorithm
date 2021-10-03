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
 * @return {number[][]}
 */
 function t(root,k,res){
    if(root==null){return}
    if(k==res.length){
        res.push([])
    }
    res[k].push(root.val)
    t(root.left,k+1,res)
    t(root.right,k+1,res)
 }
var levelOrderBottom = function(root) {
    let res = []
    t(root,0,res)
    for(let i =0,j=res.length-1;i<res.length,i<j;i++,j--){
        let l = res[i]
        let r = res[j]
        res[i]=r
        res[j]=l
    }
    return res
};