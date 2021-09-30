/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.queue=Array(k+1)
    this.size = k
    this.head=this.tail=this.count = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()){return false}
    this.head = (this.head-1+this.size)%this.size
    this.queue[this.head]=value
    this.count++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()){return false}
    this.queue[this.tail]=value
    this.tail=(this.tail+1)%this.size
    this.count++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()){return false}
    this.head = (this.head+1)%this.size
    this.count--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()){return false}
    this.tail=(this.tail-1+this.size)%this.size
    this.count--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()){return -1}
    return this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()){return -1}
    return this.queue[(this.tail-1+this.size)%this.size]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.count == 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.count == this.size
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */