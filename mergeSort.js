// MergeSort with Recursion - Short MergeSort :)

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
}

function mergeSort5(unsortedArr) {
  if (unsortedArr.length <= 1) return unsortedArr;
  let mid = Math.floor(unsortedArr.length / 2),
    left = mergeSort5(unsortedArr.slice(0, mid)),
    right = mergeSort5(unsortedArr.slice(mid));
  return merge(left, right);
}

// Long MergeSort
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }

//   function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
//   }
// }

// console.log(merge([1, 2, 50], [100]));
