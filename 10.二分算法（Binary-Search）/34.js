/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function bsearch01(nums,target){
    let head = 0
    let tail = nums.length-1
    let mid
    while(head<tail){
        mid = (head+tail)>>1
        if(nums[mid]<target){
            head = mid+1
        }else{
            tail=mid
        }
    }
    if(nums[head]>=target){
       return head
    }
    return nums.length
    // 也可以这样
    // let head = 0,tail=nums.length-1,res=nums.length,mid
    // while(head<=tail){
    //     mid = ((tail-head)>>1)+head
    //     if(target<=nums[mid]){
    //         res = mid
    //         tail=mid-1
    //     }else{
    //         head = mid+1
    //     }
    // }
    // return res

    // let head =0,tail=nums.length-1,mid
    // while(tail-head>3){
    //     mid = (head+tail)>>1
    //     if(target<=nums[mid]){
    //         tail = mid
    //     }else{
    //         head=mid+1
    //     }
    // }
    // for(let i =head;i<=tail;i++){
    //     if(nums[i]>=target) return i
    // }
    // return nums.length
}
var searchRange = function(nums, target) {
    let res = [-1,-1]
    if(nums.length==0){return [-1,-1]}
    // 找到第一个大于等于target的位置
    res[0] = bsearch01(nums,target)
    if(res[0]==nums.length||nums[res[0]]!=target){
        return [-1,-1]
    }
    res[1]=bsearch01(nums,target+1)-1
    return res
};