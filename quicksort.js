function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        const less = arr.filter((num) => num < pivot)
        const greater = arr.filter((num) => num > pivot)
       return (quickSort(less) + pivot + quickSort(greater));
    }
};
console.log(quickSort([10, 5, 2, 3]).split(''))