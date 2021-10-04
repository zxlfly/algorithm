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
 var widthOfBinaryTree = function(root) {
    if(root==null){return 0}
    let q =[[0,root]],max=1
    while(q.length){
        let w = q[q.length-1][0]-q[0][0]+1
        if(w>max){max=w}
        let temp = []
        for(const [i,x] of q){
            // 处理超界问题（i-q[0][0]） 
            // 父节点编号减去上一行最小编号 再进行计算
            // 也可以使用大数 
            x.left&&temp.push([(i-q[0][0])*2,x.left])
            x.right&&temp.push([(i-q[0][0])*2+1,x.right])
        }
        q=temp
    }
    return max
};