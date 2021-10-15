/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length-1
    let max = 0
    while(l<r){
        max = Math.max(Math.min(height[l],height[r])*(r-l),max)
        if(height[l]<=height[r]){
            l++
        }else{
            r--
        }
    }
    return max
};