/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let a =[]
    let b =[]
    for(let i = 0;i<s.length;i++){
        if(s[i]=='#'&&a.length>0){
            a.pop()
        }else if(s[i]!='#'){
            a.push(s[i])
        }
    }
    for(let i = 0;i<t.length;i++){
        if(t[i]=='#'&&b.length>0){
            b.pop()
        }else if(t[i]!='#'){
            b.push(t[i])
        }
    }
    if(a.length!=b.length){return false}
    while(a.length){
        if(a.pop()!=b.pop()){
            return false
        }
    }
    return true
};