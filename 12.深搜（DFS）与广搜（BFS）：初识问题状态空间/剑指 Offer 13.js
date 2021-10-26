/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 class Node{
    constructor(i,j){
        this.i=i
        this.j=j
    }
}
function getAdd(x,y){
    let arr = String(x).split("")
    arr = arr.concat(String(y).split(""))
    return arr.reduce((a,b)=>a*1+b*1)
}
var movingCount = function (m, n, k) {
    let q = []
    let set = new Set()
    q.push(new Node(0,0))
    // 存入需要原定0,0 为第一个  值为0
    set.add(0)
    let dir = [[0,1],[0,-1],[1,0],[-1,0]]
    while (q.length) {
        let cur = q.shift()
        for(let i=0;i<4;i++){
            let x = cur.i+dir[i][0]
            let y = cur.j+dir[i][1]
            if(x<0||x>=m||y<0||y>=n)continue
            if(getAdd(x,y)>k)continue
            let s =x*n+y
            if(set.has(s))continue
            set.add(s)
            q.push(new Node(x,y))
        }
    }
    return set.size
};