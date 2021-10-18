/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //  计算前缀和
    let sun = [0]
    let s = 0
    nums.forEach(x=>{
        s+=x
        sun.push(s)
    })
    let res = []
    let min = 0
    // 记录最小的值
    //后面的每个值与其相减，求区间和
    for (let i = 1; i < sun.length; i++) {
        res.push(sun[i]-min)
        if(min>sun[i]){
            min=sun[i]
        }        
    }
    // 最后返回最大值即可
    return Math.max(...res)
};

var maxSubArray = function(nums) {
    let pre=0,max=nums[0]
    nums.forEach((x) => {
        // 如果和小于当前值，就覆盖以前的
        pre = Math.max(pre + x, x);
        max = Math.max(max, pre);
    });
    return max
};