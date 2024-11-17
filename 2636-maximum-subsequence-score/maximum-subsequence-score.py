import heapq
from typing import List

class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        pairs = [(nums2[i], nums1[i]) for i in range(len(nums1))]
        pairs.sort(reverse=True)
        min_heap = []
        sum_nums1 = 0
        max_score = 0
        for i in range(len(pairs)):
            sum_nums1 += pairs[i][1]
            heapq.heappush(min_heap, pairs[i][1])
            if len(min_heap) > k:
                sum_nums1 -= heapq.heappop(min_heap)
            if len(min_heap) == k:
                max_score = max(max_score, sum_nums1 * pairs[i][0])  
        
        return max_score