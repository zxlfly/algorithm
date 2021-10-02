/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 function hasRepeate(s){
    let arr = []
    // s = s.split("")
    for(let i = 0;i<s.length;i++){
        if(arr[s[i]]){
            return true
        }
        arr[s[i]]=1
    }
    return false
}
var buddyStrings = function(s, goal) {
    if(s.length!=goal.length){return false}
    if(s==goal){return hasRepeate(s)}
    let i = 0,j
    while(s[i]==goal[i])i++
    j=i+1
    while(j<s.length&&s[j]==goal[j])j++
    // 证明后面的都一样
    if(j==s.length){return false}
    if(s[i]!=goal[j]||s[j]!=goal[i]){return false}
    j+=1
    while(j<s.length){
        if(s[j]!=goal[j]){
            return false
        }
        j++
    }
    return true
};