// Given an array of size n, find the majority element.The majority element is the element that appears more than ⌊ n / 2 ⌋ times.

// You may assume that the array is non - empty and the majority element always exist in the array.

//     Example 1:

// Input: [3, 2, 3]
// Output: 3
// Example 2:

// Input: [2, 2, 1, 1, 1, 2, 2]
// Output: 2
var majorityElement = function (nums) {
    const map = {};
    let max = 0;
    let num = 0;
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    for (let n in map) {
        if (map[n] > max) {
            max = map[n];
            num = n;
        }
    }
    return num;
};