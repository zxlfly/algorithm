/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 function sort(start, end) {
    let res = []
    if (start > end) { return [null] }
    // 枚举l-r中的可能情况
    for (let i = start; i <= end; i++) {
        // 左子树
        let leftTree = sort(start, i - 1)
        // 右子树
        let rightTree = sort(i + 1, end)
        // 组合
        for (let x of leftTree) {
            for (let y of rightTree) {
                res.push(new TreeNode(i, x, y))
            }
        }
    }
    return res
}
var generateTrees = function (n) {
    if (n == 0) return []
    return sort(1, n)
};