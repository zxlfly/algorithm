# 堆（适合维护集合最值问题）
**大顶堆**：任意的三元素之间，父元素都大于子元素  
- 最大值在顶层
- 第二大的值在第二层
- 第三大的值在2，3层中
- 第四大的值在2，3，4层中
- ......
**小顶堆**：任意的三元素之间，父元素都小于子元素  
- 最小值在顶层
- 第二小的值在第二层
- 第三小的值在2，3层中
- 第四小的值在2，3，4层中
- ......

## 优先队列
堆是优先队列的实现方式
### js实现一个堆
```
class Heap {
    /**
    * @param {string} type 堆的类型。默认大顶堆，min为小顶堆
    */
    //实际后面的题目不是完全使用的这个堆，有的根据题目要求有改动
    //主要在于pop方法和comparator方法
    constructor(type) {
        this.data = []
        this.count = 0
        this.comparator = (a, b) => {
            if (type == 'min') {
                return a - b < 0
            }
            return a - b > 0
        }
    }
    shift_up(index) {
        // 如果父节点值小于当前元素节点值，就交换
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex])) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    shift_down(index) {
        // 最大子节点下标
        let lastIndex = this.count - 1
        // 是否有子节点
        while (index * 2 + 1 <= lastIndex) {
            let leftIndex = index * 2 + 1
            let rightIndex = index * 2 + 2
            // 需要指向大值，初始为ind
            let findIndex = index
            // 比左子树小，更新为左子树的值
            if (this.comparator(this.data[leftIndex], this.data[findIndex])) {
                findIndex = leftIndex
            }
            // 对右子树进行判断(先判断是否有右子树)
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex])) {
                findIndex = rightIndex
            }
            // 最大值就是自己
            if (findIndex == index) { break }
            // 交换
            this.swap(findIndex, index);
            index = findIndex
        }
    }
    push(val) {
        this.data[this.count++] = val
        this.shift_up(this.count - 1)
    }
    pop() {
        if (this.count == 0) { return }
        // 将首尾元素值互换，不删掉可以实现排序
        this.swap(0, this.count - 1)
        this.count--
        this.shift_down(0)
    }
    top() {
        return this.data[0]
    }
    size() {
        return this.count
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
}
```

## 题目来源[LeetCode](https://leetcode-cn.com/)
- 剑指 Offer 40：最小的k个数
- 1046：最后一块石头的重量
- 703：数据流中的第 K 大元素
- 215：数组中的第K个最大元素
- 373： 查找和最小的K对数字
- 692: 前K个高频单词
- 295: 数据流的中位数
- 面试题 17.20: 连续中值(可以说和上题一样...)
- 264： 丑数 II
- 313: 超级丑数
- 1753: 移除石子的最大得分
- 1801: 积压订单中的订单总数
- 355： 设计推特