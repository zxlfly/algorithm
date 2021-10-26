/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    let map = new Map()
    function findParent(node){
        if(node.left!=null){
            map.set(node.left,node)
            findParent(node.left)
        }
        if(node.right!=null){
            map.set(node.right,node)
            findParent(node.right)
        }
    }
    findParent(root)
    let res = []
    function findAns(node,dep,form){
        if(node==null)return
        if(dep==k){
            res.push(node.val)
            return 
        }
        if(node.left!=form){
            findAns(node.left,dep+1,node)
        }
        if(node.right!=form){
            findAns(node.right,dep+1,node)
        }
        if(map.get(node)!=form){
            findAns(map.get(node),dep+1,node)
        }
    }
    findAns(target,0,null)
    return res
};