// LT 17 - work in progress
var letterCombinations = function (digits) {
    //   i - string n's
    //   o = arr of combinations
    //   e  = no digits provided
    //   c  = digit <= 0 && <=4 , [i] in range [2 - 9]
    //  plan
    //     declare an arr to store combinations 
    //    create a hash map to map keys to alphabet
    //  iterate through map & create an array based on map & digits provided
    //  loop through the array checking all possible combiatoins & store in arr
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let currentDigits = [];
    const foundCombinations = [];
    for (let i of digits) {
        if (map[i]) currentDigits.push(map[i].split(''))
    }
    currentDigits = currentDigits.flat()
    for (let i = 0; i < currentDigits.length - 1; i++) {
        for (let j = i + 2; j < currentDigits.length; j++) {
            foundCombinations.push(currentDigits[i] + currentDigits[j])
        }
    }
    console.log(foundCombinations)
};

    // a , b,  c  = ad, ae, af, 
    // d , e, f