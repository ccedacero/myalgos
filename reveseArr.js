// Write a function that takes an array of characters and reverses the letters in place. ↴

// function reverseArr(arr) {
//     return arr.reverse().join('');
// }
// str = "hello world";

// function reverseArr2(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// console.log(reverseArr2(str.split('')));

const message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];

function reverseWords(arr) {
    let currentIndx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length || ' ') {
            arr = reverse(arr[i])
        }
    } return arr;
}
function reverseChar(mssg, leftIndx, rightIndx) {
    const temp = mssg[leftIndx]
}
// console.log(reverse('hello'));

console.log(reverseWords(message))
