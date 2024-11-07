/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.remove = function(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}

LRUCache.prototype.addToHead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.remove(node);
    this.addToHead(node);
    return node.value;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);
        node.value = value;
        this.addToHead(node);
    } else {
        if (this.cache.size === this.capacity) {
            const lruNode = this.tail.prev;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }
        const newNode = new Node(key, value);
        this.addToHead(newNode);
        this.cache.set(key, newNode);
    }
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */