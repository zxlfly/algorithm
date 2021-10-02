class Node{
    constructor(val,next,pre){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.pre = (pre===undefined ? null : pre)
    }
    insert_pre(node){
        node.pre=this.pre
        node.next=this
        if(this.pre){
            this.pre.next=node
        }
        this.pre=node
        return true
    }
    insert_next(node){
        node.pre=this
        node.next=this.next
        if(this.next){
            this.next.pre=node
        }
        this.next=node
        return true
    }
    delect_pre(){
        let pre = this.pre
        if(pre==null){return}
        this.pre=pre.pre
        pre.pre!==null?pre.pre.next=this:null
        pre.pre=null
        pre.next=null
        return
    }
    delect_next(){
        let next = this.next
        if(next==null){return}
        this.next=next.next
        if(next.next!==null){
            next.next.pre=this
        }
        next.pre=null
        next.next=null
        return true
    }
}
class MyQueue{
    constructor(){
        this.head =new Node()
        this.tail =new Node()
        this.head.next=this.tail
        this.head.pre=null
        this.tail.next=null
        this.tail.pre=this.head
        this.count=0
    }
    push_back(val){
        this.tail.insert_pre(new Node(val))
        this.count++
        return true
    }
    push_front(val){
        this.head.insert_next(new Node(val))
        this.count++
        return true
    }
    pop_back(){
        if(this.isEmpty()){return false}
        let res = this.tail.pre.val
        this.tail.delect_pre()
        this.count--
        return res
    }
    pop_front(){
        if(this.isEmpty()){return false}
        let res = this.head.next.val
        this.head.delect_next()
        this.count--
        return res
    }
    frond(){
        return this.head.next.val
    }
    back(){
        return this.tail.pre.val
    }
    isEmpty(){
        return this.head.next==this.tail
    }
    size(){
        return this.count
    }
}
var FrontMiddleBackQueue = function() {
    this.q1 = new MyQueue()
    this.q2 = new MyQueue()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.q1.push_front(val)
    this.update()
    return true
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    if(this.q1.size()>this.q2.size()){
        this.q2.push_front(this.q1.back())
        this.q1.pop_back()
    }
    this.q1.push_back(val)
    return
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.q2.push_back(val)
    this.update()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if(this.isEmpty()){return -1}
    let res = this.q1.pop_front()
    this.update()
    return res
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.isEmpty())return -1
    let res = this.q1.pop_back()
    this.update()
    return res
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(this.isEmpty()){return -1}
    let res 
    if(this.q2.size()>0){
        res = this.q2.pop_back()
    }else{
        res=this.q1.pop_back()
    }
    this.update()
    return res
};
/**
 * @return {boolean}
 */
FrontMiddleBackQueue.prototype.isEmpty = function() {
    return this.q1.size()==0
};
/**
 * @return {boolean}
 */
 FrontMiddleBackQueue.prototype.update = function() {
    if(this.q1.size()<this.q2.size()){
        this.q1.push_back(this.q2.frond())
        this.q2.pop_front()
    }else if(this.q1.size()==this.q2.size()+2){
        this.q2.push_front(this.q1.back())
        this.q1.pop_back()
    }
    return true
};
/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */