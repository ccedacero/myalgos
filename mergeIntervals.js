// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

var merge = function (intervals) {
    //sort by start
    //end time & first start time
    //     compare merged arr to next 
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        const arr = [];
        if (intervals[i][1] >= intervals[i + 1][0]) {
            arr.push(intervals[i][0], Math.max(intervals[i][1], intervals[i + 1][1]))
            intervals.splice(i, 2, arr);
            i--;
        }
    }
    return intervals
};