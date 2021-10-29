/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 function dfs(candidates,n,ind,sum,buff,res){
    if(sum==0){
        res.push(buff.slice())
        return 
    }
    for(let i =ind;i<n;i++){
        if(candidates[i]>sum)break
        // 选择当前数字
        if(i>ind&&candidates[i]==candidates[i-1]){
            continue
        }
        buff.push(candidates[i])
        // 不选当前数字
        dfs(candidates,n,i+1,sum-candidates[i],buff,res)
        buff.pop()
    }
}
var combinationSum2 = function(candidates, target) {
candidates.sort((a,b)=>a-b)
let res = []
let n = candidates.length
dfs(candidates,n,0,target,[],res)
return res
};