/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let stack = []
    let res = ''
    let num = 0
    for (let i = 0; i < s.length; i++) {
        // 数字
        if(s[i]<='9'&&s[i]>='0'){
            num=num*10+Number(s[i])
        }else if(s[i]=='['){
            stack.push({num,res})
            num=0
            res = ''
        }else if(s[i]==']'){
            let temp= stack.pop()
            let str = res 
            for (let x =1; x < temp.num; x++) {
                res+=str           
            }
            res=temp.res+res
        }else{
            res+=s[i]
        }
    }
    return res
};