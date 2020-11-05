
// Complete the caesarCipher function below.
// Initial try
function caesarCipher(s, k) {
    let upper = "";
    let tempStr = "";

    //    middle-Outz

    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt(0);
        let newCode = code + k;
        if (code >= 97 && code <= 122) {
            if (newCode <= 122) {
                tempStr += String.fromCharCode(newCode);
            } else {
                newCode = newCode % 122;
                if (newCode > 26) {
                    newCode = newCode - 26
                }
                newCode = newCode + 96;
                tempStr += String.fromCharCode(newCode);
            }
        } else if (code >= 65 && code <= 90) {
            if (newCode <= 90) {
                tempStr += String.fromCharCode(newCode);
            } else {
                newCode = newCode % 90;
                if (newCode > 26) {
                    newCode = newCode - 26
                }
                newCode = newCode + 64;
                tempStr += String.fromCharCode(newCode);
            }
        } else {
            tempStr += s[i];
        }
    }
    console.log(tempStr)
    return tempStr;
}
