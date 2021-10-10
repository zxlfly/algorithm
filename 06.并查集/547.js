/**
 * @param {number[][]} isConnected
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
 var findCircleNum = function(isConnected) {
     let n = isConnected.length
     let u=new UnionSet(n)
     for(let i =0;i<n;i++){
        for(let j =0;j<i;j++){
            if(isConnected[i][j]){
                u.morge(i,j)
            }
         } 
     }
     let res = 0
     for(let i =0;i<n;i++){
         if(u.get(i)==i){
             res++
         }
     }
     return res
 };