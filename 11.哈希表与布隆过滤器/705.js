class Node {
    constructor(data=null,next=null){
        this.data=data
        this.next=next
    }
    add(x){
        let next = this.next
        x.next=next
        this.next=x
    }
    del(){
        if(this.next==null){
            return null
        }
        let next =this.next
        this.next=next.next
    }
}
var MyHashSet = function() {
    this.table = new Array(100).fill(0).map(() => new Array())
};
MyHashSet.prototype.hash_fn=function(x){
    let seed = 31
    let hash = 0
    for(let i=0;x[i];i++){
        hash=hash*seed + x.charCodeAt(i)
    }
    return  hash%this.table.length
}
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.contains(key))return
    let ind = this.hash_fn(key)
    this.table[ind].add(new Node(key))
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let ind = this.hash_fn(key)
    let p =this.table[ind]
    while(p.next!=null&&p.next.data!=key)p=p.next
    p.del()
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let ind = this.hash_fn(key)
    let p =this.table[ind].next
    while(p&&p.data!=key)p=p.next
    return p!=null
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */