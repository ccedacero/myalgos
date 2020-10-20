
// s = "leetcode"
s = "loveleetcode";

var firstUniqChar = function (s) {
    let charHash = {};
    for (let i of s) {
        charHash[i] ? charHash[i]++ : charHash[i] = 1;
    }
    // console.log(charHash)
    let count = 0;
    for (let indx of s) {
        if (charHash[indx] === 1) {
            return count;
        }
        count++;
    }
    return -1;
}

// alternative 
let firstUniqueCharAlternative = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    } return -1;
}

console.log(firstUniqueCharAlternative(s))



let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnograms(arr) {
    let hash = {};
    for (let i of arr) {
        let wrd = i.split('').sort().join('');
        hash[wrd] ? hash[wrd].push(i) : hash[wrd] = [i];
    }
    return Object.values(hash);
}

console.log(groupAnograms(strs));


function validPalindrom(str) {
    let strCopy = str.split('').reverse().join('');
    strCopy = strCopy.replace(/[^0-9a-z]/gi, "").toLowerCase();
    str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
    return str === strCopy;
}

function validPalindrom2(str) {
    str = str.replace(/[^0-9a-z]/gi, "");
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left] !== str[right]) return false;
    }
    return true;
}
console.log(validPalindrom("race a car"))
