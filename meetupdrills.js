// Flatiron School Algo Meetup 
// The Fibonacci sequence goes like this: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number can be found by adding up the two numbers before it, and the first two numbers are always 1.

// Write a function that takes an integer n and returns the nth Fibonacci number in the sequence.

// Note: n will be less than or equal to 30.

function fibanacci(n) {
    if (n < 2) return n;
    return (fibanacci(n - 1) + fibanacci(n - 2))
}

console.log(fibanacci(9));

// Given a list of integers sorted in ascending order nums, square the elements and give the output in sorted order.
let arr = [-9, -2, 0, 2, 3];
function square(arr) {
    arr = arr.map(e => Math.abs(e ** 2)).sort((a, b) => a - b)
    return arr
}
console.log(square(arr))
// Given a string of words delimited by spaces, reverse the order of words. For example, given "hello there my friend", return "friend my there hello".
// Example 1
// Input

let sentence = "hello there my friend"
//ans =  "friend my there hello"
function reverseStr(str) {
    return str.split(' ').reverse().join(' ')
}
console.log(reverseStr(sentence))




// Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.
// Constraints
// n ≤ 100,000 where n is the length of nums
// Example 1
nums = [4, 1, 2, 8, 9, 10]

function largeGap(arr) {
    arr = arr.sort((a, b) => a - b)
    let max = 0;
    let p1 = 0;
    let p2 = 1;
    while (p2 < arr.length - 1) {
        let difference = arr[p2] - arr[p1];
        max = Math.max(max, difference)
        p1++
        p2++
    }
    return max;
}
console.log(largeGap(nums))