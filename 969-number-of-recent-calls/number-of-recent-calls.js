
var RecentCounter = function() {
    this.req = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.req.push(t);
    while (this.req[0] < t - 3000) this.req.shift();
    return this.req.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */