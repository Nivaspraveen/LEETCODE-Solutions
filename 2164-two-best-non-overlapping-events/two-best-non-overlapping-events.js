/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events.sort((a, b) => a[1] - b[1]);
    let maxSingle = 0, result = 0, maxUpto = Array(events.length).fill(0);

    for (let i = 0; i < events.length; i++) {
        maxSingle = Math.max(maxSingle, events[i][2]);
        maxUpto[i] = maxSingle;
    }

    for (let i = 0; i < events.length; i++) {
        const [start, end, value] = events[i];
        let low = 0; high = i - 1, lastNonOverlapping = -1;
        
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][1] < start) {
                lastNonOverlapping = mid;
                low = mid + 1;
            }
            else high = mid - 1;
        }
        const maxWidthCurr = value + (lastNonOverlapping >= 0 ? maxUpto[lastNonOverlapping] : 0);
        result = Math.max(result, maxWidthCurr);
    }
    return result;
};