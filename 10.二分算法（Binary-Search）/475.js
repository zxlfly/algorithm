/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 function bsearch(arr,x){
    let head=0,tail=arr.length-1,mid
    while (tail-head>3) {
        mid = (head+tail)>>1
        if(arr[mid]>=x){
            tail=mid
        }else{
            head=mid+1
        }
    }
    for (let i = head; i <=tail; i++) {
        if(arr[i]>=x){return i}
    }
    return arr.length
}
var findRadius = function(houses, heaters) {
    heaters.sort((a,b)=>a-b)
    let res = -1
    for (let i = 0; i < houses.length; i++) {
        // res = Math.max(bsearch(heaters,heaters[i]),res)        
        let j = bsearch(heaters,houses[i])
        if(j==heaters.length){
            // 没有找到大的 取最后一个
            res = Math.max(houses[i]-heaters[heaters.length-1],res)
        }else{
            if(j==0||heaters[j]-houses[i]<Math.abs(heaters[j-1]-houses[i])){
                res = Math.max(heaters[j]-houses[i],res)
            }else{
                res = Math.max(Math.abs(heaters[j-1]-houses[i]),res)
            }
        }
    }
    return res
};