/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []
    let [newStart, newEnd] = newInterval;
    let i =0;

    while (i < intervals.length && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[i][0]);
        newEnd = Math.max(newEnd, intervals[i][1]);
        i++;
    }
    result.push([newStart, newEnd]);
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    return result;
};