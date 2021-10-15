/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 function getMid(...arr){
    arr.sort((a,b)=>a-b)
    return arr[1]
}
function sort(arr,left,right,k){
    if(left >= right){return}
    let x = left
    let y = right
    let mid = getMid(arr[left],arr[right],arr[(left+right)>>1])
    do{
        while (arr[x] < mid) { x++ }
        while (arr[y] > mid) { y-- }
        if(x<=y){
            [arr[x],arr[y]]=[arr[y],arr[x]]
            x++
            y--
        }
    }while(x<=y)
    if(y-left+1==k){return}
    if(y-left+1>k){
        // 超过k了，右边的值不用管了
        sort(arr,left,y,k)
    }else{
        // 小于k，左边的值还需要增加
        sort(arr,x,right,k-x+left)
    }
}
var smallestK = function(arr, k) {
    sort(arr,0,arr.length-1,k)
    return arr.slice(0, k);
};