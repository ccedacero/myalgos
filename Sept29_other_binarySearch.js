function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      start = mid + 1;
    }
    if (target < arr[mid]) {
      end = mid - 1;
    }
  }
  return start;
}
// binarySearch([-1,0,3,5,9,12],9);
binarySearch([1, 3, 5, 7], 9);
