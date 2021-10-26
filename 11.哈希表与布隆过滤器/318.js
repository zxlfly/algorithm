/**
 * @param {string[]} words
 * @return {number}
 */
 function s(x){
    return x.charCodeAt(0)-"a".charCodeAt(0)
}
var maxProduct = function(words) {
    let mark = []
    for (let i = 0; i < words.length; i++) {
        // 将每个单词转换成26位的二进制
        let m =0
        for(let x of words[i]){
            m |=(1<<s(x))
        }
        mark.push(m)
    }
    let res = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            // 如果有相同的就不会是0
            if(mark[i]&mark[j]){continue}
            res = Math.max(res,words[i].length*words[j].length)
        }
    }
    return res
};