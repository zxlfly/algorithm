/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = []
    function dfs( ind, sum, buff) {
       if(sum==0){
           res.push(buff.slice())
           return
       }
       for(let i=ind;i<candidates.length;i++){
           if(candidates[i]>sum)break
           if(i>ind&&candidates[i]==candidates[i-1])continue
               dfs(i+1,sum-candidates[i],[...buff,candidates[i]])
       }
    }
    dfs( 0, target, [])
    return res
};