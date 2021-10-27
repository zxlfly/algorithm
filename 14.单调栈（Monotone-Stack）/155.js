var MinStack = function() {
    this.stack=[]
    this.min_s=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.min_s.length==0)this.min_s.push(val)
    else if(this.min_s[this.min_s.length-1]>=val)this.min_s.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let t = this.stack.pop()
    if(this.min_s[this.min_s.length-1]==t){this.min_s.pop()}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_s[this.min_s.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */