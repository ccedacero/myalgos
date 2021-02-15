
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

// function addToN(n) {
//     if(n===1) return 1; 
//     return n + addToN(n-1);
// }
// console.log(addToN(10));

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:
// console.log(power(2, 4)); // 16
// function power(base,exponent) {
//     if(exponent===0) return 1;
//     return base * power(base,exponent-1);
// }
// console.log(power(2,0));

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

// function factorial(n){
//     if(n===1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
var allAreLessThanSeven = all([1, 2, 7], function (num) {
    return num < 7;
});
function all(arr, callback) {
    if (arr.length === 0) return true;
    if(callback(arr[0])){
        arr.shift();
        return all(arr,callback)
    }else{
        return false; 
    }
}

console.log(allAreLessThanSeven); // false