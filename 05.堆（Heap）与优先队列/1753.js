/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var maximumScore = function(a, b, c) {
    if(a>b){
        [b,a]=[a,b]
    }
    if(a>c){
        [c,a]=[a,c]
    }
    if(b>c){
        [c,b]=[b,c]
    }
    let x = c-b
    let res = 0
    if(a==0){
        return c-b
    }
    if(a<=x){
        res = a+b
    }else{
        a-=x
        if(a%2==1){a--}
        res = x +a +b-a/2
    }
    return res 
};