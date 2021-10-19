/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        // 如果左边相等，就让右边大的排前面
        // 不相等就让小的在前面
        return a[0]==b[0]?b[1]-a[1]:a[0]-b[0]
    })
    let cut = 0
    let preEnd =0
    for(let x of intervals){
        if(x[1]>preEnd){
            cut++
            preEnd=x[1]
        }
    }
    return cut
};