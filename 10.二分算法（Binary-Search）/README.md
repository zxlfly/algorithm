# 二分查找
就是二分查找的区间范围，问题规模。  
**可以在tail-head<3的时候剩下的使用for循环解决，避免很多边界条件**
```
//target 目标值
//只能处理有序无重复的
function binary_search(arr,target){
    let head = 0
    let tail = arr.length-1
    let mid
    while(head<=tail){
        mid = (head+tail)>>1
        if(arr[mid]<target){
            head = mid+1
        }else if(arr[mid]==target){
            return mid
        }else{
            tail=mid-1
        }
    }
    return -1
}
```
# 泛型情况
0不满足条件，1满足条件。  
解决01，也就解决10了，相反的  
## 01模型
```
//target为目标值 找到大于等于它的第一个位置
//这种在出现target超界问题时大于最大值返回最大值下标，小于最小值时返回最小值下标
 function binary_search01(arr,target){
    let head = 0
    let tail = arr.length-1
    let mid
    while(head<tail){
        mid = (head+tail)>>1
        if(arr[mid]<target){
            head = mid+1
        }else{
            tail=mid
        }
    }
    return head
    //加上这种判断 就只能处理等于的情况了，如果不存在值就是返回-1
    //if(arr[head]==target){
    //    return head
    //}
    //return -1
}
//一样会有超界问题，也可以加上面的判断
function binary_search01(nums, target) {
    let head = 0,tail=nums.length-1,res=nums.length,mid
    while(head<=tail){
        mid = ((tail-head)>>1)+head
        if(target<=nums[mid]){
            res = mid
            tail=mid-1
        }else{
            head = mid+1
        }
    }
    return res
};
//可以在tail-head<3的时候剩下的使用for循环
function binary_search01(arr,target){
    let head = 0
    let tail = arr.length-1
    let mid
    while(tail-head>3){
        mid = (head+tail)>>1
        if(arr[mid]<target){
            head = mid+1
        }else{
            tail=mid
        }
    }
    for (let i = head; i<=tail; i++) {
        if(arr[i]>=target){return i}
    }
    return -1
}
```
## 10模型
和01相反
# 二分中的数组和函数的关系
数组是下标到值的映射，函数时参数到值的映射。可以求单调函数的解
## 题目来源[LeetCode](https://leetcode-cn.com/)
- 69： x的平方根
- 35： 搜索插入位置
- 1： 两数之和
- 34： 在排序数组中查找元素的第一个和最后一个位置
- 1658：将 x 减到 0 的最小操作数
- 475：供暖器
  - 供暖数组排序
  - 遍历房间找最近的供暖器
    - 使用二分查找
    - 放房间x大于等于的第一个取暖器a
    - 比较a和a-1谁离得近
  - 最大值就是最小半径
- 81：搜索旋转排序数组 II
  - 使用二分，需要判断目标值在哪个半区
- 4：寻找两个正序数组的中位数
- 1011： 在 D 天内送达包裹的能力