class Node{
    constructor(key=null,value=null,pre=null,next=null){
        this.value=value
        this.key=key
        this.pre=pre
        this.next=next
    }
    remove_this(){
        if(this.pre!=null){
            this.pre.next=this.next
        }
        if(this.next!=null){
            this.next.pre=this.pre
        }
        this.next=this.pre = null
    }
    insertPre(node){
        node.next=this
        node.pre=this.pre
        if(this.pre)this.pre.next=node
        this.pre=node
    }
}
class HashList{
    constructor(capacity){
        this.capacity = capacity
        this.size = 0
        this.head = new Node()
        this.tail = new Node()
        this.head.next=this.tail
        this.tail.pre= this.head
        this.map=new Map()
    }
    put(key,value){
        // 存在更新值
        if(this.map.has(key)){
            let p = this.map.get(key)
            p.value=value
            // 移动位置
            p.remove_this()
            this.tail.insertPre(p)
            this.map.set(key,p)
        }else{
            if(this.size==this.capacity){
                // 需要删除一个
                let f = this.head.next
                this.map.delete(f.key)
                f.remove_this()
                this.size--
            }
            this.size++
            let p = new Node(key,value)
            this.tail.insertPre(p)
            this.map.set(key,p)
        }
    }
    get(key){
        if(this.map.has(key)){
            let p = this.map.get(key)
            // 移动位置
            if(p.next!=this.tail){
                p.remove_this()
                this.tail.insertPre(p)
            }
            this.map.set(key,p)
            return this.map.get(key).value
        }
        return -1
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.hash=new HashList(capacity)
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.hash.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.hash.put(key,value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */