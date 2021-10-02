/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    let stk = []
    for(let i = 0;i<s.length;i++){
        if(s[i].match(/[\(\[\{]/)){
            stk.push(s[i])
        }else if(s[i]==')'){
            if(stk[stk.length-1]!='('){return false}
            stk.pop()
        }else if(s[i]==']'){
            if(stk[stk.length-1]!='['){return false}
            stk.pop()
        }else if(s[i]=='}'){
            if(stk[stk.length-1]!='{'){return false}
            stk.pop()
        }
    }
    if(stk.length==0){return true}
    return false
};