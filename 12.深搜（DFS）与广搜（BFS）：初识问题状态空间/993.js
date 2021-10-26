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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// 深搜
 var isCousins = function(root, x, y) {
    let depx = depy = 0
    let xf = yf = null
    let xh = yh = false
    function dfs(node,depth,parent){
        // 递归找对应的值，记录递归深度，对应的父节点
        if(node==null)return
        if(node.val==x){
            [depx,xf,xh]=[depth,parent,true]
        }else if(node.val==y){
            [depy,yf,yh]=[depth,parent,true]
        }
        if(xh&&yh){return}
        dfs(node.left,depth+1,node)
        dfs(node.right,depth+1,node)
    }
    dfs(root,0,null)
    return depx==depy&&xf!=yf
};
// 广搜
var isCousins = function(root, x, y) {
    let depx = depy = 0
    let xf = yf = null
    let xh = yh = false
    let q = []
    q.push({
        node:root,
        dep:0,
        far:null
    })
    while(q!=null){
        if(xh&&yh){
            break
        }
        let p = q.shift()
        if(p.node.val==x){
            xf = p.far
            xh =true
            depx = p.dep
        }
        if(p.node.val==y){
            yf = p.far
            yh =true
            depy = p.dep
        }
        if(p.node.left){
            q.push({
                node:p.node.left,
                dep:p.dep+1,
                far:p.node
            })
        }
        if(p.node.right){
            q.push({
                node:p.node.right,
                dep:p.dep+1,
                far:p.node
            })
        }
    }
    return depx == depy&&xf!=yf
};