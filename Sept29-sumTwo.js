// which two indexes equal the target
// value ?

function twoSum(arr, target) {
  const numHash = {};
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    needNum = target - num;
    if (needNum in numHash) {
      return [numHash[needNum], i];
    } else {
      numHash[num] = i;
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
