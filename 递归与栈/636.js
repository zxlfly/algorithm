/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
    let stack = []
    let res = []
    for(let i =0,pre = 0;i<logs.length;i++){
        let item = logs[i].split(':')
        if(item[1]=='start'){
            if(stack.length>0){
                res[stack[stack.length-1]]=Number(res[stack[stack.length-1]]?res[stack[stack.length-1]]:0)+Number(item[2])-pre
            }
            pre = Number(item[2])
            stack.push(item[0])
        }else{
            res[item[0]] = Number(res[item[0]]?res[item[0]]:0)+ Number(item[2])-pre+1
            stack.pop()
            pre = Number(item[2])+1
        }
        
    }
    return res
};