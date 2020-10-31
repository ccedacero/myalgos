function findRepeat(numbers) {

    // Find a number that appears more than once
    // const hs = {};
    // for(let ch of numbers) {
    //   if(hs[ch]) return ch;
    //   hs[ch] = 1; 
    // }
    let numCopy = numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] === numbers[i]) return numbers[i];
    }
}
