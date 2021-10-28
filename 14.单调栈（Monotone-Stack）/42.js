/**
 * @param {number[]} height
 * @return {number}
 */
//动态规划
 var trap = function(height) {
    let res = 0
    // 计算对应当前列的左右最高的高度
    // 记录对应下标出，左右最高的位置
    let leftMax=[] ,rightMax=[]
    leftMax=height[0]
    for (let i = 1; i < height.length; i++) {
        leftMax[i]=Math.max(leftMax[i-1],height[i])
    }
    rightMax=height[height.length-1]
    for (let i =height.length-2; i >=0; i--) {
        rightMax[i]=Math.max(rightMax[i+1],height[i])
    }
    for (let i = 0; i < height.length; i++) {
        res+= Math.min(leftMax[i],rightMax[i])-height[i]
    }
    return res
};
// 单调栈（单调递减）
var trap = function(height) {
    let res = 0
    let s =[]
    for(let i=0;i<height.length;i++){
        // 栈不为空，且当前元素大于栈顶元素
        while (s.length&&height[i]>height[s[s.length-1]]) {
            let now = s.pop()
            if(s.length==0)continue
            let a = height[i]-height[now]
            let b = height[s[s.length-1]]-height[now]
            // 可接雨水的高度
            let h = Math.min(a,b)
            // 可接雨水的宽度
            let w = i-s[s.length-1]-1
            res+=w*h
        }
        s.push(i)
    }
    return res
};