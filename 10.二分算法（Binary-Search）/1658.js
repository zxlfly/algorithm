/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 function bsearch(arr,x){
    let head=0,tail=arr.length-1,mid
    while(head<=tail){
        mid=(head+tail)>>1
        if(arr[mid]<x){
            head=mid+1
        }else if(arr[mid]==x){
            return mid
        }else{
            tail=mid-1
        }
    }
    return -1
}
var minOperations = function(nums, x) {
    // 分别求正序和倒叙的前缀和
    let sl = [0]
    let sr = [0]
    for(let i =0;i<nums.length;i++){
        sl[i+1]=sl[i]+nums[i]
    }
    for(let i =nums.length-1;i>=0;i--){
        sr.push(sr[nums.length-1-i]+nums[i])
    }
    // 然后在前缀和中二分查找符合的情况
    let res = -1
    for(let i =0;i<sl.length;i++){
        let j = bsearch(sr,x-sl[i])
        if(j==-1)continue
        if(j+i>nums.length)continue
        if(res==-1||res>i+j)res = i+j
    }
    return res
};