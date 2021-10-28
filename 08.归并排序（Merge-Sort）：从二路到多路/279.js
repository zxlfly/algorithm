/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let res = [0,1]
    for(let i =2;i<=n;i++){
        let min = Infinity
        for(let j =1;j*j<=i;j++){
            min = Math.min(min,res[i-j*j]+1)
        }
        res[i]=min
    }
    return res[n]
};