function getPermutations(string, h = {}) {
    if (string.length == 0) return new Set(['']);
    let strArray = string.split('');
    if (h[string]) return;
    h[string] = true;
    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < strArray.length; j++) {
            let temp = strArray[i]
            if (strArray[i] !== strArray[j]) {
                strArray[i] = strArray[j]
                strArray[j] = temp;
                let newString = strArray.join('')
                getPermutations(newString, h)
            }
        }
    }
    // console.log(h)
    // console.log(Object.keys(h))
    return new Set(Object.keys(h))

}