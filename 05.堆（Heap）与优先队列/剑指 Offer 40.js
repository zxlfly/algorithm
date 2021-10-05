/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    if(!arr){return null}
    let a = new MinPriorityQueue();
    arr.forEach(x=>{
        a.enqueue(x)
    })
    let res = new Array(k)
    for(let i =0;i<k;i++){
        res[i]=a.dequeue().element
    }
    return res
};