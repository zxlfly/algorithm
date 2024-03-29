/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 总的思路就是各取一半，对比两个数组取到的最大值（设为a，b）
// 如果a<=b,那么第一个数组从第一个开始到a在内的元素都不是目标元素，缩小目标区间
// 如果a>=b，那么第二个数组从第一个开始到b在内的元素都不是目标元素，缩小目标区间
//每一次缩小k/2个 （k为中位数）
 var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    // 加一是为了取中间数，不然下取整取的不对,对偶数没影响
    let mid = (m + n + 1 )>>1
    // 基数
    let a = bsearch(nums1, nums2,0,0, mid)
    if((m+n)%2==1){return a}
    // 偶数 
    // 需要中间两个 所以+1
    let b = bsearch(nums1, nums2,0,0, mid+1)
    return (a+b)/2
    // 需要递归调用 所以传入下标
    function bsearch(nums1, nums2,i,j,k){
        // 某个数组空了，剩下的个数取另一个没空的数组的值
        if(nums1.length==i){
            return nums2[j+k-1]
        }
        if(nums2.length==j){
            return nums1[i+k-1]
        }
        // 还差一个  那就比下开头的值
        if(k==1){
            return nums1[i]<nums2[j]?nums1[i]:nums2[j]
        }
        // 正常情况
        // 第一个取a个  可能存在数量不够的情况
        let a = Math.min(k>>1,nums1.length-i)
        // 第二个取b个  也可能不够
        let b = Math.min(k-a,nums2.length-j)
        a = k-b
        // 说明第一个数组的前半段a个元素可以排除了
        if(nums1[i+a-1]<=nums2[j+b-1]){
            return bsearch(nums1, nums2,i+a,j,k-a)
        }
        return bsearch(nums1, nums2,i,j+b,k-b)
    }
};