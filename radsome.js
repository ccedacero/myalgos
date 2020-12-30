var canConstruct = function (ransomNote, magazine) {
    let a = {};

    for (let i of magazine) {
        if (!a[i]) {
            a[i] = 1
        } else {
            a[i]++;
        }
    }
    for (let n of ransomNote) {
        if (a[n] > 0) {
            a[n]--;
        } else {
            return false;
        }
    }
    return true;
};