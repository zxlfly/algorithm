/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 function getRes(root,arr){
    if(root==null)return
    getRes(root.left,arr)
    arr.push(root.val)
    getRes(root.right,arr)
}
var getAllElements = function(root1, root2) {
    let arr1 = []
    let arr2 = []
    getRes(root1,arr1)
    getRes(root2,arr2)
    let res = []
    let l =0, r =0
    while(arr1.length>l||arr2.length>r){
        if(r>=arr2.length||l<arr1.length&&arr1[l]<=arr2[r]){
            res.push(arr1[l])
            l++
        }else{
            res.push(arr2[r])
            r++
        }
    }
    return res
};