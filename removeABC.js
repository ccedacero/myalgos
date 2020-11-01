function removeABC(str) {
    let hs = {
        'a': 'a',
        'b': 'b',
        'c': 'c'
    }
    let newStr = "";
    let found = false;
    for (let ch of str) {
        if (!hs[ch]) {
            newStr += ch;
        } else {
            found = true;
        }
    }
    if (found) {
        return newStr
    }
    return null;
}