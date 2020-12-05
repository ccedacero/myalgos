// count the num of unique values in arr 
// arr = [1, 1,1,1, 2];
arr = [1,2,2,5,7,8,99,200]
// arr = [-2,-1,0,1,2,3,4,5,5,5,5,5,5,5,6,7]
function countUniqueValues(arr) {
    let p1 = 0;
    let p2 = 1;
    let c = 0;
    while (p2 < arr.length) {
        if(p1 === 0) c = 1;
        if (arr[p1] !== arr[p2]) {
            c++
        }
        p1++;
        p2++;
    }
    return c
}

console.log(countUniqueValues(arr));
