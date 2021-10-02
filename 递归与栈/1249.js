/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    let ind = []
    for(let i =count=0;i<s.length;i++){
        if(s[i]=='('){
            count++
        }else if(s[i]==')'){
            count--
            if(count==-1){
                ind.push(i)
                count=0
            }
        }
    }
    for(let i =s.length-1,count=0;i>=0;i--){
        if(s[i]==')'){
            count++
        }else if(s[i]=='('){
            count--
            if(count==-1){
                ind.push(i)
                count=0
            }
        }
    }
    ind.sort((a,b)=>(b-a))
    for(let i = 0;i<ind.length;i++){
        s=s.substring(0,ind[i])+s.substring(ind[i]+1)
    }
    return s
};