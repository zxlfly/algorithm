// Heap为我们自定义的堆 代码在md
var findKthLargest = function(nums, k) {
    if(!nums){return 0}
    let h = new Heap('min')
    nums.forEach(x=>h.push(x))
    while(h.size()>k){
        h.pop()
    }
    return h.top()
};