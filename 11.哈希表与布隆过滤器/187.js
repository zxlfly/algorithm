/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    let map = new Map()
    for(let i =0,j=s.length-9;i<j;i++){
        if(map.has(s.substr(i,10))){
            map.set(s.substr(i,10),map.get(s.substr(i,10))+1)
        }else{
            map.set(s.substr(i,10),1)
        }
    }
    let res = []
    for(let x of map){
        if(x[1]>1){
            res.push(x[0])
        }
    }
    return res
};