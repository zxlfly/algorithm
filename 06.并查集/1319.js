/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 class UnionSet {
    constructor(n) {
       this.boss = []
       for (let i = 0; i < n; i++) {
          this.boss[i] = i
       }
    }
    get(x) {
       return this.boss[x]=(this.boss[x]==x?x:this.get(this.boss[x]))
    }
    morge(a, b) {
       this.boss[this.get(a)]=this.get(b)
    }
}
var makeConnected = function(n, connections) {
    if(connections.length<n-1){return -1}
    let u = new UnionSet(n)
    for(let item of connections){
        u.morge(item[0],item[1])
    }
    let res = 0
    for(let i =0;i<n;i++){
        if(u.get(i)==i){
            res++
        }
    }
    return res -1
};