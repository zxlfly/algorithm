# 二叉树
每个节点子节点最多两个。有节点数-1条边  
度代表子节点数。n0=n2+1  
**完全二叉树**：只是在最后一层右侧的有节点没有，只少一个  
- 如果编号i的节点
  - 左孩子为2*i
  - 右孩子为2*i+1
- 那么就可以使用连续空间存储（数组）
  - 不需要记录子节点的位置
**满二叉树**：只有度为0和2的节点
**完美二叉树**：每一层节点都满了  
**二叉搜索树**：左子树节点都要小于根，右节点相反  
树里面，节点代表集合，边代表关系。

## 生成二叉树
```
class Node{
    constructor(key){
        this.key=key
        this.left = null
        this.right=null
    }
}
class Binarytree{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(this.root==null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,node){
        if(root.key>node.key){
            if(root.left!=null){
                this.insertNode(root.left,node)
            }else{
                root.left=node
            }   
        }else{
            if(root.right!=null){
                this.insertNode(root.right,node)
            }else{
                root.right=node
            }
        }
    }
}
```
- 二叉树
  - 完全二叉树
    - 维护集合最值
      - 堆
      - 优先队列
  - 多叉树/森林
    - 字符串及其相关转换问题
      - 字典树
      - AC自动机
    - 连通性问题
      - 并查集
  - 二叉排序树
    - 语言标准库中重要的数据检索容器的底层实现
      - AVL树
      - 2-3树
      - 红黑树
    - 文件系统、数据库底层重要数据结构
      - B-树/B-树

## 设计/理解递归程序
- 数学归纳法
  - 结构归纳法
- 赋予递归函数一个明确的意义
- 思考边界条件
- 实现递归过程
### 二叉树前序遍历
- 函数意义：前序遍历以root为根节点的二叉树
- 边界条件：root为空时不需要遍历
- 递归程序：前序遍历左子树、右子树

## 题目来源[LeetCode](https://leetcode-cn.com/)下面的题目主要是为了锻炼递归思想，所以采用的解法以递归为主。
- 144. 二叉树的前序遍历
- 589. N 叉树的前序遍历
- 226. 翻转二叉树
- 剑指 Offer 32 - II. 从上到下打印二叉树 II
- 107. 二叉树的层序遍历 II
- 103. 二叉树的锯齿形层序遍历
- 110. 平衡二叉树
- 112. 路径总和
- 105. 从前序与中序遍历序列构造二叉树
- 222. 完全二叉树的节点个数
- 剑指 Offer 54. 二叉搜索树的第k大节点
- 剑指 Offer 26. 树的子结构
- 662. 二叉树最大宽度
  - 满二叉树如果我们把每层节点按顺序编号
  - root.left=2*root
  - root.right=2*root+1
- 968. 监控二叉树