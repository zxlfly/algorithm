/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const threshold = 16
 function QuickSort(arr, l, r) {
     if (l >= r) { return }
     while (r - l > threshold) {
         let x =l,y=r
         let base = getMid(arr[x], arr[y], arr[(x + y)>>2])
         do {
             while (arr[x] < base) { x++ }
             while (arr[y] > base) { y-- }
             if (x <= y) {
                 [arr[x], arr[y]] = [arr[y], arr[x]]
                 x++
                 y--
             }
         } while (x <= y)
         QuickSort(arr, x + 1, r)
         r = x-1
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
var sortArray = function(nums) {
 if(nums.length<=1){return nums}
 stl_sort(nums,0,nums.length-1)
 return nums
};