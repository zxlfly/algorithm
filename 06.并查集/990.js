/**
 * @param {string[]} equations
 * @return {boolean}
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
 var equationsPossible = function(equations) {
     // 26个字母
     let u = new UnionSet(26)
     for(item of equations){
         if(item[1]=="="){
             let a = item.charCodeAt(0) - 97
             let b = item.charCodeAt(3) - 97
             u.morge(a,b)
         }
     }
     for(item of equations){
         if(item[1]=="!"){
             let a = item.charCodeAt(0) - 97
             let b = item.charCodeAt(3) - 97
             if(u.get(a)==u.get(b)){
                 return false
             }
         }
     }
     return true
 };