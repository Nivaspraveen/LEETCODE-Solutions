class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        int n = costs.size();
        long long total = 0;
        int left = 0, right = n - 1;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> leftHeap;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> rightHeap;
        for (int i = 0; i < candidates && left <= right; ++i) {
            leftHeap.push({costs[left], left});
            ++left;
        }
        
        for (int i = 0; i < candidates && left <= right; ++i) {
            rightHeap.push({costs[right], right});
            --right;
        }

        // Hire k workers
        for (int i = 0; i < k; ++i) {
            if (rightHeap.empty() || (!leftHeap.empty() && 
                leftHeap.top().first <= rightHeap.top().first)) {
                total += leftHeap.top().first;
                int idx = leftHeap.top().second;
                leftHeap.pop();
                if (left <= right) {
                    leftHeap.push({costs[left], left});
                    ++left;
                }
            } else {
                total += rightHeap.top().first;
                int idx = rightHeap.top().second;
                rightHeap.pop();
                if (left <= right) {
                    rightHeap.push({costs[right], right});
                    --right;
                }
            }
        }
        return total;
    }
};