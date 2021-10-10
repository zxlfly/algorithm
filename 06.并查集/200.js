/**
 * @param {character[][]} grid
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
 var numIslands = function(grid) {
     let h = grid.length
     let l = grid[0].length
     let u =new UnionSet(h*l)
     for(let i =0;i<h;i++){
         for(let j = 0;j<l;j++){
             if(grid[i][j]==0){continue}
             // 看上
             if(i>0&&grid[i-1][j]==1){
                 u.morge((i-1)*l+j,i*l+j)
             }
             // 看左
             if(j>0&&grid[i][j-1]==1){
                 u.morge(i*l+j,i*l+j-1)
             }
         }
     }
     let res = 0
     for(let i =0;i<h;i++){
         for(let j = 0;j<l;j++){
             if(grid[i][j]==1&&u.get(i*l+j)==(i*l+j)){
                 res++
             }
         }
     }
     return res
 };