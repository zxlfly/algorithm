/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function sort(arr,l,r,res){
    if(l>=r){return}
    let mid = (l+r)>>1
    sort(arr,l,mid,res)
    sort(arr,mid+1,r,res)
    let temp = []
    let p1 =l
    let p2 =mid+1
    while(p1<=mid||p2<=r){
        if(p2>r||p1<=mid&&arr[p1].val>arr[p2].val){
            res[arr[p1].ind]+=(r-p2+1)
            temp.push(arr[p1])
            p1++
        }else{
            temp.push(arr[p2])
            p2++
        }
    }
    for(let i =l;i<=r;i++)arr[i]=temp[i-l]
}
var countSmaller = function(nums) {
    if(nums.length<=1){return [0]}
    let arr = []
    let res = []
    for(let i =0;i<nums.length;i++){
        arr.push({
            val:nums[i],
            ind:i
        })
        res.push(0)
    }
    sort(arr,0,arr.length-1,res)
    return res
};