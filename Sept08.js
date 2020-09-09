// function reverse(str) {
//   if (str.length <= 1) {
//     return str;
//   }
//   console.log(str);
//   return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("hello"));

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    // console.log(str.slice(1, -1));
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}
// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false
// console.log(isPalindrome("tacocat")); // true

// function someRecursive(arr, callback) {
//   if (arr.length === 0) return false;
//   let val = arr.pop();

//   if (callback(val) === true) {
//     return true;
//   } else {
//     return someRecursive(arr, callback);
//   }
// }

// const isOdd = (val) => val % 2 !== 0;
// console.log(someRecursive([1,2], isOdd)); // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function flatten(arr) {
  let flattenArr = [];
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      flattenArr = flattenArr.concat(flatten(val));
    } else {
      flattenArr.push(val);
    }
  });
  return flattenArr;
}
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
