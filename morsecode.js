var uniqueMorseRepresentations = function (words) {
    let alphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let arr = [];

    for (let i = 0; i < words.length; i++) {
        let str = "";
        for (let j = 0; j < words[i].length; j++) {
            let letter = words[i][j].charCodeAt() - 97;
            str += alphabet[letter]
        }
        arr.push(str);
    }
    return [...new Set(arr)].length

};