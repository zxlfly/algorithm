/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    //  当二进制处理
    if(nums.length<2){return 0}
    let count = new Array(65536).fill(0)
    let temp=[nums.length]
    // 处理低16位
    for(let i=0;i<nums.length;i++){
        count[nums[i]%65536]+=1
    }
    for(let i =1;i<65536;i++){
        count[i]+=count[i-1]
    }
    for(let i =nums.length-1;i>=0;i--){
        temp[--count[nums[i]%65536]]=nums[i]
    }
    count = new Array(65536).fill(0)
    // 处理高16位
    for(let i =0;i<nums.length;i++){
        count[Math.floor((temp[i]/65536))]+=1
    }
    for(let i=1;i<65536;i++){
        count[i]+=count[i-1]
    }
    for(let i =temp.length-1;i>=0;i--){
        nums[--count[Math.floor((temp[i]/65536))]]=temp[i]
    }
    let res = 0
    for(let i =1;i<nums.length;i++){
        res = Math.max(res,nums[i]-nums[i-1])
    }
    return res
};