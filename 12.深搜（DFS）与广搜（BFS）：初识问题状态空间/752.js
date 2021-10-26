/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 class Node {
    constructor(s = "",  l = 0) {
        this.s = s
        this.l = l
    }
}
function getStr(s,i,k){
    let ret = s
    let n = Number(ret[i])
    if(k==0){
        n+=1
    }else{
        n-=1
    }
    if(n>9)n=0
    if(n<0)n=9
    ret = ret.split("")
    ret[i]=n
    return ret.join('')
}
var openLock = function (deadends, target) {
    // 队列
    let q = []
    // 记录状态时候到达过
    let map = new Set()
    for(let x of deadends)map.add(x)
    if(map.has('0000'))return -1
    map.add('0000')
    q.push(new Node('0000',0))
    while (q.length) {
        let cur = q.shift()
        if(cur.s==target){return cur.l}
        // 四个数字
        for (let i = 3; i >=0; i--) {
            // 上下两种调法
            for(let k =0;k<2;k++){
                let s = getStr(cur.s,i,k) 
                // 记录中存在
                if(map.has(s))continue
                map.add(s)
                q.push(new Node(s,cur.l+1))
            }            
        }
    }
    return -1
};