
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
// var allAreLessThanSeven = all([1, 2, 7], function (num) {
//     return num < 7;
// });
// function all(arr, callback) {
//     if (arr.length === 0) return true;
//     if(callback(arr[0])){
//         arr.shift();
//         return all(arr,callback)
//     }else{
//         return false; 
//     }
// }

// console.log(allAreLessThanSeven); // false

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// function productOfArray(arr) {
//     if (arr.length === 0) return 1;
//     return arr.pop() * productOfArray(arr);
// }
// // var six = productOfArray([1, 2, 3]) // 6
// var sixty = productOfArray([1, 2, 3, 10]) // 60

// console.log(sixty);

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); //false
// function contains(obj,val){
//   for(const i in obj){
//     if(typeof obj[i]==='object'){
//         return contains(obj[i],val)
//     }
//     if(obj[i]===val) return true; 
//   }
//   return false; 
// }


// console.log(doesntHaveIt);
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:


// function totalIntegers(arr) {
//     if (arr.length === 0) return 0;
//     let count = 0;
//     let first = arr.pop();
//     if(Array.isArray(first)){
//         count+=totalIntegers(first)
//     } else if(Number.isInteger(first)){
//         count++;
//     }
//     return count + totalIntegers(arr);
// }


// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

// Write a function that sums squares of numbers in list that may contain more lists

// Sample:

// var l = [1, 2, 3];
// let l = [[1, 2], 3];
// let l = [[[[[[[[[1]]]]]]]]] 
// let l = [10,[[10],10],[10]] 

// function sumNums(list) {
//     if (list.length === 0) return 0;
//     let count = 0;
//     let num = list.pop();
//     if (Array.isArray(num)) {
//         count += sumNums(num)
//     } else if (Number.isInteger(num)) {
//         count += num * num;
//     }
//     return count + sumNums(list);
// }
// console.log(sumNums(l));


// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.


function replicate(times, num) {
    if (times <= 0) return [];
    return [num].concat(replicate(times - 1, num));
}
// console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

