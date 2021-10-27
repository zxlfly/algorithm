/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let res = []
    function dfs(target,buff,ind){
        if(ind==candidates.length)return
        if(target==0){
            res.push(buff)
            return
        }
        // 处理不选择当前数字的情况
        dfs(target, buff, ind + 1);
        // 处理选择当前数字的情况
        if (target - candidates[ind] >= 0) {
            dfs(target - candidates[ind], [...buff, candidates[ind]], ind);
        }
    }
    dfs(target,[],0)
    return res
};