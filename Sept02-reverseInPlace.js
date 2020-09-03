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
arr = [1, 2, 3, 4, 5];
reverseArr(arr);

// Complexity O(n) runtime and O(1) space
