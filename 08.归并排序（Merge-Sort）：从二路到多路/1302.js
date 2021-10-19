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
 var deepestLeavesSum = function(root) {
    //  记录最大深度  和
    let maxind=0,res=0
    function dfs(root,ind){
        if(root==null){return}
        if(ind==maxind){
            res+=root.val
        }
        if(ind>maxind){
            maxind=ind
            res=root.val
        }
        dfs(root.left,ind+1)
        dfs(root.right,ind+1)
    }
    dfs(root,1)
    return res
};