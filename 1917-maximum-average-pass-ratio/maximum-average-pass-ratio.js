/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return max;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] >= this.heap[idx][0]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let swap = null;

            if (left < length && this.heap[left][0] > element[0]) {
                swap = left;
            }
            if (right < length && this.heap[right][0] > (swap === null ? element[0] : this.heap[left][0])) {
                swap = right;
            }
            if (swap === null) break;

            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
            idx = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

var maxAverageRatio = function(classes, extraStudents) {
    const gain = (pass, total) => (pass + 1) / (total + 1) - pass / total;
    const maxHeap = new MaxHeap();
    for (const [pass, total] of classes) maxHeap.push([gain(pass, total), pass, total]);
    while (extraStudents > 0) {
        const [currGain, pass, total] = maxHeap.pop();
        maxHeap.push([gain(pass + 1, total + 1), pass + 1, total + 1]);
        extraStudents--;
    }
    let totalRatio = 0;
    while (!maxHeap.isEmpty()) {
        const [_, pass, total] = maxHeap.pop();
        totalRatio += pass / total;
    }
    return totalRatio / classes.length;
};