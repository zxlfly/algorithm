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
        return this.data.pop()
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
var MedianFinder = function() {
    this.left = new Heap('max')
    this.right = new Heap('min')
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.left.size()==0||this.left.top()>=num){
        this.left.push(num)
    }else{
        this.right.push(num)
    }
    if(this.right.size()>this.left.size()){
        this.left.push(this.right.pop())
    }
    if(this.right.size()+2==this.left.size()){
        this.right.push(this.left.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let n = this.left.size()+this.right.size()
    if(n%2==0){
        return (this.left.top()+this.right.top())/2   
    }
    return this.left.top()
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */