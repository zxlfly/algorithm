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
### js实现一个堆（下面有些题目使用了力扣集成的堆，但是到了703会出现超时问题，可以使用这个实现方式）
```
class Heap {
    /**
    * @param {string} type 堆的类型。默认大顶堆，min为小顶堆
    */
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
            // if (this.data[index] > this.data[parentIndex]) {
            //     this.swap(index, parentIndex);
            //     index = parentIndex;
            // } else {
            //     break;
            // }
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
            // if (this.data[findIndex] < this.data[leftIndex]) {
            //     findIndex = leftIndex
            // }
            if (this.comparator(this.data[leftIndex], this.data[findIndex])) {
                findIndex = leftIndex
            }
            // 对右子树进行判断(先判断是否有右子树)
            // if (rightIndex <= lastIndex && this.data[findIndex] < this.data[rightIndex]) {
            //     findIndex = rightIndex
            // }
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
- 剑指 Offer 40:最小的k个数
- 1046:最后一块石头的重量
- 703:数据流中的第 K 大元素