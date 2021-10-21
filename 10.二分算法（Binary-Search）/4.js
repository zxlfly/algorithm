/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    // 如果长度不相等默认nums1是长的
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    let m = nums1.length
    let n = nums2.length
    let total = m + n
    // 奇数
    if (total % 2 == 1) {
        // 中间的正好
        return bsearch(nums1, nums2, total >> 1 + 1)
    } else {
        // 偶数，中位数在total>>1+1和total>>1之间
        return (bsearch(nums1, nums2, total >> 1) + bsearch(nums1, nums2, total >> 1 + 1)) / 2
    }
    function bsearch(nums1, nums2, k) {
        let ind1 =0, ind2 = 0,half
        while (true) {
            half=k/2
        }
    }
};