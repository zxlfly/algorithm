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
      return this.boss[x] = (this.boss[x] == x ? x : this.get(this.boss[x]))
   }
   morge(a, b) {
      this.boss[this.get(a)] = this.get(b)
   }
}
var findRedundantDirectedConnection = function (edges) {
   // 边数
   let len = edges.length + 1
   let u = new UnionSet(len)
   // 记录每个节点的父节点
   let parent = []
   // 初始化
   for (let i = 1; i < len; i++) {
      parent[i] = i
   }
   // 产生双父节点
   let twofa = -1
   // 产生环路
   let cycle = -1
   for (let i in edges) {
      let x = edges[i]
      // 两个父节点
      if (parent[x[1]] != x[1]) {
         twofa = i
      }else{
         parent[x[1]]=x[0]
         // 在并查集中分别找到这两个节点的父节点
         // 看是不是一个，是的就是环
         if(u.get(x[0])==u.get(x[1])){
            cycle=i
         }else{
            // 如果祖先不同则进行合并。
            u.morge(x[0],x[1])
         }
      }
   }
   if(twofa<0){
      // 所有的节点都只有一个父节点，
      // 返回环
      return edges[cycle]
   }else if(cycle>=0){
      // 找到的冲突边是edges[twofa]
      // 有环 所以附加的边不会是edges[twofa]
      // 根据edges[twofa][1]找到对应的顶点
      return [parent[edges[twofa][1]],edges[twofa][1]]
   }else{
      // 无环返回有冲突的
      return edges[twofa]
   }
};