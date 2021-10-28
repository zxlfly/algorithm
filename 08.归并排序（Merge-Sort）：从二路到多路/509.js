/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<2)return n
    let res = 0
    let p=0,q=1
    for(let i =2;i<=n;i++){
        res = p+q
        p = q
        q = res 
    }
    return res
};