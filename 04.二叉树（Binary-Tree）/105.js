/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(preorder.length==0)return null
    let ind =0
    while(inorder[ind]!=preorder[0]){ind++}
    let inl = []
    let inr =[]
    let prel = []
    let prer =[]
    for(let i =0;i<ind;i++){
        inl.push(inorder[i])
        prel.push(preorder[i+1])
    }
    for(let i =ind+1;i<preorder.length;i++){
        inr.push(inorder[i])
        prer.push(preorder[i])
    }
    let res = new TreeNode(preorder[0])
    res.left = buildTree(prel,inl)
    res.right = buildTree(prer,inr)
    return res
};