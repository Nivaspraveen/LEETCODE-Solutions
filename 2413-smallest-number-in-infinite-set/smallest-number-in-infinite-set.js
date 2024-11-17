
var SmallestInfiniteSet = function() {
    this.minHeap = [];
    this.current = 1;
    this.inHeapSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.minHeap.length > 0) {
        const smallest = this.minHeap.shift();
        this.inHeapSet.delete(smallest);
        return smallest;
    }
    return this.current++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.current && !this.inHeapSet.has(num)) {
        this.minHeap.push(num);
        this.inHeapSet.add(num);
        this.minHeap.sort((a, b) => a - b);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */