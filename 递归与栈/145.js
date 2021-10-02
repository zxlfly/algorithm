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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if(root==null||root==[]){return []}
    let s1=[]
    let s2=[]
    let res=[]
    s1.push(root)
    s2.push(0)
    while(s1.length>0){
        let status = s2.pop()
        switch(status){
            case 0:{
                s2.push(1)
                if(s1[s1.length-1].left!=null){
                    s1.push(s1[s1.length-1].left)
                    s2.push(0)
                }
                break
            }
            case 1:{
                s2.push(2)
                if(s1[s1.length-1].right!=null){
                    s1.push(s1[s1.length-1].right)
                    s2.push(0)
                }
                break
            }
            case 2:{
                res.push(s1.pop().val)
                break
            }
        }
    }
    return res 
};