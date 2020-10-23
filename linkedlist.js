// class ListNode {
//   constructor(value) {
//     this.head = value;
//     this.next = null; 
//   }
// }

// const remoteNFromEnd = (head,n) => {
//   // 1measure length 
//   let on = head; 
//   let length = 1; 
//   while (on) {
//     length++;
//     on = on.next;
//   }
//   let leftIndex = length - n - 1; 
//   if(leftIndex === 0) return head.next;
//   // point aorund to delete node
//   on = head;
//   while (leftIndex-- > 1) {
//    on = on.next; 
//   }
//   on.next = on.next.next; 
//   return on; 
//   // handle head delete
// }

// remoteNFromEnd([1,2,3,4,5],2)
// s = "leetcode"
// s = "loveleetcode";

// var firstUniqChar = function(s) {
//   let charHash = {};
//   for(let i of s) {
//     charHash[i] ? charHash[i]++ : charHash[i] = 1; 
//   }
//   // console.log(charHash)
//   let count = 0; 
//   for(let indx of s) {
//      if(charHash[indx] === 1) {
//         return count; 
//           }
//        count++;
//       }
//     return -1; 
//   }

//   // alternative 
//   let firstUniqueCharAlternative = (s) => {
//     for(let i = 0; i < s.length; i++) {
//       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//         return i; 
//       }
//     } return -1;
//   }

//   console.log(firstUniqueCharAlternative(s))



// let  strs = ["eat","tea","tan","ate","nat","bat"];

// function groupAnograms(arr) {
//   let hash = {};
//   for(let i of arr) {
//     let wrd =  i.split('').sort().join('');
//     hash[wrd] ? hash[wrd].push(i) : hash[wrd] = [i];
//     }
//   return Object.values(hash);
// }

// console.log(groupAnograms(strs));


// function validPalindrom(str) {
//   let strCopy = str.split('').reverse().join('');
//   strCopy = strCopy.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   return str === strCopy;
// }

// function validPalindrom2(str) {
//   str = str.replace(/[^0-9a-z]/gi, "");
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(validPalindrom2("race a car"))

// function validParentheses(str) {
//   // we use a stack! an array! Last in is the First out!!!
//   // push && pop === stack api 
//   const stack = [];
//   const pairs = {
//     '{': '}',
//     '[': ']',
//     '(': ')'
//   }
//   for (let char of str) {
//     if (char in pairs) {
//       stack.push(char)
//     } else {
//       if (stack.length === 0) return false;
//       const last = stack.pop();
//       if (pairs[last] !== char) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }

  // let s = "()[]{";
  // console.log(validParentheses(s));


// lt 35
// Binary Search
// let nums =[1,3,5,6];

// function searchPosition(arr,target) {
//   let lo = 0; 
//   let hi = arr.length -1; 
//   while(lo <= hi) {
//     let mid = Math.floor((hi + lo)/2);
//     let midVal = nums[mid];
//     if(target === midVal) return mid;
//     if(target > midVal) lo = mid+1; 
//     if(target < midVal) hi = mid -1;  
//   }
//   return lo; 
// }


// Two Sum! 

let arr =[3,4,8,2];
let target = 6

function twoSum(arr,target) {

let hs = {}
for(let i =0 ; i < nums.length; i++) {
  const num = nums[i];
  const want = target - num; 
  if(want in hs) {
    const leftIndex = ht[want];
    return [leftIndex, i]
  } else {
    // we store the number we're currently traversing along 
    // with it's index 
    ht[num] = i; 
  }
}
return -1; 
}

console.log(twoSum(arr,target))