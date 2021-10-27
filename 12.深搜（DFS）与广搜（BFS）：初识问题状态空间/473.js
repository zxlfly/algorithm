/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// 分成四等分，可以就行
var makesquare = function(matchsticks) {
    if(matchsticks.length<1){return false}
    let len = matchsticks.reduce((a,b)=>a+b)
    if(len%4!=0){return false}
    matchsticks.sort((a,b)=>b-a)
    let arr = new Array(4).fill(0)
    function dfs(ind){
        if(ind==matchsticks.length){
            return arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==arr[3]
        }
        for(let i =0;i<4;i++){
            // 原数据是倒序的，可以加上最小的值比较一下，超了就continue
            if(arr[i]+matchsticks[matchsticks.length-1]>len/4)continue
            if(arr[i]+matchsticks[ind]<=len/4){
                arr[i]+=matchsticks[ind]
                if(dfs(ind+1))return true
                arr[i]-=matchsticks[ind]
            }
        }
        return false
    }
    return dfs(0)
};