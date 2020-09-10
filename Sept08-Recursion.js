function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

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

// function flatten(arr) {
//   let flattenArr = [];
//   arr.forEach((val) => {
//     if (Array.isArray(val)) {
//       flattenArr = flattenArr.concat(flatten(val));
//     } else {
//       flattenArr.push(val);
//     }
//   });
//   return flattenArr;
// }
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }
const capitalizedArr = [];
function capitalizeFirst(arr) {
  if (arr.length == 0) {
    return capitalizedArr;
  } else {
    let word = arr[0][0].toUpperCase() + arr[0].slice(1);
    capitalizedArr.push(word);
    return capitalizeFirst(arr.slice(1));
  }
  return capitalizedArr;
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  // this makes a copy from beginning
  // and drops the last one
  // let res = capitalizeWords(array.slice(0, -1));
  console.log((array.length - 1)[0]);
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
