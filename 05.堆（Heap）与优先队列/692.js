/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let list = new Map()
    for(item of words){
        list.set(item,(list.get(item)||0)+1)
    }
    let res = []
    for(item of list.keys()){
        res.push(item)
    }
    res.sort((a,b)=>{
        return list.get(a)==list.get(b)?a.localeCompare(b):list.get(b)-list.get(a)
    })
    return res.slice(0,k)
};