# 哈希表
解决快速索引数据的问题  
## 哈希函数
将任意数据映射为数组下标，哈希操作就是将高维数据映射到低维数据（下标）。  
这个过程可能存在冲突（哈希冲突）。
- 解决方法
  - 开放地址发
    - 冲突了就再计算，计算规则很灵活。
  - 再哈希法
    - 设计多个哈希函数，冲突就调用下一个继续操作
    - 一般需要配合其他方式兜底
  - 建立公共溢出区
  - 链式地址发（拉链发）
    - 每个位置是链表的头结点，就可以存多个了
### 开放地址发
```
class HashTable{
    constructor(){
        this.table = new Array(100)
        this.flag = new Array(100)
        this.count = 0
    }
    insert(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        if(this.flag[ind]!=true){
            this.table[ind]=x
            this.flag[ind]=true
            this.count++
            if(this.count*100>this.table.length*75){
                this.expand()
            }
        }
    }
    find(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        return this.flag[ind]==true?true:false
    }
    expand(){
        this.table=this.table.concat(new Array(this.table.length))
        this.flag=this.flag.concat(new Array(this.table.length))
    }
    hash_fn(x){
        // BKDRHash
        let seed = 131
        let hash = 0
        for (let i = 0; x[i]; i++) {
            hash = hash*seed + x.charCodeAt(i) 
        }
        return hash%this.table.length
    }
    reacalc_ind(ind,x){
        let t = 1
        while(this.flag[ind]&&this.flag[ind]!=x){
            ind+=t*t
            t+1
            ind %=this.table.length
        }
        return 
    }
}
```
### 建立公共溢出区
```
class HashTable{
    constructor(){
        this.set = new Set()
        this.table = new Array(100)
        this.flag = new Array(100)
        this.count = 0
    }
    insert(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        if(this.flag[ind]!=true){
            this.table[ind]=x
            this.flag[ind]=true
            this.count++
            if(this.count*100>this.table.length*75){
                this.expand()
            }
        }else{
            // 放入公共溢出区
            this.set.add(x)
        }
    }
    find(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        if(this.flag[ind]!=true){
            return false
        }
        if(this.table[ind]==x){
            return true
        }
        return this.set.has(x)
    }
    expand(){
        this.table=this.table.concat(new Array(this.table.length))
        this.flag=this.flag.concat(new Array(this.table.length))
        this.set.forEach(x=>{
            this.insert(x)
            this.set.delete(x)
        })
    }
    hash_fn(x){
        // BKDRHash
        let seed = 131
        let hash = 0
        for (let i = 0; x[i]; i++) {
            hash = hash*seed + x.charCodeAt(i) 
        }
        return hash%this.table.length
    }
    reacalc_ind(ind,x){
        return 
    }
}
```
### 链式地址发（拉链发）
```
//不用链表记录用数组也是可以的
class Node{
    constructor(data=null,next=null){
        this.data=data
        this.next=next
    }
    add(x){
        this.next=x
    }
}
class HashTable{
    constructor(){
        this.table = new Array(100)
        this.count = 0
    }
    insert(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        let p = this.table[ind]
        if(p==null){
            this.count++
            this.table[ind]=new Node(x)
        }else if(p.data==x){
            return '存在'
        }else{
            while(p.next&&p.next.data!=x){
                p=p.next
            }
            if(p.next==null){
                p.add(new Node(x))
                this.count++
                if(this.count>this.table.length*3){
                    expand()
                }
            }
        }
        
    }
    find(x){
        let ind = this.hash_fn(x)
        this.reacalc_ind(ind,x)
        let p = this.table[ind]
        while(p&&p.data!=x){
            p=p.next
        }
        return p!=null
    }
    expand(){
        this.table=this.table.concat(new Array(this.table.length))
    }
    hash_fn(x){
        // BKDRHash
        let seed = 131
        let hash = 0
        for (let i = 0; x[i]; i++) {
            hash = hash*seed + x.charCodeAt(i) 
        }
        return hash%this.table.length
    }
    reacalc_ind(ind,x){
        return 
    }
}
```
## 布隆过滤器
传统哈希表，存储空间与元素数量有关。    
布隆过滤器，存储空间与元素数量无关。  
**布隆过滤器**映射一个值需要使用多个不同的哈希函数生成多个哈希值，并对生成的哈希值指向的位置设置为1。当我们查找的时候返回的哈希值有不为1的就说明一定不存在，但是如果返回的都是1也不能说明一定存在，只能说可能存在，因为数据多了，可能会出现对应下标位置为1的情况。  
通常使用在大数据量的场景，信息安全有要求的场景。

## 题目来源[LeetCode](https://leetcode-cn.com/)
- 705： 设计哈希集合
- 706:  设计哈希映射
- 面试题 16.25: LRU 缓存
  - 哈希链表
  - 这题不是使用链表也可以 代码量更少
- 535：TinyURL 的加密与解密
- 187: 重复的DNA序列
- 318: 最大单词长度乘积
- 240: 搜索二维矩阵 II
- 979: 在二叉树中分配硬币
- 430: 扁平化多级双向链表
- 863: 二叉树中所有距离为 K 的结点
  - 可以使用map类型先记录一遍所有val对应的父节点
    - 用于向上搜索
  - 从target开始
    - 递归左子树
    - 递归右子树
  - 然后找target的父节点，向上查找
  - 需要记录深度，和是否访问过（每次递归将当前节点传入）