/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    // 记录计算过的情况  可以哈希表
    let map = new Map()
    function dfs(i,n){
        if(i==nums.length){
            return n==target
        }
        let key = i+"/"+n
        if(map.has(key)){
            return Number(map.get(key))
        }
        let res = 0
        res+=dfs(i+1,n-nums[i])
        res+=dfs(i+1,n+nums[i])
        map.set(key,res)
        return res
    }
    return dfs(0,0)
};