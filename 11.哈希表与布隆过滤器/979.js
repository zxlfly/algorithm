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
// 节点金币多了要移走，少了要补
 var distributeCoins = function(root) {
    let res = 0
    // 求金币的过载量，子树中金币的数量减去这个子树中节点的数量
    // 通过递归汇总得到最终的差值
    function getNums(root){
        if(root==null){return 0}
        let l = getNums(root.left)
        let r = getNums(root.right)
        res+=Math.abs(l)+Math.abs(r)
        return root.val+l+r-1
    }
    getNums(root)
    return res
};