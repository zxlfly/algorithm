/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let stack = []
    for(let i = 0;i<ops.length;i++){
        if(ops[i]=='+'){
            let last = Number(stack.pop())
            let lastpre = Number(stack.pop())
            stack.push(lastpre)
            stack.push(last)
            stack.push(last+lastpre)
        }else if(ops[i]=='D'){
            let last = stack.pop()
            stack.push(last)
            stack.push(last*2)
        }else if(ops[i]=="C"){
            stack.pop()
        }else{
            stack.push(ops[i])
        }
    }
    let res = 0
    console.log(stack)
    while(stack.length>0){
        let a = Number(stack.pop())
        res += a
    }
    return res
};