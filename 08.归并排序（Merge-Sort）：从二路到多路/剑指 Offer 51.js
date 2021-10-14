/**
 * @param {number[]} nums
 * @return {number}
 */
 function sort(arr,l,r){
    if(l>=r){return 0}
    let res = 0
    let mid =(l+r)>>1
    res+=sort(arr,l,mid)
    res+=sort(arr,mid+1,r)
    let temp = []
    let x = l
    let y = mid+1
    while (x<=mid||y<=r) {
        if(y>r||x<=mid&&arr[x]<=arr[y]){
            temp.push(arr[x])
            x++
        }else{
            temp.push(arr[y])
            y++
            res+=mid-x+1
        }
    }
    for(let i = l;i<=r;i++){
        arr[i]=temp[i-l]
    }
    return res
}
var reversePairs = function(nums) {
    let res = sort(nums,0,nums.length-1)
    return res
};