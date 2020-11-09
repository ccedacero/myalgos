function superReducedString(s) {
    let p = 0;
    let p2 = 1;
    let newStr = "";
    s = [...s];

    while (p < s.length) {
        if (s[p] === s[p2]) {
            s.splice(p, 2);
            p = 0;
            p2 = 1;
        } else {
            p++;
            p2++;
        }
    }
    return s.length ? s.join('') : 'Empty String';
}