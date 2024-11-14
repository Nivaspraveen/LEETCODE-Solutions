/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x });
    for (let i = 0; i < k; i++) minHeap.enqueue(nums[i]);
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.front().element) {
            minHeap.dequeue();
            minHeap.enqueue(nums[i]);
        }
    }
    return minHeap.front().element;
};