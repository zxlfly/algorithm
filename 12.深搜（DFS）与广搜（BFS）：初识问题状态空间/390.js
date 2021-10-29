/**
 * @param {number} n
 * @return {number}
 */
 var lastRemaining = function(n) {
    let start = 1 
    // 前进步数
    let step = 1
    // 方向
    let LR = true
    // 如果左到右start位置前进1
    // 右到左如果是基数也前进1
    // 每次step*2
    // 每次长度减半
    while(n>1){
        if(LR||n%2!=0){
            start+=step
        }
        n = n>>1
        step = step<<1
        LR=!LR
    }
    return start
};