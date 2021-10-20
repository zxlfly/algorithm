/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let head = 0,tail=x,mid,res
    while(head<=tail){
        mid = (head+tail)>>1
        if(mid*mid<=x){
            head = mid+1
            res=mid
        }else{
            tail =mid-1
        }
    }
    return res
};