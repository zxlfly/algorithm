/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
    let res = [1]
    let points = new Array(primes.length).fill(0)
    let min 
    for(let i =0;i<n;i++){
        min = res[points[0]]*primes[0]
        primes.forEach((prime,index)=>{
            min = Math.min(min,res[points[index]]*prime)
        })
        primes.forEach((prime,index)=>{
            if(res[points[index]]*prime==min){
                points[index]++
            }
        })
        res.push(min)
    }
    return res[n-1]
};