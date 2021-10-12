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
      for (let i = 0; i < this.color.length; i++) {
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
# 图
-  包含顶点集和边集
-  两个定点相连称为**邻接**
   -  定点与边的关系称为**关联**
- 若邻接定点的次序无所谓则称为**无向边**
  - 图里面所有的边都是无向边，就称为**无向图**
- 如果边是有序的例如a-->b则称为**有向边**
  - 图里所有的边都是有向的，就称为**有向图**
- 如果上面两种都有就是**混合图**
- 定点z-->b-->c所形成的路线称为**路径**
  - 如果没有出现重复节点就是简单路径
  - 如果起点和终点重合，称为**回路**或者**环**
    - 环路也有简单之分
- **简单图**
  - 不存在重复的边
  - 不存在顶点到自身的边
- **多重图**
  - 某两个节点之间边数多于一条，又允许顶点到自身的边
  - 概念上与简单图相反
- **完全图**
  - 对于无向图
    - 任何两个节点之间都有边
  - 对于有向图
    - 任何两个定点之间都存在方向相反的边
- **子图**
  - 如果有两个图a和b，a的顶点集和边集都是b的子集，则a是b的子图
- **连通图**
  - 如果定点a到b之间有路径存在，则称为a和b是连通的
  - 如果图里面任意两个定点都是连通的，则称为连通图
- **连通分量**
  - 一个图里有不相连的部分，这些不相连的部分本身任意两个定点都是连通的
  - 那么这些部分就是连通分量
  - 极小连通子图
    - 又要保持连通又要保持边最少
  - 极大连通子图
    - 本身是一个连通图
- **生成树**
  - 联通图的生成树是包含图中全部定点的一个极小连通子图
  - 即n个定点，生成n-1条边
- **度、入度、出度**
  - 每个定点的度定义为
    - 以该顶点为一个端点的边的数目
  - 对于无向图
    - 顶点的度指与顶点关联的边的条数
  - 对于有向图
    - 入度：顶点v的度指以顶点v为终点的有向边数量
    - 出度：顶点v的出度指以顶点v为起点的有向边的数目
- **握手定理**
  - 由于每条边都关联两个顶点
    - 姑无向图中全部顶点的度数之和等于边数之和的二倍
  - 由于每条有向边都关联一个起点和一个终点
    - 姑有向图中全部顶点的入度之和等于出度之和等于有向边的数目和
- **边权**
  - 在一个图里，每条边都可以标上具有某种含义的数值，该数值称为该条边的权值
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
- 721: 账户合并
  - 这一题我最先想的是一个map解决，还可以少循环，但是不能通过所有用例
  - 出现了合并错误的情况，且无法解决这种特定情况
  - 这题还是得使用3个map
  - **邮箱标记map（emailsToCount）用户名map（emailsToName）**
    - 记录每个邮箱是第几个出现的
    - 记录每个邮箱对应的用户名
    - 不记录重复的
    - 合并
      - 通过邮箱数量创建并查集
      - 遍历源数据
      - 拿到第一个邮箱，获取emailsToCount中对应的标记
      - 从下一个邮箱开始，获取标记
      - 两者合并
  - 通过邮箱数量创建并查集
  - **根据邮箱生成的并查集中的根生成对应的map(rootToEamil)**
    - 这个其实就已经分好邮箱了
    - 还缺用户名
  - **合并**
    - 遍历rootToEamil的values
    - sort一下
    - 获取第一个邮箱对应的用户名
    - 生成带用户名的邮箱数组
  - return
- 765: 情侣牵手
  - 最少次数=情侣对数-1
  - 满足情侣条件：偶数值+1=基数值
  - 因为是从0开始的
- 685: 冗余连接 II