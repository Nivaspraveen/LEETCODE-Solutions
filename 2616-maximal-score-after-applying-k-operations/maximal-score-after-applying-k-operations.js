/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    // Create a max-heap
    const maxHeap = new MaxHeap();

    // Insert all elements into the max-heap
    for (const num of nums) {
        maxHeap.insert(num);
    }

    let score = 0;

    // Perform k operations
    for (let i = 0; i < k; i++) {
        const maxNum = maxHeap.extractMax(); // Get the maximum element
        score += maxNum; // Increase the score

        // Calculate the new value after the operation
        const newNum = Math.ceil(maxNum / 3);

        maxHeap.insert(newNum); // Insert the new value back into the heap
    }

    return score;
};

// MaxHeap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

