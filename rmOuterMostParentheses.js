removeOuterParentheses = function (S) {
    let string = ''
    let c = 0;
    let startingNew = false;

    for (let i = 1; i < S.length; i++) {

        if (S[i] === '(') {
            if (!startingNew) {
                string += '('
                c++;
            }
            startingNew = false;

        } else {
            if (c == 0) {
                startingNew = true;
            } else {
                string += ')'
                c--;
            }
        }
    }
    return string;
};