function isPalindrome(str) {
  if (str === "" || str.length === 1) {
    return false;
  }
  let left = 0;
  let right = str.length - 1;
  str = str.toLowerCase().replace(/\W/g, "");
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function validParentheses(str) {
  const stringChars = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];

  for (let char of str) {
    if (char in stringChars) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      currentChar = stack.pop();
      if (stringChars[currentChar] !== char) {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}

validParentheses("((()))");

let arr = ["eat", "tea", "art"];

function groupAnagrams(arr) {
  const strOfObjs = {};
  for (let str of arr) {
    currentStr = str.split("").sort().join("");
    if (!strOfObjs[currentStr]) {
      strOfObjs[currentStr] = [str];
    } else {
      strOfObjs[currentStr].push(str);
    }
  }
  const arrOfStrs = [];
  for (let key in strOfObjs) {
    //        console.log(strOfObjs[key])
    arrOfStrs.push(strOfObjs[key]);
  }
  return arrOfStrs;
}

groupAnagrams(arr);
