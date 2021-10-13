/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    if(nums.length<=1){return nums}
    let x = 0,y=nums.length-1
    do{
        while(x<y+1&&nums[x]%2){
            x++
        }
        while(y>=0&&nums[y]%2==0){
            y--
        }
        if(x<=y){
            [[nums[x]],[nums[y]]]=[[nums[y]],[nums[x]]]
            x++
            y--
        }
    }while(x<=y)
    return nums
};