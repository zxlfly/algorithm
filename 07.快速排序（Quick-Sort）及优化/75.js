/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let x = 0
    let y = nums.length-1
    let i = 0
    while (i <= y) {
        if (nums[i] == 1) {
            i++
        } else if (nums[i] > 1) {
            [nums[i], nums[y]] = [nums[y], nums[i]]
            y--
        } else if (nums[i] < 1) {
            [nums[i], nums[x]] = [nums[x], nums[i]]
            x++
            i++
        }
    }
    return nums
};