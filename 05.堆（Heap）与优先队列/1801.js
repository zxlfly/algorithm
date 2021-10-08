/**
 * @param {number[][]} orders
 * @return {number}
 */
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
                return a[0] - b[0] < 0
            }
            return a[0] - b[0] > 0
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
var getNumberOfBacklogOrders = function(orders) {
    let buy = new Heap()
    let sell = new Heap('min')
    let res = 0
    for(order of orders){
        if(order[2]==0){
            while(order[1]>0&&sell.size()>0&&sell.top()[0]<=order[0]){
               if(order[1]>sell.top()[1]){
                    res = res - sell.top()[1]
                    order[1]-=sell.top()[1]
                    sell.pop()
               }else if(order[1]==sell.top()[1]){
                    res = res - order[1]
                    sell.pop()
                    order[1]=0
               }else if(order[1]<sell.top()[1]){
                    res = res - order[1]
                    sell.top()[1]-=order[1]
                    order[1]=0
               }
            }
            if(order[1] > 0){
                buy.push(order)
                res = res + order[1]
            }
        }else{
            while(order[1]>0&&buy.size()>0&&buy.top()[0]>=order[0]){
                if(order[1]>buy.top()[1]){
                    res = res - buy.top()[1]
                    order[1]-=buy.top()[1]
                    buy.pop()
                }else if(order[1]==buy.top()[1]){
                    res = res - order[1]
                    buy.pop()
                    order[1]=0
                }else if(order[1]<buy.top()[1]){
                    res = res - order[1]
                    buy.top()[1]-=order[1]
                    order[1]=0
                }
            }
            if(order[1] > 0){
                sell.push(order)
                res = res + order[1]
            }
        }
    }
    return res % 1000000007
};