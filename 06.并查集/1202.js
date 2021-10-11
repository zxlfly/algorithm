/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 class UnionSet {
    constructor(n) {
        this.boss = []
        for (let i = 0; i < n; i++) {
            this.boss[i] = i
        }
    }
    get(x) {
        return this.boss[x] = (this.boss[x] == x ? x : this.get(this.boss[x]))
    }
    morge(a, b) {
        this.boss[this.get(a)] = this.get(b)
    }
}
var smallestStringWithSwaps = function (s, pairs) {
    if (s.length == 0) { return s }
    let u = new UnionSet(s.length)
    for (let x of pairs) {
        u.morge(x[0], x[1])
    }
    //  这里可以使用优先队列
    let chars = new Array(s.length).fill(0).map(()=>new Array())
    for (let i = 0; i < s.length; i++) {
        chars[u.get(i)].push(s[i])
    }
    chars.forEach(x=>{
        x.sort()
    })
    let res = ""
    for(let i =0;i<s.length;i++){
        res +=chars[u.get(i)].shift()
    }
    return res
};