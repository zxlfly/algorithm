/**
 * @param {number[][]} edges
 * @return {number[]}
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
var findRedundantConnection = function(edges) {
    let u = new UnionSet(edges.length)
    for(let item of edges){
        if(u.get(item[0])==u.get(item[1])){
            return item
        }
        u.morge(item[0],item[1])
    }
    return []
};