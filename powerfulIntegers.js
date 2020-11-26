// Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

// Return a list of all powerful integers that have value less than or equal to bound.

// You may return the answer in any order.  In your answer, each value should occur at most once.



// Example 1:

// Input: x = 2, y = 3, bound = 10
// Output: [2,3,4,5,7,9,10]
// Explanation: 
// 2 = 2^0 + 3^0
// 3 = 2^1 + 3^0
// 4 = 2^0 + 3^1
// 5 = 2^1 + 3^1
// 7 = 2^2 + 3^1
// 9 = 2^3 + 3^0
// 10 = 2^0 + 3^2


var powerfulIntegers = function (x, y, bound) {
    let arr = [];
    for (let i = 0; i < bound; i++) {
        if (Math.pow(x, i) > bound) break;
        for (let j = 0; j < bound; j++) {
            let num = Math.pow(x, i) + Math.pow(y, j);
            if (num > bound) break;
            if (num <= bound && !arr.includes(num)) {
                arr.push(num);
            }
        }
    }
    return arr.sort((a, b) => a - b)
};