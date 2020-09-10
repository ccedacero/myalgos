function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    if (val > arr[middle]) start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return `found your searched value(${arr[middle]}) at index ${middle}`;
  }
  return -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));

function findSubstring(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(findSubstring("lorielol loledlol", "l"));
