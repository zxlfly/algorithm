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
### js实现一个大顶堆
```
class Heap{
    constructor(data){
        if(data==null){
            this.count = 0
            this.data=[]
            return
        }
        if(Array.isArray(data)){
            this.data=data||[]
            this.count = data.length
            if(data.length>2){
                for (let i = 0; i < this.data.length; i++) {
                    this.shift_up(i)
                }
            }
        }else {
            return new Error('Please pass in an array')
        }
    }
    shift_up(ind){
        // 如果父节点值小于当前元素节点值，就交换
        // 可以使用解构进行交换
        while(true){
            if(!ind){return}
            let c = this.data[ind]
            // if(this.data[(ind-1)/2]<this.data[ind]){
            //     let f = this.data[(ind-1)/2]
            //     this.data[(ind-1)/2] = c
            //     this.data[ind] = f
            //     ind = (ind-1)/2
            // }else if(this.data[(ind-2)/2]<this.data[ind]){
            //     let f = this.data[(ind-2)/2]
            //     this.data[(ind-2)/2] = c
            //     this.data[ind] = f
            //     ind = (ind-2)/2
            // }
            if(this.data[(ind-1)>>1]<this.data[ind]){
                let f = this.data[(ind-1)>>1]
                this.data[(ind-1)>>1] = c
                this.data[ind] = f
                ind = (ind-1)>>1
            }
            else{
                return
            }
        }
    }
    shift_down(ind){
        // 最大子节点下标
        let n = this.count -1
        // 是否有子节点
        while(ind*2+1<=n){
            // t需要指向大值，初始为ind
            let t = ind
            // 比左子树小，更新为左子树的值
            if(this.data[t]<this.data[ind*2+1]){
                t=ind*2+1
            }
            // 对右子树进行判断(先判断是否有右子树)
            if(ind*2+2<=n&&this.data[t]<this.data[ind*2+2]){
                t=ind*2+2
            }
            // 最大值就是自己
            if(t==ind){break}
            // 交换
            let f = this.data[t]
            let c = this.data[ind]
            this.data[t] = c
            this.data[ind] = f
            ind = t 
        }
    }
    push(val){
        this.data[this.count++] = val
        this.shift_up(this.count-1)
    }
    pop(){
        if(this.count==0){return}
        // 将首尾元素值互换，不删掉可以实现排序
        let f = this.data[0]
        let l = this.data[this.count-1]
        this.data[0] = l
        this.data[this.count-1] = f
        this.count--
        this.shift_down(0)
    }
    top(){
        return this.data[0]
    }
    size(){
        return this.count
    }
}
```

## 题目来源[LeetCode](https://leetcode-cn.com/)
- 剑指 Offer 40. 最小的k个数
- 1046. 最后一块石头的重量
