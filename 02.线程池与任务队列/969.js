/**
 * @param {number[]} arr
 * @return {number[]}
 */
 function getMaxIndex(a){
    let max = 0
    for(let i = 0 ;i<a.length;i++){
        if(a[i]>a[max]){
            max=i
        }
    }
    return max
}
function reverse(a,k){
    if(k<1){return}
    let i =0
    while(i<k){
        [a[i],a[k]]=[a[k],a[i]]
        i++
        k--
    }
}
var pancakeSort = function(arr) {
    let ans = []
    let max
    while (arr.length>1) {
        max = getMaxIndex(arr)
        max>0&&(ans.push(max+1))
        reverse(arr,max)
        reverse(arr,arr.length-1)
        ans.push(arr.length)
        arr.pop()
    }
    return ans
};