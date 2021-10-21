/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    // 确定边界
    let left = Math.max(...weights)
    let right = weights.reduce((a, b) => a + b)
    let mid
    while(left<right){
        mid = (left +right)>>1
        // 计算天数
        let need = 1, cur = 0;
        for (const weight of weights) {
            if (cur + weight > mid) {
                need++;
                cur = 0;
            } 
            cur += weight;
        }
        if (need <= days) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left
};