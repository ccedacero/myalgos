// Write a function that takes an array of characters
// and reverses the letters in place. ↴

// - Why an array of chars instead of a string?
// The goal of this q is to practice manipulating strings in place.
// Since we're modifying the input,
// we need a mutable type like an array, instead of JS's
// immutable strings.

// - This type of question requires an algorithm to
// swap elements in place

function reverseArr(arrofChars) {
  // failsafe to check length is > 1
  if (arrofChars.length < 2) return arrofChars;
  // declare variables to store my left index, right index, and a temp var
  let leftIndex = 0;
  let rightIndex = arrofChars.length - 1;
  let temp = null;

  while (leftIndex < rightIndex) {
    temp = arrofChars[leftIndex];
    arrofChars[leftIndex] = arrofChars[rightIndex];
    arrofChars[rightIndex] = temp;
    // increase & decreate index to move towards center of arr
    leftIndex++;
    rightIndex--;
  }
  return arrofChars;
  console.log(arrofChars);
}
// arr = [1, 2, 3, 4, 5];
nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6];
console.log(reverseArr(nums1.concat(nums2)));

// Complexity O(n) runtime and O(1) space
// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
// ];
// function reverseWords(arr) {
//   // failsafe to check length
//   if (arr.length < 2) return arr;
//   function reverseWords(word,leftIndex,rightIndex) {
//   // declare 3 vars to store leftIndex, rightIndex, tempIndex
//   let temp = 0;
//   while (leftIndex < rightIndex) {
//     temp = arr[rightIndex];
//     arr[rightIndex] = arr[leftIndex];
//     arr[leftIndex] = temp;
//     leftIndex++;
//     rightIndex--;
//    }
//   }
// }
// console.log(reverseWords(message));
// complete answer is below 
function reverseWords(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }

reverseWords(message)
// Two methods to reverse a string below
function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
}
let str = "hello";
// reverseStr('')

function reverseStr2(str) {
  str = str.split("").reverse().join("");
  return str;
}

// console.log(reverseWords(message));
