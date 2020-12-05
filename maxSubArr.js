// Tips to find sliding window

// * iterable items(things we iterate over sequentially)
//  -contiguous sequence of elements(a subset that ocurrs ONE AFTER ANOTHER)
//  -strings, arrays, linkedlist 

// *min, max, Longest, Shortest, Contained within (string,arr)
//   -maybe we need to calculate something(maxsum, running average,etc...)
// ***contiguous/SEQUENTIAL

// Question variants  **

// 1 . Fixed Lengths 
// max sum of  subarray of size k

//2. Dynamic Variant
//   -smallest Sum >= to some value S (window closest to value S)

//3. Dynamic variant/w Auxiliary Data Structure
//  -Longest substring w/no more than k distict characters \\

// 4. String Permutations 
//   -does the second string exist as a permutation of the first string 
// COMMONALITIES
//  1.everything is grouped in a sequence  - sequential grouping of data 
// 2.Criteria > Longest/smallest/contains/maximize/minimize 

// find max sum subarray 

function maxSubArrSum(arr, n) {
    let maxSum = 0;
    let pair = [];
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
            pair = arr.slice(i - n + 1, i + 1)
        }
    }
    console.log(pair);
    return maxSum;
}



const arr = [1, 2, 5, 2, 8, 1, 5, 100]
console.log(maxSubArrSum(arr, 3));