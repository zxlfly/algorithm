/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
    if(nums.length<2){return []}
    let res =new Map()
    function dfs (start,arr){
        // 去重
        if(arr.length>=2){
            if(!res.has(String(arr))){
                res.set(String(arr),[...arr])
            }
        }
        // 枚举
        for (let i = start; i < nums.length; i++) {
            let pre = arr[arr.length-1]
            let cur = nums[i]
            if(arr.length==0||pre<=cur){
                arr.push(cur)
                dfs(i+1,arr)
                arr.pop()
            }
        }
    }
    dfs(0,[])
    return Array.from(res.values())
};