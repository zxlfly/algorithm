/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    let arr = [1]
    let p3=p5=p7=0
    while(arr.length<k){
        let ans = arr[p3]*3
        ans = Math.min(ans,arr[p5]*5)
        ans = Math.min(ans,arr[p7]*7)
        if(arr[p3]*3==ans)p3++
        if(arr[p5]*5==ans)p5++
        if(arr[p7]*7==ans)p7++
        arr.push(ans)
    }
    return arr[k-1]
};