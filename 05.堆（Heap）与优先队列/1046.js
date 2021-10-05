/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    if(!stones){return 0}
    let a = new MaxPriorityQueue()
    stones.forEach(x=>{
        a.enqueue(x)
    })
    while(a.size()>1){
        let z = a.dequeue().element
        let x = a.dequeue().element
        if(z==x){continue}
        a.enqueue(z-x)
    }
    if(a.size()==1){
        return a.dequeue().element
    }
    return 0
};