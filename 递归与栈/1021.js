/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let res = ''
    for(let i=pre=cur = 0 ;i<s.length;i++){
        if(s[i]=='('){
            cur++
        }else if(s[i]==')'){
            cur--
            if(cur==0){
                res+=s.substring(pre+1,i)
                pre = i+1
            }
        }
    }
    return res
};