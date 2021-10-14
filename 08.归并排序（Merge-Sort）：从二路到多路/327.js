/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 function mergeSort(sum,left,right,lower,upper){
    if(left>=right){return 0}
    let mid = (left+right)>>1
    let ans = 0
    ans+=mergeSort(sum,left,mid,lower,upper)
    ans+=mergeSort(sum,mid+1,right,lower,upper)
    // 开始统计数量
    // lower <= sum[j]-sum[i] <= upper
    // sum[i]<=sum[j]-lower
    //  b = sum[j]-lower
    // sum[i]>=sum[j]-upper
    // a = sum[j]-upper
    //  a<=sum[i]<=b
    // 然后滑动窗口就行了
    // 扫描的右半区间
    let k1=left,k2=left
    for (let j = mid+1; j <=right; j++) {
        // 求满足要求的sun[i]
        let a =  sum[j]-upper
        let b =  sum[j]-lower
        // 比a小的不符合要求,找到靠左的第一个符合要求的值
        while (k1<=mid&&sum[k1]<a) {k1++}
        // 比b大的不符合要求,找到靠右的最后一个符合要求的值
        while (k2<=mid&&sum[k2]<=b) {k2++}
        // k2-k1为符合j位置时左边的区间
        ans+=k2-k1
    }
    // 合并
    let a = []
    let p1 = left
    let p2 = mid+1 
    while (p1<=mid||p2<=right) {
        if(p2>right||p1<=mid&&sum[p1]<=sum[p2]){
            a.push(sum[p1++])
        }else{
            a.push(sum[p2++])
        }
    }
    for (let i = left; i <=right; i++) {
        sum[i]=a[i-left]
    }
    return ans
}
var countRangeSum = function(nums, lower, upper) {
    let sum = [0]
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        s+=nums[i]
        sum.push(s)
    }
    return mergeSort(sum,0,sum.length-1,lower,upper)
};