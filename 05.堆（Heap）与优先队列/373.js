class Heap {
    /**
    * @param {string} type 堆的类型。默认大顶堆，min为小顶堆
    */
    constructor(type) {
        this.data = []
        this.count = 0
        this.comparator = (a, b) => {
            if (type == 'min') {
                return (a[0]+a[1]) - (b[0+b[1]]) < 0
            }
            return (a[0]+a[1]) -(b[0]+b[1])> 0
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
var kSmallestPairs = function(nums1, nums2, k) {
    let a = new Heap()
    for(let i =0;i<nums1.length&&i<k;i++){
        for(let j =0;j<nums2.length&&j<k;j++){
            if(nums1[i]+nums2[j]>=(a.top[0]+a.top[1])){
                break
            }
            a.push([nums1[i],nums2[j]])
            if(a.size()>k){
                a.pop()
            }
        }  
    }
    let res = a.data.slice(0,k)
    res.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]))
    return res 
};