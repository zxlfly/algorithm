/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    if(bills.length==0){return false}
    let five=ten=0
    for(let i =0;i<bills.length;i++){
        if(bills[i]==5){
            five++
        }else if(bills[i]==10){
            if(five==0){
                return false
            }
            ten++
            five--
        }else{
            if(five>0){
                if(ten>0){
                    ten--
                    five--
                }else if(five>=3){
                    five-=3
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }
    return true
};