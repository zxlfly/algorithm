/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    // 前缀和
    let arr = [0]
    for(let i = 0,pre=0;i<hours.length;i++){
        // hours[i]=hours[i]>8?1:-1
        // arr.push(hours[i]+pre)
        // pre=arr[arr.length-1]
        if(hours[i]=hours[i]>8){
            arr[i+1]=arr[i]+1
        }else{
            arr[i+1]=arr[i]-1
        }
    }
    let s = [0]
    // 第一个默认为0，找出比0还小的下标，越往后只会越小
    for(let i =1;i<arr.length;i++){
        if(arr[i]<arr[s[s.length-1]]){
            s.push(i)
        }
    }
    let max = 0
    for(let i =arr.length;i>max;i--){
        // 找出与s里面保存的下标对应元素大的
        while(s.length&&arr[s[s.length-1]]<arr[i]){
            // 求天数
            // 因为是倒叙遍历不管结果如何，后面的都不会比这个大了
            // 所以直接出栈了
            max = Math.max(max,i-s.pop())
        }
    }
    // 也可以这样不先找小的 直接暴力比较
    // for(let i = 0;i<arr.length-1;i++){
    //     for(let j = i+1;j<arr.length;j++){
    //         if(arr[j]-arr[i]>0){
    //             max = Math.max(max,j-i)
    //         }
    //     }
    // }
    return max
};
