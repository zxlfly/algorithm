# 并查集
一类抽象化程度很高的数据结构
## Quick-Find(染色记录,记录颜色)
```
class Quick_Find {
   constructor(n) {
      this.color = []
      for (let i = 0; i < n; i++) {
         this.color[i] = i
      }
   }
   find(x) {
      return this.color[x]
   }
   morge(a, b) {
      if (this.color[a] == this.color[b]) { return }
      let cb = this.color[b]
      for (let i = 0; i < n; i++) {
         if (this.color[i] == cb) {
            this.color[i] = this.color[a]
         }
      }
   }
}
```
## Quick-Union（树形结构记录，记录父节点编号）
```
class Quick_Union {
   constructor(n) {
      this.boss = []
      for (let i = 0; i < n; i++) {
         this.boss[i] = i
      }
   }
   find(x) {
      if(this.boss[x]==x)return x
      return this.find[this.boss[x]]
   }
   morge(a, b) {
      let fa = this.find(a)
      let fb = this.find(b)
      if(fa==fb){return}
      this.boss[fa]=fb
      return
   }
}
```
## Weighted_Quick_Union(权重是节点数量)
```
class Weighted_Quick_Union {
   constructor(n) {
      this.boss = []
      this.size=[]
      for (let i = 0; i < n; i++) {
         this.boss[i] = i
         this.size[i] = i
      }
   }
   find(x) {
      if(this.boss[x]==x)return x
      return this.find[this.boss[x]]
   }
   morge(a, b) {
      let fa = this.find(a)
      let fb = this.find(b)
      if(fa==fb){return}
      // 谁的节点数量多 说作为boss
      if(this.size[fa]<this.size[fb]){
         this.boss[fa]=fb
         this.size[fb]+=this.size[fa]
      }else{
         this.boss[fb]=fa
         this.size[fa]+=this.size[fb]
      }
      return
   }
}
```
## Weighted_Quick_Union_Path_Compression(在上面的基础上拍平路径)
```
class Weighted_Quick_Union_Path_Compression {
   constructor(n) {
      this.boss = []
      this.size=[]
      for (let i = 0; i < n; i++) {
         this.boss[i] = i
         this.size[i] = i
      }
   }
   find(x) {
      if(this.boss[x]==x)return x
      let root = this.find[this.boss[x]]
      // 没查找一个直接将查找的元素挂到根下面，优化下次查找速度
      this.boss[x]=root
      return root
   }
   morge(a, b) {
      let fa = this.find(a)
      let fb = this.find(b)
      if(fa==fb){return}
      // 谁的节点数量多 说作为boss
      if(this.size[fa]<this.size[fb]){
         this.boss[fa]=fb
         this.size[fb]+=this.size[fa]
      }else{
         this.boss[fb]=fa
         this.size[fa]+=this.size[fb]
      }
      return
   }
}
```
## Quick_Union_Path_Compression(实际使用较多的算法，编码复杂度小，更简单)
```
class Quick_Union_Path_Compression {
   constructor(n) {
      this.boss = []
      for (let i = 0; i < n; i++) {
         this.boss[i] = i
      }
   }
   find(x) {
      if(this.boss[x]==x)return x
      let root = this.find[this.boss[x]]
      // 没查找一个直接将查找的元素挂到根下面，优化下次查找速度
      this.boss[x]=root
      return root
   }
   morge(a, b) {
      let fa = this.find(a)
      let fb = this.find(b)
      if(fa==fb){return}
      this.boss[fa]=fb
      return
   }
}
```
## 解题使用的版本
```
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
```
## 题目来源[LeetCode](https://leetcode-cn.com/)
- 547： 省份数量
- 200： 岛屿数量
- 990： 等式方程的可满足性
- 684: 冗余连接
  - 原本就在一个集合中，去掉多余的联通操作
- 1319： 连通网络的操作次数
  - 就是求集合数-1
- 128： 最长连续序列
- 947： 移除最多的同行或同列石头
- 1202： 交换字符串中的元素