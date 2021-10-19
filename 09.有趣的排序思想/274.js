/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a,b)=>a-b)
    let h =0,n=citations.length-1
    while(n>=0&&citations[n]>h){
        h++
        n--
    }
    return h
};