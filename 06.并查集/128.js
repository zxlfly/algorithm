/**
 * @param {number[]} nums
 * @return {number}
 */
 class UnionSet {
    constructor(n) {
       this.boss = []
       this.count = []
       for (let i = 0; i < n; i++) {
          this.boss[i] = i
          this.count[i]=1
       }
    }
    get(x) {
       return this.boss[x]=(this.boss[x]==x?x:this.get(this.boss[x]))
    }
    morge(a, b) {
        if(this.get(a)==this.get(b)){return}
        this.count[this.get(b)]+=this.count[this.get(a)]
        this.boss[this.get(a)]=this.get(b)
    }
}
var longestConsecutive = function(nums) {
    let u = new UnionSet(nums.length)
    let map = new Map()
    for(let i =0;i<nums.length;i++){
        let x = nums[i]
        if(map.has(x)){
           continue 
        }
        if(map.has(x-1)){
            u.morge(map.get(x-1),i)
        }
        if(map.has(x+1)){
            u.morge(i,map.get(x+1))
        }
        map.set(x,i)
    }
    let res = 0
    for(let i =0;i<nums.length;i++){
        if(u.get(i)==i&&u.count[i]>res){
            res = u.count[i]
        }
    }
    return res
};