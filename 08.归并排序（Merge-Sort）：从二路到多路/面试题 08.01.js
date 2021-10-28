/**
 * @param {number} n
 * @return {number}
 */
 var waysToStep = function(n) {
    if(n<3)return n
    let a =1,b=1,c=2,d
    for(let i =3;i<=n;i++){
        d=(a+b+c)%1000000007
        a=b
        b=c
        c=d
    }
    return d
};