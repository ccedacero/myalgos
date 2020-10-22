/*
 * Complete the 'maximumOccurringCharacter' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts STRING text as parameter.
 */

// My plan here is to create an object and loop through
// the string creating a count the frequency of ocurrence
// After my loop & object creation, I will loop the object
// and check if there is equality. If there is,
// I will find the index of the original text and then
// return this character from the object with another loop
function maximumOccurringCharacter(text) {
  let strHs = {};
  for (let char of text) {
    strHs[char] ? strHs[char]++ : strHs[char] = 1;
  }
  let count = 0;
  let character = '';
  for (let char of text) {
    if (count < strHs[char]) {
      count = strHs[char];
      character = char;
    }
  }
  return character
}
console.log(
  maximumOccurringCharacter(
    "abcdefffab1c"
  )
);
