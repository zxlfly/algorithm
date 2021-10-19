/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length<2){return intervals}
    intervals.sort((a,b)=>a[0]-b[0])
    let res = []
    for(let x of intervals){
        if(res.length>0){
            let last = res[res.length-1]
            // 没有重叠
            if(x[0]>last[1]){
                res.push(x)
            }else{
                // 合并
                res[res.length-1][1]=Math.max(x[1],last[1])
            }
        }else{
            res.push(x)
        }
    }
    return res
};