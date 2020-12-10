function getDifferentNumber(arr) {
    //   Pramp question
    // your code goes here
    //input :  nongegative numbers
    //output: smallest non negative not in the array
    //retriction: 2^31-1

    const sortedArr = arr.sort((a, b) => a - b);
    if (sortedArr[0] !== 0) return 0;
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] - sortedArr[i] > 1) {
            return sortedArr[i] + 1;
        }
    }
    return sortedArr.pop() + 1;
}