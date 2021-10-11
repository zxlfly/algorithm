/**
    * @param {number[][]} stones
    * @return {number}
    */
 class UnionSet {
    constructor(n) {
        this.boss = []
        this.count = []
        for (let i = 0; i < n; i++) {
            this.boss[i] = i
            this.count[i] = 1
        }
    }
    get(x) {
        return this.boss[x] = (this.boss[x] == x ? x : this.get(this.boss[x]))
    }
    morge(a, b) {
        if (this.get(a) == this.get(b)) { return }
        this.count[this.get(b)] += this.boss[this.get(a)]
        this.boss[this.get(a)] = this.get(b)
    }

}
var removeStones = function (stones) {
    let u = new UnionSet(stones.length)
    let mapx = new Map()
    let mapy = new Map()
    for (let i = 0; i < stones.length; i++) {
        let x = stones[i]
        if (mapx.has(x[0])) {
            u.morge(i, mapx.get(x[0]))
        }
        if (mapy.has(x[1])) {
            u.morge(i, mapy.get(x[1]))
        }
        mapx.set(x[0], i)
        mapy.set(x[1], i)
    }
    let res = 0
    for (let i = 0; i < stones.length; i++) {
        if (u.get(i) == i) {
            res++
        }
    }
    return stones.length - res
};