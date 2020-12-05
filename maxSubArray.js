function maxSubArraySum(arr, n) {
    if (!arr.length) return 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    let tempSum = 0;; 
    for(let i =n; i < arr.length;i++) {

    }
}

// let arr = []
arr = [2, 30, 50, 9, 6, 9, 3000, 2, 200, 1, 8, 5, 6, 3, 300, 5000];
console.log(maxSubArraySum(arr, 3));