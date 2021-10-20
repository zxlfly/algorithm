/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let head =0 ,tail=nums.length-1,mid
    while(tail-head>3){
        mid=(head+tail)>>1
        if(nums[mid]>target){
            tail=mid
        }else if(nums[mid]==target){
            return mid
        }else{
            head=mid+1
        }
    }
    for(let i=head;i<=tail;i++){
        if(nums[i]>=target){
            return i
        }
    }
    return nums.length
};
var searchInsert = function(nums, target) {
    let head = 0,tail=nums.length-1,res=nums.length,mid
    while(head<=tail){
        mid = ((tail-head)>>1)+head
        if(target<=nums[mid]){
            res = mid
            tail=mid-1
        }else{
            head = mid+1
        }
    }
    return res
};