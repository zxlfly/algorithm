# 栈 
先入后出的结构，栈顶出入；适合处理完全包含关系的问题。  
这次的题目有些我没有直接使用栈来解决，但是思想是一样的。


## 题目来源[LeetCode](https://leetcode-cn.com/)
- 20:有效的括号
  - 左括号大于等于右括号
  - 最终相等
  - 为有效
- 面试题 03.04:化栈为队
- 682:棒球比赛
- 844:比较含退格的字符串
- 946:验证栈序列
- 1021:删除最外层的括号
- 1249:移除无效的括号
  - 就是移除多余的左右括号
- 145:二叉树的后序遍历
  - 二叉树根据根的遍历可分为前中后三种，指的是根放的位置
- 331:验证二叉树的前序序列化
  - 最后的节点肯定是空的#
  - 所以两个#消掉一个父节点变成#
  - 最后全部消掉只剩一个#就是真的
- 227:基本计算器 II
  - 用一个栈压入数字，一个栈压入操作符
  - 当操作符优先级小于等于上一个的时候
    - 将数字栈中的两个数字进行计算，出栈，结果入栈
    - 弹出操作符
  - 如果有括号的情况，需要压入括号，匹配括号内的计算  本题没有这种情况
- 636:函数的独占时间
- 1124:表现良好的最长时间段
  - 前缀和
  - 这题的值变化是连续的