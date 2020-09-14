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
  const charCount = {};
  const repeats = {};
  let repeatBoolean = false;
  const repeatArr = [];
  const textArr = text.split("");
  for (let i of textArr) {
    charCount[i] = (charCount[i] || 0) + 1;
  }
  for (let j in charCount) {
    if (charCount[j] > 1) {
      console.log(charCount[j]);
      repeats[j] = (repeats[j] || 0) + 1;
      repeatBoolean = true;
      repeatArr.push(charCount[j], j);
    }
  }
  console.log(repeatArr);
  console.log(repeats);
  if (repeatBoolean) return repeatArr[1];
}
console.log(
  maximumOccurringCharacter(
    "NIEWNljtLi3SNtYBAlXDe9DQw98Z3BQLFpRJmSzgNLdnTsj8hNbpTa76uIaFkpB9ljAqHxSs2owZTfnXFOZ6T7z6HJ3nJjMWFLI7ih67OWkko4lOWDoUwAw5wv2pomMlJTMZxVklImBl6ocyNFwdz3gsEwi6iwlGfsm64i9yA82BzLolJYYqc6AHS8c3h7MQxh7zJuLJQlnQHJG6q8U1rUQjeb0lQzfGmASlgPuTzA1sowdN0E1i3IEXSwuTYYCLuMhk8t77TgOtCATt8OqsGP7hGWnp92jxmT4xGN8H0uPmhN8beHEFTm9xVulcoyOUEeTwZRkQjKhXJvyilezWgZGsIntJ71e6bEgLj3Minx2QzPJZ3DBDwZb9Rn31yxzWzPbc7YgUBq0uGia2i21mjVQppMONsxMtDTnh1ZiNaiynBOPPxVwDgarVxrmdOt4gajTAGOKbafOUz9csn3pFTa9k9pg5mUaTUdjemslfoqK5q1EjJov78knrbOpqtle0MXSCGWmVzNlADxR3tM7qimib8fhrbwDG0zHubbOxF3WQbOHTKKOxKvYFnIIj3sjN9prMJtTZ1aGVeWX67sbpUoriPYEoPWvTYEM7t24n9VostsEqFKTqPic1QDxSDNHBGsjTV7sTyvjfqFEwshwkxj0dccc9uUUlGAfrNtsKS1GINUllQxLeCja7DqAkkdUALmI2EMIDq3kKBu7bGBIrXCCdcOCwT8qvwVY3iGEK3unFBm8Mgcn2xiUJLZZfEkJNmiACIg2Z0nHfU2ftsye0LqF7ktnZoKFNXnVmtJZso3Bncc08HVpasiv8bsTc2iSJK38ICBhgynKCYCTWWTYospivZim0ZkcJCrBNmcXltsQ2wUrSSUcvA52a3jFq9Q3G1VjSOTYoiols2LYm0M23S0xVNjgBisYgjJcgmvMv73TRv2Tituqc6TK3ZfCNzXiv4stIWirhAedg0UUZsyNS98vCmhIdJPymoAi78QfZLsZRAiSZe4ybcmNKYti0q8kdi"
  )
);
