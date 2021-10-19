/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// todo：以每一项开始的递加是有序的，所以可以使用优先队列来做，多路归并
 var rangeSum = function(nums, n, left, right) {
    for(let i =0;i<n;i++){
        j=i+1
        let sum = nums[i]
        while(j<n){
            nums.push(sum+=nums[j])
            j++
        }
    }
    nums.sort((a,b)=>a-b)
    return nums.slice(left-1,right).reduce((a,b)=>((a+b)%1000000007))
};