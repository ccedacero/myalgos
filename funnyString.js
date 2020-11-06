// Hackerrank funny string
function funnyString(s) {
    let r = s.split('').reverse().join('');
    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt())
            !== Math.abs(r[i].charCodeAt() - r[i + 1].charCodeAt())) {
            return 'Not Funny'
        }
    }
    return 'Funny'
}
