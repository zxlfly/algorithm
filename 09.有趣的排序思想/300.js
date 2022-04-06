/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) { return 1 }
    // arr[i]表示选择nums[i]，并且以nums[i]结尾的最长上升子序列的长度
    // 初始每个值对应的长度都为1
    let arr = new Array(nums.length).fill(1)
    // 后面的和前面的比价
    let max = -1
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                arr[i] = Math.max(arr[j] + 1, arr[i])
            }
        }
        max = Math.max(max, arr[i])
    }
    return max
};