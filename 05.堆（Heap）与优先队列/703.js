/**
 * @param {number} k
 * @param {number[]} nums
 */
class Heap {
    constructor(data = []) {
        this.data = data
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    shift_up(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.data[index] < this.data[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    shift_down(index) {
        let lastIndex = this.size() - 1
        while (index * 2 + 1 <= lastIndex) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let findIndex = index
            if (this.data[findIndex] > this.data[leftIndex]) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.data[findIndex] > this.data[rightIndex]) {
                findIndex = rightIndex
            }
            if (findIndex == index) { break }
            this.swap(index, findIndex);
            index = findIndex
        }
    }
    push(val) {
        this.data.push(val)
        this.shift_up(this.size() - 1)
    }
    pop() {
        if (this.size() == 0) { return }
        let f = this.data[0]
        let l = this.data.pop()
        this.data[0] = l
        this.shift_down(0)
    }
    top() {
        return this.data[0]
    }
    size() {
        return this.data.length
    }
}
var KthLargest = function (k, nums) {
    this.k = k
    this.a = new Heap()
    for (const x of nums) {
        this.add(x);
    }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
    this.a.push(val)
    if (this.a.size() > this.k) {
        this.a.pop()
    }
    return this.a.top()
};

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/