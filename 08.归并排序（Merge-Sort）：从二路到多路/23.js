/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
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
                return a.val - b.val < 0
            }
            return a.val - b.val > 0
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
        this.data.pop()
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
var mergeKLists = function(lists) {
   let q = new Heap('min');
    for(let x of lists){
        // 将每个链表的头节点压入优先队列
        if(x==null){
            continue
        }
        q.push(x)
    }
    let ret = new ListNode()
    let p = ret
    let cur =null
    while(q.size()>0){
        // 取出最小的
        cur= q.top()
        q.pop()
        p.next=cur
        p=cur
        // 刚才取出的链表没有结束的话，需要将后面的节点继续压入队列
        if(cur.next){
            q.push(cur.next)
        }
    }
    return ret.next
};