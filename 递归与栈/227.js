/**
 * @param {string} s
 * @return {number}
 */
 function priority(x){
    switch(x){
        case "*":
        case "/":
            return 2
        case "+":
        case "-":
            return 1
        default :
            return -1
    }
}
function calc(a,b){
    let l1 = Number(a.pop())
    let l2 = Number(a.pop())
    switch(b[b.length-1]){
        case "*":
            return l2*l1
        case "/":
            return l2/l1
        case "+":
            return l2+l1
        case "-":
            return l2-l1
    }
}
var calculate = function(s) {
    s+="@"
    let a = []
    let b = []
    let n = ""
    for(let i =0;i<s.length;i++){
        if(s[i]==" ")continue
        if(s[i].match(/[0-9]/)){
            n=""+n+s[i]
        }else{
            a.push(n)
            n=""
            while(b.length&&priority(s[i])<=priority(b[b.length-1])){
                    a.push(String(calc(a,b)).split(".")[0])
                    b.pop()
            }
            b.push(s[i])
        }
        
    }
    return a.pop()
};