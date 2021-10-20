/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分解法
 function search(nums,ind,head,target){
    let tail = nums.length-1
    while (head<=tail) {
        let mid = ((tail-head)>>1)+head
        if(nums[ind[mid]]==target){
            return mid
        }else if(nums[ind[mid]]<target){
            head =mid+1
        }else{
            tail=mid -1
        }
    }
    return -1
}
var twoSum = function(nums, target) {
    let ind = []
    for (let i = 0; i < nums.length; i++) {
        ind.push(i)
    }
    ind.sort((a,b)=>nums[a]-nums[b])
    let res = []
    for (let i = 0; i < ind.length; i++) {
        let j = search(nums,ind,i+1,target-nums[ind[i]])
        if(j==-1){continue}
        if(ind[i]>ind[j]){
            res = [ind[j],ind[i]]
        }
        res = [ind[i],ind[j]]
    }
    return res
}