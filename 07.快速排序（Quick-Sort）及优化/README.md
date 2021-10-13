# 快速排序（Quick-Sort）及优化
- 选出一个基准值
- 所有比基准值小的放前面，大的放后面，相等的随意
- 然后递归这个操作
- 最坏的情况是操作n的阶乘次，基准值很重要
- 基准值可以早前中间中选择中间大小的值进行优化
## 普通快排
```
    function QuickSort(arr, l, r) {
        if (l >= r) { return }
        let base = arr[l]
        while (l < r) {
            // 右边找到小的
            while (l < r && arr[r] >= base) {
                r--
            }
            //放到原来基准值的位置，右边就空了一个位置
            if (l < r) {
                arr[l]=arr[r]
            }
            // 左边找到大的
            while (l < r && arr[l] < base) {
                l++
            }
            //放到右边空的位置
            if (l < r) {
                arr[r]=arr[l]
            }
        }
        arr[l] =base 
        QuickSort(arr, l, l - 1)
        QuickSort(arr, l + 1, r)
    }
```
## 单边递归进行优化
```
    function QuickSort(arr, l, r) {
        if (l >= r) { return }
        while (l < r) {
            let base = arr[l]
            do {
                while (arr[l] < base) { l++ }
                while (arr[r] > base) { r-- }
                //就不找一个换一个了，直接找到一大一小的交换
                if (l <= r) {
                    [arr[l], arr[r]] = [arr[r], arr[l]]
                    l++
                    r--
                }
            } while (l < r)
            QuickSort(arr, l, r)
        }
    }
```
## 插入排序
假设前面n-1（n>2）个数已经排好序了，现在将n插到已经排好序的序列中，然后找到合适自己的位置，使得插入之后还是有序的。
```
    function insertion_sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            let j = i - 1
            while (j >= 0 && arr[j] > item) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = item
        }
    }
```
## 优化
```
    const threshold = 16
    function QuickSort(arr, l, r) {
        if (l >= r) { return }
        while (r - l > threshold) {
            let base = getMid(arr[l], arr[r], arr[(l + r)>>2])
            do {
                while (arr[l] < base) { l++ }
                while (arr[r] > base) { r-- }
                if (l <= r) {
                    [arr[l], arr[r]] = [arr[r], arr[l]]
                    l++
                    r--
                }
            } while (l <= r)
            QuickSort(arr, l + 1, r)
            r = r
        }
    }
    function insertion_sort(arr,l,r) {
        // 记录最小的下标，默认是左边第一个
        let ind = l
        // 找到最小的
        for (let i = l+1; i <= r; i++) {
            if(arr[i]<arr[ind]){
                ind=i
            }
        }
        while(ind>l){
            // 交换位置 
            [arr[ind],arr[ind-1]] = [arr[ind-1], arr[ind]]
            ind--
        }
        // 此时最左边第一个是最小的
        // 接下来执行普通插入排序即可
        for(let i =l+2;i<=r;i++){
            let j = i
            while(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1], arr[j]]
                j--
            }
        }
    }
    function getMid(...arr) {
        arr.sort((a, b) => a - b)
        return arr[1]
    }
    function stl_sort(arr,l,r){
        QuickSort(arr,l,r)
        insertion_sort(arr,l,r)
    }
```

## 题目来源[LeetCode](https://leetcode-cn.com/)
- 912： 排序数组
- 剑指 Offer 21： 调整数组顺序使奇数位于偶数前面
- 148： 排序链表
- 75： 颜色分类
- 面试题 17.14： 最小K个数
- 95： 不同的二叉搜索树 II
  - 二叉搜索树：左孩子比父节点小，右孩子比父节点大
- 394： 字符串解码
- 11： 盛最多水的容器
- 470： 用 Rand7() 实现 Rand10()
- 239： 滑动窗口最大值