/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) { return 1 }
    // arr[i]表示以nums[i]为结尾的最长上升子序列的长度
    // 初始每个值对应的长度都为1
    let arr = new Array(nums.length).fill(1)
    // 后面的和前面的比价
    let max = -1
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            // 如果nums[i]更大，就说明在以前的基础上又增加了一位
            if (nums[j] < nums[i]) {
                arr[i] = Math.max(arr[j] + 1, arr[i])
            }
        }
        max = Math.max(max, arr[i])
    }
    return max
};

// 如果需要返回序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) { return 1 }
    let arr = new Array(nums.length)
    arr[0] = {
        length: 1,
        value: [nums[0]]
    }
    let max = -1
    for (let i = 1; i < nums.length; i++) {
        arr[i] = {
            length: 1,
            value: []
        }
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                arr[i] = {
                    length: Math.max((arr[j].length + 1), arr[i].length),
                    value: [...arr[j].value]
                }
            }
        }
        arr[i].value.push(nums[i])

        max = Math.max(max, arr[i].length)
    }
    console.log(arr)
    return max
};