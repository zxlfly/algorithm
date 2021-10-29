# 计数排序
统计下每种数据出现的次数，再根据值排序的要求排序。
# 基数排序的基础知识
从个位开始，基于计数排序（以每一位为基数），然后求前缀和，算出尾坐标；接着逆序扫描，将位数值对应的元素放到对应的区间（从最后一个位置开始放）。这个过程中排序的时候，如果位数相同的值，排完序之后相对位置是不变的（稳定）。
```
// 对整型正数排序
// 转换成二进制为32位
// 将后16位作为低位，前16位作为高位
// 16位二进制可表示最大数字为65536
function radix_sort(arr, len) {
    let count = new Array(65536).fill(0)
    let temp = new Array(len)
    // 低位排序
    for (let i = 0; i < len; i++) {
        // 计数
        count[arr[i]&0xffff]+=1
    }
    // 求前缀和 到得对应数字的区域末尾下标
    for (let i = 1; i < 65536; i++) {
        count[i]+=count[i-1]     
    }
    // 逆序遍历
    for (let i = len-1; i >= 0; i--) {
        temp[--count[arr[i]&0xffff]]=arr[i]
    }
    // 高位排序
    count = new Array(65536).fill(0)
    // 高位排序
    for (let i = 0; i < len; i++) {
        // 计数
        count[(temp[i]&0xffff0000)>>16]+=1
    }
    // 求前缀和
    for (let i = 1; i < 65536; i++) {
        count[i]+=count[i-1]     
    }
    // 逆序遍历
    for (let i = len-1; i >= 0; i--) {
        arr[--count[(temp[i]&0xffff0000)>>16]]=temp[i]
    }
}
```
# 拓扑排序的基础知识
对有向无环图所有节点进行排序，当节点的入度为零就可以分离出来入队



## 题目来源[LeetCode](https://leetcode-cn.com/)
- 1122： 数组的相对排序
- 164： 最大间距
- 274： H 指数
- 207： 课程表
- 210： 课程表 II
- 56： 合并区间
- 1288： 删除被覆盖区间
- 491： 递增子序列
- 面试题 04.12： 求和路径
- 300： 最长递增子序列
- 剑指 Offer II 115： 重建序列
