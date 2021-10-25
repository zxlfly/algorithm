class Node {
    constructor(key=null,value=null,next=null){
        this.key=key
        this.value=value
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
var MyHashMap = function() {
    this.BASE = 769;
    this.table = new Array(this.BASE).fill(0).map(() => new Node());
};

MyHashMap.prototype.put = function(key, value) {
    let ind = this.hash_fn(key);
    let p = this.table[ind]
    while (p.next&&p.next.key!=key) {
        p=p.next
    }
    if(p.next!=null&&p.next.key==key){
        p.next.value=value
    }else{
        p.add(new Node(key,value))
    }
};

MyHashMap.prototype.get = function(key) {
    let ind = this.hash_fn(key);
    let p = this.table[ind].next
    while (p&&p.key!=key) {
        p=p.next
    }
    if(p!=null){
        return p.value
    }
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let ind = this.hash_fn(key);
    let p = this.table[ind]
    while (p.next!=null&&p.next.key!=key) {
        p=p.next
    }
    p.del()
};

MyHashMap.prototype.hash_fn = function(key) {
    return key % this.BASE;
}
