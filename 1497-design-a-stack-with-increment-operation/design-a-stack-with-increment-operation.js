/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
    this.increments = new Array(maxSize).fill(0);
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length === 0) return -1;
    const index = this.stack.length - 1, result = this.stack.pop() + this.increments[index];
    if (index > 0) this.increments[index - 1] += this.increments[index];
    this.increments[index] = 0;
    return result;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    const limit = Math.min(k, this.stack.length) - 1;
    if (limit >= 0) this.increments[limit] += val;
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */