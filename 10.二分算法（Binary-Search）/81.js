/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    if(nums.length==0){return false}
    if(nums.length==1){return nums[0]==target}
    if(nums[0]==target||nums[nums.length-1]==target){return true}
    // 在出现前后多位相同时会有边界情况  所以去掉前后相同部分
    let head =0,tail=nums.length-1,mid
    while(head<nums.length&&nums[head]==nums[0])head++
    while(tail>=0&&nums[tail]==nums[0])tail--
    while(head<=tail){
        mid=(head+tail)>>1
        if(nums[mid]==target){return true}
        if(nums[mid]<=nums[tail]){
            if(target>nums[mid]&&target<=nums[tail]){
                head=mid+1
            }else{
                tail=mid-1
            }
        }else{
            if(target<nums[mid]&&target>=nums[head]){
                tail=mid-1
            }else{
                head=mid+1
            }
        }
    }
    return false
};